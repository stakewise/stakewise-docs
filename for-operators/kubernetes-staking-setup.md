---
cover: ../.gitbook/assets/Frame 27513376 (1).png
coverY: 0
---

# Kubernetes staking setup

## Hardware Requirements

To ensure optimal performance of your Kubernetes cluster, we recommend the following minimum configurations:

1. Nodes: Your Kubernetes cluster should include a minimum of three nodes. Each node should be equipped with a configuration of 16 CPU/32 GB RAM.
2. CPU: Each node should have at least 16 cores running at a speed of 2.8 GHz or more.
3. Memory: Each node should be equipped with a minimum of 32GB RAM.
4. Storage: SSD storage is required, with a minimum of 1000GB for each execution client and 500GB for each consensus client.
5. Network: Broadband connection of at least 100 MBit/sec is required.
6. Helm: We recommend using version 3.10 or later. Although our charts may work with earlier versions of Helm, we have only tested them with version 3.10 and above.
7. Kubernetes: We recommend using version 1.22 or later. While our charts may work with earlier versions of Kubernetes, we have only tested them with version 1.22 and above.
8. PV Provisioner: Ensure that the underlying infrastructure supports PV provisioner.

Please ensure your setup meets these requirements for the best experience.

## Setting up Kubernetes

Before proceeding with the setup, ensure you have installed all the necessary Helm repositories:

```bash
helm repo add stakewise https://charts.stakewise.io
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

### Step 1: Monitoring Configuration

{% hint style="info" %}
**Note:** If Prometheus is already set up in your Kubernetes cluster, feel free to skip this step.
{% endhint %}

For robust system monitoring and alert management, our supported charts come with built-in capabilities to enable Prometheus, Grafana, and Alertmanager.

To install Prometheus, Grafana, and Alertmanager, follow these instructions:

{% tabs %}
{% tab title="Default" %}
```bash
helm upgrade --install kube-prometheus-stack prometheus-community/kube-prometheus-stack \
    --set='grafana.sidecar.dashboards.enabled=true' \
    --set='grafana.sidecar.dashboards.searchNamespace=true' \
    --set='prometheus.prometheusSpec.ruleSelectorNilUsesHelmValues=false' \
    --set='prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false' \
    --set='prometheus.prometheusSpec.podMonitorSelectorNilUsesHelmValues=false' \
    --set='prometheus.prometheusSpec.probeSelectorNilUsesHelmValues=false' \
    --create-namespace \
    --namespace monitoring \
    --version 52.1.0 \
    -f prom.yaml
```

`prom.yaml`:

```yaml
prometheus:
  prometheusSpec:
    storageSpec:
      volumeClaimTemplate:
        spec:
          storageClassName: "{REPLCAE_ME_WITH_STORAGE_CLASS_NAME}"
          accessModes: ["ReadWriteOnce"]
          resources:
            requests:
              storage: 100Gi
grafana:
  persistence:
    enabled: true
    type: pvc
    storageClassName: "{REPLCAE_ME_WITH_STORAGE_CLASS_NAME}"
    accessModes: ["ReadWriteOnce"]
    size: 10Gi
    finalizers:
    - kubernetes.io/pvc-protection
```
{% endtab %}

{% tab title="For GKE/EKS" %}
```shell
helm upgrade --install kube-prometheus-stack prometheus-community/kube-prometheus-stack \
    --set='kubeControllerManager.enabled=false' \
    --set='kubeEtcd.enabled=false' \
    --set='kubeScheduler.enabled=false' \
    --set='kubeProxy.enabled=false' \
    --set='defaultRules.rules.etcd=false' \
    --set='defaultRules.rules.kubernetesSystem=false' \
    --set='defaultRules.rules.kubeScheduler=false' \
    --set='grafana.sidecar.dashboards.enabled=true' \
    --set='grafana.sidecar.dashboards.searchNamespace=true' \
    --set='prometheus.prometheusSpec.ruleSelectorNilUsesHelmValues=false' \
    --set='prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false' \
    --set='prometheus.prometheusSpec.podMonitorSelectorNilUsesHelmValues=false' \
    --set='prometheus.prometheusSpec.probeSelectorNilUsesHelmValues=false' \
    --create-namespace \
    --namespace monitoring \
    --version 52.1.0 \
    -f prom.yaml
```

`prom.yaml`:

```yaml
prometheus:
  prometheusSpec:
    storageSpec:
      volumeClaimTemplate:
        spec:
          storageClassName: "gp2"
          accessModes: ["ReadWriteOnce"]
          resources:
            requests:
              storage: 100Gi
grafana:
  persistence:
    enabled: true
    type: pvc
    storageClassName: "gp2"
    accessModes: ["ReadWriteOnce"]
    size: 10Gi
    finalizers:
    - kubernetes.io/pvc-protection
```
{% endtab %}
{% endtabs %}

<details>

<summary>Optional (Grafana Dashboards)</summary>

Import [dashboards](https://github.com/stakewise/helm-charts/tree/main/charts/grafana-stakewise-dashboards/dashboards) into Grafana manually or automatically with Helm:

```bash
helm upgrade --install grafana-stakewise-dashboards stakewise/grafana-stakewise-dashboards \
  --namespace monitoring
```

</details>

### Step 2. Configuring the Execution Node

Execution nodes play a critical role in the Ethereum ecosystem as they are employed by validators for proposing new blocks. Therefore, to run validator and beacon nodes, a stable connection to the Ethereum chain is essential.

It is important to note that the deployment of execution nodes must be done before other processes. Currently, we support execution nodes such as Geth, Erigon, Besu, and Nethermind.

{% hint style="warning" %}
Only Nethermind and Erigon is supporting Gnosis Chain
{% endhint %}

Prior to deployment, you'll need to generate a JSON Web Token (JWT) which is used for securing the communication between the beacon node and the execution client. You can generate a JWT by using a command line tool. For instance:

```
export JWT=`openssl rand -hex 32`
```

To proceed with the deployment, choose the client you prefer and run the corresponding command:

{% tabs %}
{% tab title="Geth" %}
```bash
helm upgrade --install geth stakewise/geth \
  --set="global.replicaCount=3" \
  --set="global.network=mainnet" \
  --set="global.metrics.enabled=true" \
  --set="global.metrics.serviceMonitor.enabled=true" \
  --set="global.metrics.prometheusRule.enabled=true" \
  --set="global.JWTSecret=${JWT}" \
  --create-namespace \
  --namespace chain
```
{% endtab %}

{% tab title="Erigon" %}
```bash
helm upgrade --install erigon stakewise/erigon \
  --set="global.replicaCount=3" \
  --set="global.network=mainnet" \
  --set="global.metrics.enabled=true" \
  --set="global.metrics.serviceMonitor.enabled=true" \
  --set="global.metrics.prometheusRule.enabled=true" \
  --set="global.JWTSecret=${JWT}" \
  --create-namespace \
  --namespace chain
```
{% endtab %}

{% tab title="Besu" %}
```bash
helm upgrade --install besu stakewise/besu \
    --set="replicaCount=3" \
    --set="network=mainnet" \
    --set="metrics.serviceMonitor.enabled=true" \
    --set="metrics.prometheusRule.enabled=true" \
    --set="global.JWTSecret=${JWT}" \
    --create-namespace \
    --namespace chain
```
{% endtab %}

{% tab title="Nethermind" %}
```bash
helm upgrade --install nethermind stakewise/nethermind \
  --set="global.replicaCount=3" \
  --set="global.network=mainnet" \
  --set="global.metrics.enabled=true" \
  --set="global.metrics.serviceMonitor.enabled=true" \
  --set="global.metrics.prometheusRule.enabled=true" \
  --set="global.JWTSecret=${JWT}" \
    --create-namespace \
    --namespace chain
```
{% endtab %}
{% endtabs %}

### Step 3. Setting Up the Consensus Node

The consensus beacon node plays a crucial role in managing a full Proof-Of-Stake blockchain, also known as a beacon chain. This node uses distributed consensus to agree on the blocks within the network. Validators connect to the beacon nodes to receive block attestation/proposal assignments.

Historically, an execution client by itself was sufficient to operate a full Ethereum node. However, post the "Merge", execution clients alone won't be able to track the Ethereum chain independently. They will need to pair with another piece of software, referred to as a "consensus client". In this configuration, the execution client is responsible for transaction handling, gossiping transactions, state management, and the operation of the Ethereum Virtual Machine (EVM). Yet, it is the consensus client that takes over responsibilities such as block building, block gossiping, and handling consensus logic, relieving the execution clients of these duties.

{% hint style="info" %}
For stable Gnosis network support, the compatible clients are as follows:

* For execution: Nethermind and Erigon
* For consensus: Teku and Lighthouse
{% endhint %}

{% hint style="danger" %}
While setting up consensus charts, keep in mind that they don't have a 'replicaCount' parameter. Instead, you are required to specify a list of execution endpoints. For each endpoint you specify, a separate stateful set will be created.
{% endhint %}

Choose one or two clients to install and deploy:

{% tabs %}
{% tab title="Prysm" %}
```bash
helm upgrade --install prysm stakewise/prysm \
  --set="global.network=mainnet" \
  --set="global.JWTSecret=${JWT}" \
  --set="global.executionEndpoints[0]=http://nethermind-0.nethermind:8545" \
  --set="global.executionEndpoints[1]=http://nethermind-1.nethermind:8545" \
  --set="global.executionEndpoints[2]=http://nethermind-2.nethermind:8545" \
  --set="global.metrics.enabled=true" \
  --set="global.metrics.serviceMonitor.enabled=true" \
  --set="global.metrics.prometheusRule.enabled=true" \
  --create-namespace \
  --namespace chain
```
{% endtab %}

{% tab title="Lighthouse" %}
```bash
helm upgrade --install lighthouse stakewise/lighthouse \
  --set="global.network=mainnet" \
  --set="global.JWTSecret=${JWT}" \
  --set="global.executionEndpoints[0]=http://geth-0.geth:8551" \
  --set="global.executionEndpoints[1]=http://geth-1.geth:8551" \
  --set="global.executionEndpoints[2]=http://geth-2.geth:8551" \
  --set="global.metrics.enabled=true" \
  --set="global.metrics.serviceMonitor.enabled=true" \
  --set="global.metrics.prometheusRule.enabled=true" \
  --create-namespace \
  --namespace chain
```
{% endtab %}

{% tab title="Teku" %}
```bash
helm upgrade --install teku stakewise/teku \
  --set="global.network=mainnet" \
  --set="global.JWTSecret=${JWT}" \
  --set="global.executionEndpoints[0]=http://erigon-0.erigon:8551" \
  --set="global.executionEndpoints[1]=http://erigon-1.erigon:8551" \
  --set="global.executionEndpoints[2]=http://erigon-2.erigon:8551" \
  --set="global.metrics.enabled=true" \
  --set="global.metrics.serviceMonitor.enabled=true" \
  --set="global.metrics.prometheusRule.enabled=true" \
  --create-namespace \
  --namespace chain
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
The recommended configuration involves deploying two replicas of the primary consensus client and one replica of the standby consensus client. Validators will establish connections evenly across all primary replicas and will automatically switch to another primary replica if their current connection fails.

In the event that the primary client encounters an issue, validators can transition to the standby client. This ensures a seamless operation as they won't have to wait for the standby client to synchronize with the chain.
{% endhint %}

### Step 4. Prepare validator keys

#### Deploy PostgreSQL

{% hint style="info" %}
Installing and configuring PostgreSQL is beyond the scope of this guide, and we hope that operators will be able to choose and implement the correct reliable solution on their own. PostgreSQL is used to store the validators' keys in encrypted form, as well as to store the slashing history of the web3signer database.
{% endhint %}

After the database is deployed, two databases and two users must be created:

* `web3signer` - which stores web3signer's data
* `operator` - which stores validator keys and configs generated via `v3-operator`

#### Prepare Operator

Complete the following steps before proceeding:

1. [Install Operator Service](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)
2. [Prepare Operator Service](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)
3. [Update deposit data file to the Vault](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)

#### Setup database

The command creates tables and generates encryption key for the database:

```bash
./v3-operator remote-db \
  --db-url=postgresql://postgres:postgres@localhost/operator \
  --vault=0x8189aF89A7718C1baB5628399FC0ba50C6949bCc \
  setup
```

```
Successfully configured remote database.
Encryption key: D/6CbpJen3J0ue0tWcd+d4KKHpT4kaSz3IzG5jz5LFI=
NB! You must store your encryption in a secure cold storage!
```

**NB! You must store the generated encryption key in a secure cold storage. You would have to re-do the setup if you lose it.**

#### **Load keystores to the database**

The command loads encrypted keystores and operator config to the remote DB:

```bash
./v3-operator remote-db \
  --db-url=postgresql://postgres:postgres@localhost/operator \
  --vault=0x8189aF89A7718C1baB5628399FC0ba50C6949bCc \
  upload-keypairs \
  --encrypt-key=D/6CbpJen3J0ue0tWcd+d4KKHpT4kaSz3IzG5jz5LFI= \
  --execution-endpoints=http://localhost:8545
```

```
Loading keystores from /Users/user/.stakewise/0x8189af89a7718c1bab5628399fc0ba50c6949bcc/keystores...
Encrypting 10000 keystores...
Uploading updates to the remote db...
Successfully uploaded keypairs for the 0x8189aF89A7718C1baB5628399FC0ba50C6949bCc vault.
```

### Step 5. Web3Signer

Web3Signer is an open-source signing service developed under the Apache 2.0 license and written in Java.Web3Signer is capable of signing on multiple platforms using private keys stored in an external vault, or encrypted on a disk.

[Web3Signer Documentation.](https://docs.web3signer.consensys.net/en/latest/)

#### Deploy Web3Signer

Once you've successfully deployed the database, deploy web3signer service

```bash
helm upgrade --install web3signer stakewise/web3signer \
  --set='global.network=mainnet' \
  --set='global.vault={VAULT_ADDRESS}' \
  --set='replicaCount=3' \
  --set='dbUrl=jdbc:postgresql://cloudsqlproxy.default/web3signer' \
  --set='dbUsername=username' \
  --set='dbPassword=password' \
  --set='dbKeystoreUrl=postgresql://example:example@cloudsqlproxy.default/operator' \
  --set='decryptionKey=<decryption key from the operator CLI' \
  --create-namespace \
  --namespace validators
```

### Step 6. Validators

Validators are responsible for storing data, processing transactions, and adding new blocks to the blockchain. This will keep Ethereum secure for everyone and earn new ETH in the process.

Before deploying the validators, make sure you have deployed Web3Signer and synchronized validator keys in the steps above.

Deploy the chart, after specifying all required parameters:

```bash
helm upgrade --install validators stakewise/web3signer-validators \
  --set='global.network=mainnet' \
  --set='global.vault={VAULT_ADDRESS}' \
  --set='type=lighthouse' \
  --set='validatorsCount=8' \
  --set='beaconChainRpcEndpoints[0]=http://lighthouse-0.chain:5052' \
  --set='beaconChainRpcEndpoints[1]=http://lighthouse-1.chain:5052' \
  --set='beaconChainRpcEndpoints[2]=http://lighthouse-2.chain:5052' \
  --set='web3signerEndpoint=http://web3signer:6174' \
  --set='dbKeystoreUrl=postgresql://example:example@cloudsqlproxy.default/operator' \
  --set='graffiti=StakeWise' \
  --set='metrics.enabled=true' \
  --set='metrics.serviceMonitor.enabled=true' \
  --set='metrics.prometheusRule.enabled=true' \
  --set='suggestedFeeRecipient={FEE_RECIPIENT_ADDRESS}' \
  --create-namespace \
  --namespace validators
```

{% hint style="info" %}
Make sure you have the right number of validators running and restart them so that they will synchronize the latest changes from the Web3Signer.
{% endhint %}

{% hint style="info" %}
**`validatorsCount`**: This determines the total number of validators you're going to use. The validator keys will be distributed equally among all validators. For example, if you have 1000 keys and 10 validators, each validator will have 100 keys. If you have 20 validators, each will have 50 keys and so on.
{% endhint %}

{% hint style="info" %}
`{FEE_RECIPIENT_ADDRESS}` - address from the vault page in the details section: **`Validator fee recipient`**
{% endhint %}

{% hint style="info" %}
`{VAULT_ADDRESS}` - address from the vault page in the details section: **`Contract address`**
{% endhint %}

### Step 7. Deploy Operator

Before deploying v3-operator service create kubernetes secret with operator wallet:

```
kubectl create secret --namespace operator generic v3-operator-wallet-data --from-file=/home/username/.stakewise/<vault>/wallet
```

Create `values.yaml` for the operator deployment:

```yaml
settings:
  verbose: "false"
  network: "mainnet"
  vault:  "{VAULT_ADDRESS}"
  executionEndpoints: "https://node.example.com/execution"
  consensusEndpoints: "https://node.example.com/consensus"
  walletSecretName: "v3-operator-wallet-data"
  remoteDbConfig:
    enabled: true
    dbUrl: "postgresql://example:example@cloudsqlproxy.default/operator"
    remoteSignerUrl: "http://web3signer.validators:6174"
```

```bash
helm upgrade --install v3-operator stakewise/v3-operator \
  -f values.yaml \
  --namespace operator
```

{% hint style="info" %}
`{VAULT_ADDRESS}` - address from the vault page in the details section: **`Contract address`**
{% endhint %}
