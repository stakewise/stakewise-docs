---
cover: ../.gitbook/assets/Frame 27513376 (1).png
coverY: 0
---

# Stake

<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption><p>Depositing to the vault</p></figcaption></figure>

There are currently 4 different vault types:

1. Vault - anyone can deposit ETH to the vault. The vault doesn't have ERC20 token associated with it.
2. Private vault - only whitelisted accounts can deposit ETH to the vault. The vault doesn't have ERC20 token associated with it.
3. Vault with ERC20 token - anyone can deposit ETH to the vault. The depositor receives ERC20 token in return.
4. Private vault with ERC20 token - only whitelisted accounts can deposit ETH to the vault. The depositor receives ERC20 token in return.

The Vault assigns shares to the depositors. The amount of shares assigned to the depositor is calculated based on the deposited amount and the total amount of rewards accrued by the Vault over time. When the Vault is initially deployed, every deposited ETH mints an equal amount of shares. As the Vault accrues rewards, the new depositors receive less shares. If the Vault is deployed with ERC20 token, the shares represent the amount of ERC20 tokens the depositor has in the Vault. The `convertToShares` and `convertToAssets` functions can be used to convert shares to assets.

### Depositing

When `keeper.canHarvest(<vault address>)` returns `false`, the user can stake ETH to the Vault without the state update. Otherwise, the `updateStateAndDeposit` function must be used. The state must be up-to-date to make sure that the user will receive the correct amount of shares.

If the Vault is private, only addresses that are in the whitelist (`vault.whitelistedAccounts(address)` must return `true`) can deposit.

#### Depositing without state update

```solidity
function deposit(address receiver, address referrer) public payable virtual returns (uint256 shares)
```

Deposit ETH to the Vault. The sender must transfer ETH together with the call.

**Parameters**

| Name     | Type    | Description                                                   |
| -------- | ------- | ------------------------------------------------------------- |
| receiver | address | The address that will receive Vault's shares                  |
| referrer | address | The address of the referrer. Set to zero address if not used. |

**Return Values**

| Name   | Type    | Description                 |
| ------ | ------- | --------------------------- |
| shares | uint256 | The number of shares minted |

#### Depositing with the state update

```solidity
function updateStateAndDeposit(address receiver, address referrer, struct IKeeperRewards.HarvestParams harvestParams) public payable virtual returns (uint256 shares)
```

Updates Vault state and deposits ETH to the Vault. The sender must transfer ETH together with the call. Also, the harvest parameters must be passed to the Vault (see [Vault state](oracles.md#vault-state)).

**Parameters**

| Name          | Type                                | Description                                                   |
| ------------- | ----------------------------------- | ------------------------------------------------------------- |
| receiver      | address                             | The address that will receive Vault's shares                  |
| referrer      | address                             | The address of the referrer. Set to zero address if not used. |
| harvestParams | struct IKeeperRewards.HarvestParams | The parameters for harvesting Keeper rewards                  |

**Return Values**

| Name   | Type    | Description                 |
| ------ | ------- | --------------------------- |
| shares | uint256 | The number of shares minted |
