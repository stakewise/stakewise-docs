# DVT

The Distributed Validator Technology (DVT) represents a crucial element poised to revolutionize consensus scalability. Much like roll-up technology in Layer 2 scaling, DVT is set to significantly enhance scalability while upholding decentralization. As DVT continues to evolve, it is expected to become a fundamental building block, safeguarding the security and decentralization of public blockchain networks.

StakeWise Vaults stand out for their compatibility with both [Obol](https://docs.obol.org/docs/int/Overview) and [SSV](https://docs.ssv.network/) DVT technologies, offering an additional layer of security and decentralization to the network. This interoperability greatly bolsters the long-term sustainability of public blockchain networks, empowering stakeholders with diverse options for securing and leveraging their assets.

### DVT setup components

#### DVT cluster of distributed validators

Performs validator duties

#### Stakewise Operator

Registers validators in vault contract. Operator doesn’t have access to validator keystores.

#### DVT Relayer

Used to collect exit signatures of the validators for passing them to oracles.

#### DVT sidecars

Sidecars provide exit signature shares to DVT Relayer. Each distributed validator node should run DVT sidecar instance. Each sidecar should have access to validator key shares on related DVT node.

### Validator registration procedure

Operator reads validators from the deposit data file.

On validator registration Operator sends request to the relayer:

1. Operator sends a list of public keys from the deposit data to the relayer, then polls the relayers for the exit signature(s)
2. Relayer creates VoluntaryExit(s) out of public keys and stores to DB. VoluntaryExits can be received through relayer API.
3. DVT sidecars poll VoluntaryExits they can sign from the relayer, create exit signatures for them and post to the relayer.
4. Relayer i) receives exit signature shares from the sidecars, ii) Restores exit signature from sidecar shares, verifies exit signature, creates shares for oracles, encrypts with oracle public keys and stores to DB. The encrypted shares for oracles are available through relayer API.
5. Operator fetches encrypted signatures from relayer and registers the validator.
