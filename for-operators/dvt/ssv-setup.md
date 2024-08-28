---
description: >-
  The below is a quick walkthrough on how to setup validators on StakeWise V3
  that run on SSV.
---

# SSV Setup

DVT networks like SSV enable to run ethereum validators in a decentralized way by splitting the validator keys between independent operators. SSV is built as a permissionless DVT network in which anyone can become a DVT node operator, and be included in clusters (a set of operators responsible for operating an ethereum validator).

### Prerequisites

1. [Install Docker Engine](https://docs.docker.com/engine/install/)
2. Ensure Docker is running.

```
$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
 ...
```

3. [Create Vault](../../guides/running-a-vault.md)
4. [Setup Operator Service](../operator-service/)

### Step 1. Register SSV Operator

You can use the [SSV UI](https://app.ssv.network/) for that. After registration run SSV Node.

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-03 at 09.49.12.png" alt=""><figcaption><p>Click Join As Operator</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-03 at 09.50.13.png" alt=""><figcaption><p>Click Register Operator</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-03 at 09.57.07.png" alt=""><figcaption><p>Generate Operator Keys and fill operator public key field</p></figcaption></figure>

#### Generate Operator Keys (Encrypted)

The most secure way to run your Operator node, is to generate an Encrypted key pair. This way, your **Public Key (PK)** and **Secret Key (SK)** will be encrypted with a password of your choosing.

**Password file**

You will need to create a file (named `password` in this example) containing the password you chose for your Secret Key:

<pre class="language-bash"><code class="lang-bash"><strong>echo "&#x3C;MY_OPERATOR_PASSWORD>" >> password
</strong></code></pre>

**Key pair generation and encryption**

The node Docker image will generate keys for you, then encrypt them with a password you provide, using the following command:

{% code overflow="wrap" %}
```bash
docker run --name ssv-node-key-generation -v "$(pwd)/password":/password -it "bloxstaking/ssv-node:latest" /go/bin/ssvnode generate-operator-keys --password-file=password && docker cp ssv-node-key-generation:/encrypted_private_key.json ./encrypted_private_key.json && docker rm ssv-node-key-generation
```
{% endcode %}

Here is an example of the generated file.

{% code title="encrypted_private_key.json" %}
```json
{
  "checksum": {
    "function": "sha256",
    "message": "affa5deb755d8ad13a039117dc6850d2a25ad62a870a1e1f8d4ef...",
    "params": {}
  },
  "cipher": {
    "function": "aes-128-ctr",
    "message": "3022f3b5043b77eda7f336dd0218e6b7e633a3f42f7ae92ed9...",
    "params": { "iv": "12e787716b0e3c30f2d68ed05464c16f" }
  },
  "kdf": {
    "function": "pbkdf2",
    "message": "",
    "params": {
      "c": 262144,
      "dklen": 32,
      "prf": "hmac-sha256",
      "salt": "bc71d3213fe17f15879e6bc468b30eeeb2d0969176491d87f9b00a37bf314a4c"
    }
  },
  "publicKey": "LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJak..."
}
```
{% endcode %}

{% hint style="info" %}
Pay close attention to the publicKey field, as the name says, it contains the public key, which is needed to register the Operator on the ssv.network.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-03 at 10.05.05.png" alt=""><figcaption><p>Set Operator Fee and click Next</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-03 at 10.05.56.png" alt=""><figcaption><p>Click Register Operator</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-03 at 10.07.29.png" alt=""><figcaption><p>Done</p></figcaption></figure>

#### Step 3.1. Run SSV Node

{% embed url="https://docs.ssv.network/operator-user-guides/operator-node" %}

**Create Configuration File**

Copy the following `config.yaml` file, just be sure to replace all the placeholders (`ETH2_NODE`, `ETH1_WEBSOCKET_ADDRESS`, `OPERATOR_SECRET_KEY`, etc.) with actual values.

In particular, substitute `ENCRYPTED_PRIVATE_KEY_JSON` with the operator encrypted private key file generated above (e.g. `encrypted_private_key.json`) and `PASSWORD_FILE` with the file containing the password used to generate the encrypted key itself.

{% code title="config.yaml" %}
```yaml
global:
  # Console output log level 
  LogLevel: info
  
  # Debug logs file path
  LogFilePath: ./data/debug.log
  
  # Number of log files preserved (roughly equivalent to number of days)
  # Increase if you want to preserve log files for longer. This would require more disk space
  LogFileBackups: 10

db:
  # Path to a persistent directory to store the node's database.
  Path: ./data/db

ssv:
  # The SSV network to join to
  # Mainnet = Network: mainnet (default)
  # Testnet (Goerli)  = Network: jato-v2
  # Testnet (Holesky) = Network: holesky
  Network: mainnet
  
  ValidatorOptions:
    # Whether to enable MEV block production. Requires the connected Beacon node to be MEV-enabled.
    BuilderProposals: false

eth2:
  # HTTP URL of the Beacon node to connect to.
  BeaconNodeAddr: <ETH2_NODE> # e.g. http://example.url:5052

eth1:
  # WebSocket URL of the Eth1 node to connect to.
  ETH1Addr: <ETH1_WEBSOCKET_ADDRESS> # e.g. ws://example.url:8546/ws

p2p:
  # Optionally provide the external IP address of the node, if it cannot be automatically determined.
  # HostAddress: 192.168.1.1

  # Optionally override the default TCP & UDP ports of the node.
  # TcpPort: 13001
  # UdpPort: 12001

KeyStore:
  PrivateKeyFile: <ENCRYPTED_PRIVATE_KEY_JSON> # e.g. ./encrypted_private_key.json
  PasswordFile: <PASSWORD_FILE> # e.g. ./password

# This enables monitoring at the specified port, see https://docs.ssv.network/run-a-node/operator-node/maintenance/monitoring
MetricsAPIPort: 15000
```
{% endcode %}

{% hint style="info" %}
Make sure your `ETH1Addr` endpoint is communicating **over WebSocket** and **not over HTTP** in order to support subscriptions and notifications.
{% endhint %}

**Start the Node using Docker**

{% hint style="warning" %}
**Do not** run multiple instances of SSV Node with the same set Operator keys.

This does not increase validator resiliency and **could lead to validator slashing**.
{% endhint %}

Now, for the part you've been waiting for... actually starting your SSV node!

To start your node, run the following Docker command in the same folder you created the `config.yaml` file in the previous step:

```bash
docker run --restart unless-stopped --name ssv_node -e \
CONFIG_PATH=/config.yaml -p 13001:13001 -p 12001:12001/udp -p 15000:15000 \
-v "$(pwd)/config.yaml":/config.yaml \
-v "$(pwd)":/data \
-v "$(pwd)/password":/password \
-v "$(pwd)/encrypted_private_key.json":/encrypted_private_key.json \
-it "bloxstaking/ssv-node:latest" make BUILD_PATH="/go/bin/ssvnode" start-node
```

{% hint style="info" %}
This command will keep the terminal busy, showing the container's logs. It is useful to make sure that the node start up sequence runs correctly.

You can detach the terminal at any time by hitting `Ctrl-c` key combination, or closing the terminal itself. The node will be stopped, but it will restart automatically, thanks to the `--restart unless-stopped` startup parameter.

If you are sure that the node works, and don't care about the logs, you can add the `-d` parameter right after `docker run`.
{% endhint %}

#### Peer-to-peer ports configuration and firewall <a href="#peer-to-peer-ports-configuration-and-firewall" id="peer-to-peer-ports-configuration-and-firewall"></a>

When you set up your firewall on your SSV node machine, make sure to expose the ports that you set in the container creation command. The defaults are **12001 UDP** and **13001 TCP**.

If you don't want to use the default ports, they can be changed in your `config.yaml` file. Be aware, the **must be changed on the container creation command as well** (simply changing the host port mappings on the Docker command isn't enough!).

You can also add your `HostAddress` to the config, which is the public static IP address of the machine.

```yaml
p2p:
  HostAddress: 206.22.63.189
  UdpPort: 12001
  TcpPort: 13001
```

### Step 2. Split validator between SSV Operators <a href="#faq" id="faq"></a>

**Offline Key Splitting**

Offline key splitting is the most secure option, although less convenient, as it requires running a command line tool. For more information, refer to the specific [User Guide on how to use the ssv-keys CLI tool](https://docs.ssv.network/validator-user-guides/tools/ssv-keys-cli).

_**Before continue download**_ [_**ssv-keys**_](https://github.com/bloxapp/ssv-keys/releases)

{% hint style="info" %}
The latest SSV Smart Contract updates added support for [_bulk operations_](https://docs.ssv.network/developers/smart-contracts/ssvnetwork#bulkregistervalidator-publickey-operatorids-shares-amount-cluster), and the latest release of`ssv-keys` has been made compatible with bulk operations. With version 1.1.0 (and above), it is possible to generate keyshares for multiple keystores in a single operation.
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-08 at 10.40.18.png" alt=""><figcaption><p>Select your validator cluster and press Add validator button</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-08 at 10.42.33.png" alt=""><figcaption><p>Press Offline button</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-08 at 10.43.24.png" alt=""><figcaption><p>Select Command Line Interface, copy command from 4 step and press next.</p></figcaption></figure>

Generate keyshared:

```bash
$ ./ssv-keys-mac --operator-keys=LS0tL.... --operator-ids=66,391,393,442 --owner-address=0xd676090f860......b9f72b1e356 --owner-nonce=11
✔ Enter the path to your keystore file or directory containing multiple keystore files … /Users/user/.stakewise/0x738a85....d5bf373c48b981b3/keystores
✔ Provide the keystore file password … ******************** <- type kestores password here
? Please provide a target path to generate the output to › /Users/user/ssv-keys/

2/13 ✅ keystore-m_12381_3600_70_0_0-1712126593.json
3/13 ✅ keystore-m_12381_3600_71_0_0-1712126593.json
4/13 ✅ keystore-m_12381_3600_72_0_0-1712126593.json
5/13 ✅ keystore-m_12381_3600_73_0_0-1712126593.json
6/13 ✅ keystore-m_12381_3600_74_0_0-1712126593.json
7/13 ✅ keystore-m_12381_3600_75_0_0-1712126593.json
8/13 ✅ keystore-m_12381_3600_76_0_0-1712126594.json
9/13 ✅ keystore-m_12381_3600_77_0_0-1712126594.json
10/13 ✅ keystore-m_12381_3600_78_0_0-1712126594.json
11/13 ✅ keystore-m_12381_3600_79_0_0-1712126594.json
12/13 ✅ keystore-m_12381_3600_80_0_0-1712126594.json
13/13 ❌ password.txt

11 of 13 keystore files successfully validated. 2 failed validation

Key distribution successful! Find your key shares file at:
/Users/user/ssv-keys/keyshares-1712562491.json
```

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-08 at 10.50.41.png" alt=""><figcaption><p>Upload /Users/user/ssv-keys/keyshares-1712562491.json file to Enter KeyShared File window</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-08 at 10.58.59.png" alt=""><figcaption><p>Once uploaded, if successfully validated, advance to the next screen clicking Next.</p></figcaption></figure>

You can select the operational runway period of your validator, in accordance with the **Yearly Fee** of previously selected operators. This will dictate the initial amount of SSV to be deposited in the cluster, but it can always be managed later.

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-08 at 10.59.56.png" alt=""><figcaption></figcaption></figure>

**Please read carefully and understand how fees are managed and the risks of account** [**liquidation**](https://ssv.network/glossary/#liquidation) **if your account balance falls below the** [**Threshold Balance**](https://ssv.network/glossary/##threshold-balance)**.**

The following screen alerts you of the potential dangers of registering a validator on the SSV network, if the same set of validator keys is also being used by other consensus and validator clients.

Please make sure to stop any other running validator setup, if you have any.

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-08 at 11.00.23.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-08 at 11.00.56.png" alt=""><figcaption></figcaption></figure>

The next screen presents a summary of your validator setup.

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-08 at 11.01.17 (1).png" alt=""><figcaption></figcaption></figure>

By clicking on Register validator(s), you'll be proposed to sign transactions to confirm your choice and transfer the SSV balance necessary to cover for the operational costs.

{% hint style="info" %}
**Note:** If this is the first time you are registering a validator to ssv.network, you will be required to make two transactions - one to approve the SSV smart contract and another one to register the validator.
{% endhint %}

For more info check SSV docs:

{% embed url="https://docs.ssv.network/validator-user-guides/validator-management/distributing-a-validator" %}

### Step 3. Deposit to Vault ;)
