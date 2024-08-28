---
description: >-
  Setting Up a Distributed Validator Cluster with Obol Network and StakeWise
  Vaults
---

# Obol Setup

Follow these steps to set up a Distributed Validator Cluster using Obol Network and integrate it with StakeWise Vaults.

### Prerequisites

1. [Install Docker Engine](https://docs.docker.com/engine/install/)
2. Ensure Docker is running. Check:

```bash
$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
 ...
```

3. [Create Vault](../../guides/running-a-vault.md)
4. [Setup Operator Service](../operator-service/)

{% hint style="warning" %}
**IMPORTANT!** When using the `create-keys` command, add the `--per-keystore-password` flag to generate a keystore with a separate password file for each keystore. This is necessary for the normal operation of the Charon CLI, especially when splitting keys.
{% endhint %}

### Step 1. Setup Obol Cluster

First, create `.env` file with `charon` settings:

{% hint style="info" %}
Addresses must be in lowercase
{% endhint %}

<pre class="language-bash"><code class="lang-bash">cat &#x3C;&#x3C;EOF > .env
<strong>export VAULT_CONTRACT_ADDR=[ENTER YOUR VAULT CONTRACT ADDRESS HERE]
</strong>export FEE_RECIPIENT_ADDR=[ENTER YOUR VAULT FEE RECIPIENT ADDRESS HERE]
export NETWORK=[ENTER YOUR NETWORK NAME]
EOF
</code></pre>

Next create cluster obol cluster:

```sh
source .env
docker run --rm -v "$(pwd):/opt/charon" -v "$HOME/.stakewise:/.stakewise" obolnetwork/charon:v0.19.2 \
  create cluster \
  --name="cluster-name" \
  --cluster-dir=".charon/cluster/" \
  --withdrawal-addresses=$VAULT_CONTRACT_ADDR \
  --fee-recipient-addresses=$FEE_RECIPIENT_ADDR \
  --nodes 3 \
  --network $NETWORK \
  --split-existing-keys \
  --split-keys-dir /.stakewise/$VAULT_CONTRACT_ADDR/keystores


~~~~~ OUTPUT:

***************** WARNING: Splitting keys **********************
 Please make sure any existing validator has been shut down for
 at least 2 finalised epochs before starting the charon cluster,
 otherwise slashing could occur.                               
****************************************************************

Created charon cluster:
 --split-existing-keys=true

/opt/charon/.charon/cluster/
├─ node[0-2]/			Directory for each node
│  ├─ charon-enr-private-key	Charon networking private key for node authentication
│  ├─ cluster-lock.json		Cluster lock defines the cluster lock file which is signed by all nodes
│  ├─ deposit-data.json		Deposit data file is used to activate a Distributed Validator on DV Launchpad
│  ├─ validator_keys		Validator keystores and password
│  │  ├─ keystore-*.json	Validator private share key for duty signing
│  │  ├─ keystore-*.txt		Keystore password files for keystore-*.json
```

You should now have multiple folders within `./.charon/cluster/`, one for each node created. Backup the `./.charon` folder, then move on to deploying the cluster physically.

### Step 2. Run Nodes, Validators and Charon client

After initial setup run 3 charon client and 3 validators client (you can run it on single server or distribute across multiple), copy below `docker-compose.yml`, file to the server the same dir with `.charon` and run `docker compose up -d`

{% hint style="info" %}
Replace `[ENTER YOUR VAULT FEE RECIPIENT ADDRESS HERE]` with your vault fee recipient address
{% endhint %}

<details>

<summary><code>docker-compose.yml</code></summary>

```yaml
x-logging: &logging
  logging:
    driver: json-file
    options:
      max-size: 10m
      max-file: "3"
      tag: "{{.ImageName}}|{{.Name}}|{{.ImageFullID}}|{{.FullID}}"

networks:
  cluster:

x-node-base:
  # Pegged charon version (update this for each release).
  &node-base
  image: obolnetwork/charon:${CHARON_VERSION:-v0.19.2}
  restart: unless-stopped
  networks: [ cluster ]
  depends_on: [ relay ]
  volumes:
    - ./.charon:/opt/charon/.charon/

x-node-env:
  &node-env
  CHARON_BEACON_NODE_ENDPOINTS: ${CHARON_BEACON_NODE_ENDPOINTS:-http://lighthouse:6000}
  CHARON_LOG_LEVEL: ${CHARON_LOG_LEVEL:-info}
  CHARON_LOG_FORMAT: ${CHARON_LOG_FORMAT:-console}
  CHARON_P2P_EXTERNAL_HOSTNAME: ${CHARON_P2P_EXTERNAL_HOSTNAME:-} # Empty default required to avoid warnings.
  CHARON_P2P_RELAYS: ${CHARON_P2P_RELAYS:-http://relay:3640/enr}
  CHARON_P2P_TCP_ADDRESS: ${CHARON_P2P_TCP_ADDRESS:-0.0.0.0:3610}
  CHARON_VALIDATOR_API_ADDRESS: ${CHARON_VALIDATOR_API_ADDRESS:-0.0.0.0:3600}

services:
  mev-boost:
    image: flashbots/mev-boost:1.7.0
    restart: always
    command: >
      -mainnet
      -relays
      https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net,https://0xa1559ace749633b997cb3fdacffb890aeebdb0f5a3b6aaa7eeeaf1a38af0a8fe88b9e4b1f61f236d2e64d95733327a62@relay.ultrasound.money,https://0x8b5d2e73e2a3a55c6c87b8b6eb92e0149a125c852751db1422fa951e42a09b82c142c3ea98d0d9930b056a3bc9896b8f@bloxroute.max-profit.blxrbdn.com,https://0xa7ab7a996c8584251c8f925da3170bdfd6ebc75d50f5ddc4050a6fdc77f2a3b5fce2cc750d0865e05d7228af97d69561@agnostic-relay.net,https://0xb0b07cd0abef743db4260b0ed50619cf6ad4d82064cb4fbec9d3ec530f7c5e6793d9f286c4e082c0244ffb9f2658fe88@bloxroute.regulated.blxrbdn.com,https://0xa15b52576bcbf1072f4a011c0f99f9fb6c66f3e1ff321f11f461d15e31b1cb359caa092c71bbded0bae5b5ea401aab7e@aestus.live
      -addr
      127.0.0.1:18551
      -loglevel
      info
      -json
    networks: [ cluster ]

  geth:
    image: ethereum/client-go:v1.13.14
    restart: always
    command: >
      --mainnet
      --syncmode=snap
      --datadir=/data
      --db.engine=pebble
      --authrpc.jwtsecret=/data/jwtsecret --authrpc.addr=0.0.0.0 --authrpc.port=8551 --authrpc.vhosts=*
      --http --http.addr=0.0.0.0 --http.port=8445 --http.corsdomain=* --http.vhosts=*
      --port=30303
      --ipcdisable
    volumes: ["./data/geth:/data"]
    ports:
      - 30303:30303/tcp
      - 30303:30303/udp
    networks: [ cluster ]

  lighthouse:
    image: sigp/lighthouse:v5.1.2
    restart: always
    command: >
      lighthouse
      bn
      --staking
      --datadir=/data
      --network=mainnet
      --execution-endpoint=http://geth:8551
      --execution-jwt=/data/jwtsecret
      --checkpoint-sync-url=https://mainnet-checkpoint-sync.attestant.io/
      --slots-per-restore-point=8192
      --http
      --http-port=6000
      --http-address=0.0.0.0
      --http-allow-origin=*
      --builder http://localhost:18551
      --port=30304
      --enr-udp-port=30305
      --disable-upnp
    ulimits:
      nofile:
        soft: "1000000"
        hard: "1000000"
    volumes: ["./data/lighthouse:/data"]
    ports:
      - 30304:30304/tcp
      - 30304:30304/udp
      - 30305:30305/udp
    networks: [ cluster ]

  relay:
    <<: *node-base
    command: relay
    depends_on: []
    environment:
      <<: *node-env
      CHARON_HTTP_ADDRESS: 0.0.0.0:3640
      CHARON_DATA_DIR: /opt/charon/relay
      CHARON_P2P_RELAYS: ""
      CHARON_P2P_EXTERNAL_HOSTNAME: relay
    volumes:
      - ./data/relay:/opt/charon/relay:rw

  node0:
    <<: *node-base
    environment:
      <<: *node-env
      CHARON_PRIVATE_KEY_FILE: /opt/charon/.charon/cluster/node0/charon-enr-private-key
      CHARON_LOCK_FILE: /opt/charon/.charon/cluster/node0/cluster-lock.json
      CHARON_P2P_EXTERNAL_HOSTNAME: node0

  node1:
    <<: *node-base
    environment:
      <<: *node-env
      CHARON_PRIVATE_KEY_FILE: /opt/charon/.charon/cluster/node1/charon-enr-private-key
      CHARON_LOCK_FILE: /opt/charon/.charon/cluster/node1/cluster-lock.json
      CHARON_P2P_EXTERNAL_HOSTNAME: node1

  node2:
    <<: *node-base
    environment:
      <<: *node-env
      CHARON_PRIVATE_KEY_FILE: /opt/charon/.charon/cluster/node2/charon-enr-private-key
      CHARON_LOCK_FILE: /opt/charon/.charon/cluster/node2/cluster-lock.json
      CHARON_P2P_EXTERNAL_HOSTNAME: node2

  vc0-teku:
    image: consensys/teku:${TEKU_VERSION:-24.3.0}
    networks: [ cluster ]
    depends_on: [ node0 ]
    restart: unless-stopped
    command: |
      validator-client
      --network=auto
      --beacon-node-api-endpoint="http://node0:3600"
      --Xblock-v3-enabled=false
      --validators-proposer-default-fee-recipient=[ENTER YOUR VAULT FEE RECIPIENT ADDRESS HERE]
      --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys"
      --validators-keystore-locking-enabled=false
    volumes:
      - .charon/cluster/node0/validator_keys:/opt/charon/validator_keys
      - ./data/vc0:/opt/charon/teku

  vc1-teku:
    image: consensys/teku:${TEKU_VERSION:-24.3.0}
    networks: [ cluster ]
    depends_on: [ node1 ]
    restart: unless-stopped
    command: |
      validator-client
      --network=auto
      --beacon-node-api-endpoint="http://node1:3600"
      --Xblock-v3-enabled=false
      --validators-proposer-default-fee-recipient=[ENTER YOUR VAULT FEE RECIPIENT ADDRESS HERE]
      --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys"
      --validators-keystore-locking-enabled=false
    volumes:
      - .charon/cluster/node1/validator_keys:/opt/charon/validator_keys
      - ./data/vc1:/opt/charon/teku

  vc2-teku:
    image: consensys/teku:${TEKU_VERSION:-24.3.0}
    networks: [ cluster ]
    depends_on: [ node2 ]
    restart: unless-stopped
    command: |
      validator-client
      --network=auto
      --beacon-node-api-endpoint="http://node2:3600"
      --Xblock-v3-enabled=false
      --validators-proposer-default-fee-recipient=[ENTER YOUR VAULT FEE RECIPIENT ADDRESS HERE]
      --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys"
      --validators-keystore-locking-enabled=false
    volumes:
      - .charon/cluster/node2/validator_keys:/opt/charon/validator_keys
      - ./data/vc2:/opt/charon/teku
```

</details>

{% hint style="info" %}
[**For more info check Obol Documentation**](https://docs.obol.tech/docs/start/quickstart\_group)
{% endhint %}
