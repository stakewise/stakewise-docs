# Unstake

## Unstake Ether from Stakewise V3 vaults <a href="#unstake-ether-from-stakewise-v3-vaults" id="unstake-ether-from-stakewise-v3-vaults"></a>

To withdraw your ether from the vault, you need to use the exit queue module.

**1. Enter to the exit queue**

```solidity
function enterExitQueue(
  uint256 shares,
  address receiver
) external returns (uint256 positionTicket);
```

First you need to lock assets in the exit queue. The shares to assets rate will be locked at the moment of the call.

**Parameters**

| Name     | Type    | Description                                          |
| -------- | ------- | ---------------------------------------------------- |
| shares   | uint256 | The number of shares to exit                         |
| receiver | address | The address that will receive assets upon withdrawal |

**Return Values**

| Name           | Type    | Description                           |
| -------------- | ------- | ------------------------------------- |
| positionTicket | uint256 | The position ticket of the exit queue |

**2. Claim assets**

```solidity
function claimExitedAssets(
  uint256 positionTicket,
  uint256 timestamp,
  uint256 exitQueueIndex
) external;
```

Claims assets that were withdrawn by the Vault. It can be called only after the `enterExitQueue` call by the `receiver`.

**Parameters**

| Name           | Type    | Description                                                                                                                                                 |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| positionTicket | uint256 | The exit queue ticket received after the `enterExitQueue` call                                                                                              |
| timestamp      | uint256 | The timestamp when the assets entered the exit queue                                                                                                        |
| exitQueueIndex | uint256 | The exit queue index at which the shares were burned. It can be looked up by calling `getExitQueueIndex`. Only relevant for V1 positions, otherwise pass 0. |

**Return Values**

| Name           | Type    | Description                           |
| -------------- | ------- | ------------------------------------- |
| positionTicket | uint256 | The position ticket of the exit queue |

## Smart contracts <a href="#smart-contracts" id="smart-contracts"></a>

#### v2 vaults(current) <a href="#v2-vaultscurrent" id="v2-vaultscurrent"></a>

* [Interface](https://github.com/stakewise/v3-core/blob/50293fb8e8894c85f1bd99b40e130b8d44a47c63/contracts/interfaces/IVaultEnterExit.sol)
* [Implementation](https://github.com/stakewise/v3-core/blob/50293fb8e8894c85f1bd99b40e130b8d44a47c63/contracts/vaults/modules/VaultEnterExit.sol)

#### v1 vaults(legacy) <a href="#v1-vaultslegacy" id="v1-vaultslegacy"></a>

* [Interface](https://github.com/stakewise/v3-core/blob/b93337b7f48f3d94bd76e6facadd0635326237de/contracts/interfaces/IVaultEnterExit.sol)
* [Implementation](https://github.com/stakewise/v3-core/blob/b93337b7f48f3d94bd76e6facadd0635326237de/contracts/vaults/modules/VaultEnterExit.sol)
* [Exit queue internal library](https://github.com/stakewise/v3-core/blob/b93337b7f48f3d94bd76e6facadd0635326237de/contracts/vaults/modules/VaultEnterExit.sol)

## Vaults exit requests <a href="#vaults-exit-requests" id="vaults-exit-requests"></a>

You can fetch current vault exit requests from the Stakewise Graph service.

* [Mainnet](https://mainnet-graph.stakewise.io/subgraphs/name/stakewise/stakewise/graphql)
* [Holesky](https://holesky-graph.stakewise.io/subgraphs/name/stakewise/stakewise/graphql)
* [Gnosis](https://gnosis-graph.stakewise.io/subgraphs/name/stakewise/stakewise/graphql)
* [Chiado](https://chiado-graph.stakewise.io/subgraphs/name/stakewise/stakewise/graphql)

#### GraphQL request example <a href="#graphql-request-example" id="graphql-request-example"></a>

```
query {
  exitRequests {
    id
    receiver
    positionTicket
    timestamp
    totalShares
    totalAssets
    withdrawalTimestamp
    owner
    vault {
      id
    }
  }
}
```

**Return Values**

| Name                | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| id                  | The exit request id. Concatenation of the vault address and position ticket |
| receiver            | The address that will receive assets upon withdrawal                        |
| positionTicket      | The position ticket of the exit queue                                       |
| timestamp           | The timestamp when the assets entered the exit queue                        |
| totalShares         | The number of shares that claimed in request. Used only in V1 vaults        |
| totalAssets         | The number of assets that claimed in request. Used only in V2 vaults        |
| withdrawalTimestamp | Approximate time when Ether will be available for claim.                    |
| owner               | The address that owns the shares                                            |
| vault               | The vault address                                                           |

#### withdrawalTimestamp values <a href="#withdrawaltimestamp-values" id="withdrawaltimestamp-values"></a>

* `null` - request has not been processed yet
* 0 - ether can be claimed from the vault
* `int` - UTC Unix timestamp, the time when Ether will be available for claim.

Check detail in the [Withdrawal timestamp calculation section](unstake.md#withdrawal-timestamp-calculation)

#### GraphQL response example <a href="#graphql-response-example" id="graphql-response-example"></a>

```
{
  "data": {
    "exitRequests": [
      {
        "id": "0xe2fb521979f6c5c1447d5ad4abcb9adc90d4b2f6-541921419113499690567",
        "receiver": "0x9e75255193289d641e893a28e3474f71200b05e6",
        "positionTicket": "541921419113499690567",
        "timestamp": "1726081176",
        "totalShares": "40315878434153532",
        "totalAssets": "0",
        "withdrawalTimestamp": "0",
        "owner": "0x9e75255193289d641e893a28e3474f71200b05e6",
        "vault": {
          "id": "0xe2fb521979f6c5c1447d5ad4abcb9adc90d4b2f6"
        }
      },
    ]
  }
}
```

## Withdrawal timestamp calculation <a href="#withdrawal-timestamp-calculation" id="withdrawal-timestamp-calculation"></a>

The withdrawal timestamp is an estimated time when Ether can be claimed. It isn't taken from contracts directly but is periodically calculated by the StakeWise backend service.

Ether withdrawal is initially taken from the free ether in the vault:

* Ether that is not yet locked in validators.
* New deposits are first used to cover the exit queue, and then for registration of new validators.

If this ether is insufficient, ether withdrawal from active validators in the vault is initiated. The exit of validators is triggered by the Stakewise oracle network.

To calculate the time for ether to be withdrawn from validators:

1. Fetch validators with status ACTIVE\_EXITING or higher.
2. Iterate through them until enough ether has been accumulated.
3. Use validator's withdrawable epoch considering current network withdrawals queue length.

The vault may not have sufficient free funds, or there might be less than needed to initiate validator withdrawal. In such cases, use an average time based on rewards accumulation:

* 10.5 days for Mainnet
* One month for Holesky

In any case, there is a delay of 24 hours after entering the Exit Queue before claiming can occur.

**Exit Request Withdrawal Timestamp Processing**

* New requests are processed after block finalization (approximately 15 minutes for Mainnet).
* The queue is recalculated every hour as new deposits may speed up request processing.

## SDK <a href="#sdk" id="sdk"></a>

The official Javascript SDK designed for effortless data retrieval from the StakeWise platform. This SDK provides a streamlined interface over GraphQL requests and contract interactions.

Check [Exit requests sections](https://github.com/stakewise/v3-sdk/?tab=readme-ov-file#sdkvaultgetexitqueuepositions)

