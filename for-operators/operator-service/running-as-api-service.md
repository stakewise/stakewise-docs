# Running as API service

The Operator API facilitates the initiation of validator registrations via API calls, proving particularly useful in cases where the operator independently oversees the creation and storage of validator keys. Within this framework, keystores are generated and preserved externally from the operator. Similarly, exit signatures are produced outside the operator. In essence, the operator acts as an intermediary for communication with the vault contract.

### Prerequisite

Before proceeding, ensure the following prerequisites are completed:

1. [Install Operator Service](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)
2. Generate a hot wallet or connect an existing one. Refer to the [Prepare Operator Service](https://docs.stakewise.io/for-operators/operator-service#prepare-operator-service) section for more details.

### Running operator API

To run the Operator API, use the command below:

```sh
./operator start-api
```

This command allows for direct parameter input (e.g., `--data-dir`) or through environment variables. A basic example of setting environment variables is as follows:

```toml
CONSENSUS_ENDPOINTS=https://lighthouse
DATA_DIR=/data
DATABASE_DIR=/database
EXECUTION_ENDPOINTS=https://nethermind
NETWORK=holesky
VAULT=0x3cc...
RELAYER_ENDPOINT=https://relayer
```

For additional parameter information, use the `--help` flag:

```bash
./operator start-api --help
```

**Docker Usage Notes**

When operating within Docker, it's necessary to specify the `--data-dir` variable, such as `--data-dir=/data`. Ensure the `data-dir` is mapped to a directory on the host.

The `database-dir` should also be mapped to a host directory or Docker volume, with write permissions enabled for the directory linked to `database-dir`. Setting up permissions is not required if using volumes.

### Relayer API

{% hint style="info" %}
Relayer API is supported since Operator release v2.0.0
{% endhint %}

#### What is Relayer

Relayer is a service providing validators registration data to Operator.

Many relayers are possible for various use-cases. Feel free to implement your own relayer using API specification below.

#### Who is validators manager

Validators manager is a role who can register validators in the vault.

For most vaults validators manager address equals to deposit data registry address. This is default setup for vaults. In this case you have to upload deposit data to your vault. Vault contract will require Merkle proof for validators on each registration call.

For more advanced cases you can customise validators manager in vault UI. Go to settings -> Roles -> Validators manager. In this setup you don't have to upload deposit data. Vault contract will require validators manager signature on each registration call instead of Merkle proof.

#### Operator-Relayer flow

Operator listens to vault balance changes. When 32 Eth is available Operator predicts next validator index and requests Relayer to obtain validator registration data.

Relayer should provide validator registration data when requested. The data includes:

* validator public key, deposit signature, deposit amount
* validator exit signature
* validators manager signature

To produce exit signature Relayer should use validator index passed in request. Operator passes start validator index. You should increment this index for each validator except the first one.

Validators manager signature is [EIP-712](https://eips.ethereum.org/EIPS/eip-712) signature. See EIP-712 message structure in [vault contract](https://github.com/stakewise/v3-core/blob/main/contracts/validators/ValidatorsChecker.sol#L187). Signer address must be validators manager configured in Vault settings.

Once Operator receives registration data Operator requests Oracles approvals and submits registration to Vault contract.

#### Request format:

```
POST /validators

{
  "vault": "0x1234...",
  "validators_start_index": int,
  "validators_count": int,
  "validators_total": int
}
```

`validators_count` - number of validators in current batch. Maximum batch size is determined by prococol config, currently 10.

`validators_total` - total number of validators supplied by vault assets. `validators_total` should be more than or equal to `validators_count` . Relayer may use this value to allocate larger portions of validators in background.

#### Response format:

```
{
  "validators": [
    {
      "public_key": "string",
      "deposit_signature": "string",
      "amount_gwei": int,
      "exit_signature": "string"
    }
  ],
  "validators_manager_signature": "string"
}
```

### Relayer example

See demo project [relayer-example](https://github.com/stakewise/relayer-example). You may use it as a starting point for your own Relayer.
