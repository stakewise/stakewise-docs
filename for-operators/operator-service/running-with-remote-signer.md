# Running with Remote Signer

You may not want the operator service to have direct access to the validator keys. Validator keystores do not need to be present directly in the operator. The operator can query a remote signer to get signatures for validator exit messages.

### Prerequisite

Complete the following steps before proceeding:

1. [Install Operator Service](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)
2. [Prepare Operator Service](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)
3. [Update deposit data file to the Vault](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)

### Remote signer setup (optional)

If you already have private keys uploaded to the remote signer, proceed to [running the operator](https://docs.stakewise.io/for-operators/operator-service/running-with-remote-signer#running-the-operator).

This command will import the private keys in the keystores directory to the remote signer. You will see  prompt whether to remove local keystores or not. Local keystores may be removed as a result of this command since they no longer need to be present.

Example usage:

```bash
./operator remote-signer-setup \
 --vault=0x3320a...68 \
 --remote-signer-url=http://signer:9000
```

```
Successfully imported 20 keys into remote signer.
Remove local keystores? [y/N]: y
Removed keystores from local filesystem.
Done. Successfully configured operator to use remote signer for 20 public key(s)!
```

#### `remote-signer-setup` options

* `--vault` - The vault address.
* `--remote-signer-url` - The base URL of the remote signer, e.g. [http://signer:9000](http://signer:9000)
* `--data-dir` - Path where the vault data is stored. Default is \~/.stakewise.
* `--keystores-dir` - The directory with validator keys in the EIP-2335 standard.
* `--verbose` - Enable debug mode. Default is false.

### Running the operator

Provide the operator with the URL to your remote signer instance using the `--remote-signer-url` flag:

```bash
./operator start --remote-signer-url=http://remote-signer:9000 ...
```

You should see a message similar to this one after starting the operator:

```
Using remote signer at http://remote-signer:9000 for 20 public keys
```
