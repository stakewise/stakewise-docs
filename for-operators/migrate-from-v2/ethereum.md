# Ethereum

### Step 0. Download Operator

Download the latest operator binary from [here](https://github.com/stakewise/v3-operator/releases).

### Step 1. Validator keys recovery

Follow the steps to recover the keystores using your validator keys mnemonic [here](https://github.com/stakewise/v3-operator#recover-vault-data-directory-and-keystores).

After recovery add fake `deposit_data.json` file to your operator's vault directory, with content:

```
[{"pubkey": "8bfc0efc0209514a62cda2de8346a3a0849352eb830e0ff5b525642d93b9095d879a2789b284da14e348f85711b6b6d0", "withdrawal_credentials": "010000000000000000000000ac0f906e433d58fa868f936e8a43230473652885", "amount": 32000000000, "signature": "b55612acebde460bb273d100bc1574a21aea12f168ad7921cca855b6bf587646b0da329d4b17944773a876a90d87939a001a3857ca224b300ebe57703dce6be37d074e892fd65aa64e92284092efa14c38c1ed17f9fb4e3cd7a585ea66d46b03", "deposit_message_root": "f39eaed6c4c7e3e4563a3b5f3f1ca195c761f10517a5b303031d453dd3be28be", "deposit_data_root": "2d85d54c2b3d1a593f0f974d41fded6d68910e59adfc2d4e90ec74bb2e91e3c4", "fork_version": "00000000", "network_name": "mainnet", "deposit_cli_version": "2.4.0"}]
```

#### Step 1.1. Import Genesis Keys (If applicable)

<mark style="color:red;">**If you run keys from the Verihash operator before continuing, you must import them.**</mark> This can be done with the following command:

<pre><code><strong>./operator \
</strong>   import-genesis-keys \
   --rsa-key /path/to/rsa_key \
   --exported-keys-dir /path/to/keys \
   --vault vault_address
</code></pre>

### Step 2. Setup operator database

Create new database called `operator` and the user for the database. Next, initialize database and upload keysotres:

```
./operator remote-db setup
Enter your vault address: vault_address
Enter the Postgres DB connection URL (e.g. postgresql://username:pass@hostname/dbname): postgresql://username:pass@hostname/dbname
Successfully configured remote database.
Encryption key: SAAHK4DYwAvWMcKpV........
NB! You must store your encryption in a secure cold storage!

./operator remote-db upload-keypairs
```

### Step 3. Start web3signer

To start web3signer, use our chart.  With `values.yaml`&#x20;

```
global:
    network: mainnet
    vault: 0xac0f906e433d58fa868f936e8a43230473652885
dbUrl: jdbc:postgresql://postgres:postgres@localhost/web3signer
dbUsername: web3signer
dbPassword: <password goes here>
dbKeystoreUrl: postgresql://postgres:postgres@localhost/operator
decryptionKey: <decrypt key goes here>
```

The deployment command looks like this:

```sh
helm repo add stakewise https://charts.stakewise.io
helm upgrade --install web3signer stakewise/web3signer \
  -n web3signer \
  -f values.yaml
```

### Step 4. Create wallet and Kubernetes secret

Сreate operator hot wallet by following the instructions [here](https://github.com/stakewise/v3-operator#3-create-wallet).

Before deploying v3-operator service create kubernetes secret with operator wallet:

```
kubectl create secret -n operator generic v3-operator-wallet-data \
  --from-file=/home/username/.stakewise/0xac0f906e433d58fa868f936e8a43230473652885/wallet
```

### Step 5. Start the Operator

To start the operator, use our chart. With `values.yaml`:&#x20;

```
settings:
    network: mainnet
    vault: 0xac0f906e433d58fa868f936e8a43230473652885
    executionEndpoints: https://node.example.com/mainnet-nethermind
    consensusEndpoints: https://node.example.com/mainnet-lighthouse
    walletSecretName: wallet-secret
    remoteDbConfig:
        enabled: true
        dbUrl: postgresql://postgres:postgres@localhost/operator
        remoteSignerUrl: http://web3signer.web3signer:6174
```

The deployment command looks like this:

```sh
helm repo add stakewise https://charts.stakewise.io
helm upgrade --install v3-operator stakewise/v3-operator \
  -n operator \
  -f values.yaml
```

### Step 6. Start the Validators

To start the validators, use our chart. With `values.yaml`:

```
global:
    network: mainnet
    vault: 0xac0f906e433d58fa868f936e8a43230473652885
dbKeystoreUrl: postgresql://postgres:postgres@localhost/operator
enabled: true
type: lighthouse
validatorsCount: 1
suggestedFeeRecipient: 0x48319f97E5Da1233c21c48b80097c0FB7a20Ff86
web3signerEndpoint: http://web3signer.web3signer:6174
beaconChainRpcEndpoints:
    - https://node.example.com/mainnet-lighthouse
extraFlags:
    lighthouse:
        - --builder-proposals
```

The deployment command looks like this:

```sh
helm repo add stakewise https://charts.stakewise.io
helm upgrade --install validators stakewise/web3signer-validators \
  -n validators \
  -f values.yaml
```

