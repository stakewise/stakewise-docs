# Vault's performance

### Vault performance

Vault performance is the average performance of its validators. The goal is to derive a simple and effective formula for calculating vault efficiency by evaluating the ratio of rewards to penalties, minimizing the influence of luck. Efficiency consists of proposer and attester parts.

### Proposer performance

Block proposals depend on luck, but we should penalize validators who miss MEV opportunities. Since MEV rewards can vary greatly between blocks, we focus only on the number of blocks processed and ignore the reward sizes to avoid relying on chance.

We calculate the proposal\_score by dividing the number of produced blocks by the total number of blocks. Validators are not negatively penalized for missed blocks; they get a score of 0 if they miss all their opportunities.

**Formula:**

```
proposal_score = proposed_block_count / (proposed_block_count + missed_block_count)
```

Where:

* `proposed_block_count` - Number of successfully mined MEV blocks.
* `missed_block_count` - Number of missed MEV blocks.

### Attester performance

#### **Attestation Rewards**

85% of rewards come from attestations containing valuable information about consensus layer correctness and inclusion delay.

An attestation consists:

* Head vote
* Source vote
* Target vote

If a validator votes correctly on all three with optimal inclusion delay, they receive 100% of potential reward.

The beacon node API provides `idealReward` for an epoch representing maximum potential rewards based on optimal performance, allowing us to calculate attester efficiency:

**Formula:**&#x20;

```
attester_score = total_rewards / ideal_rewards
```

Where:

* `total_rewards` - Sum of validators rewards fetched via [beacon API](https://ethereum.github.io/beacon-APIs/#/Rewards/getAttestationsRewards)
* `ideal_rewards` - Sum of ideal rewards fetched via [beacon API](https://ethereum.github.io/beacon-APIs/#/Rewards/getAttestationsRewards)

#### **Sync Committee**

Sync committee rewards are ignored in calculations as they constitute 3% CL rewards and depend on luck.

### Scoring formula

<pre><code><strong>score = 8/10 * attestations_score + 2/10 * proposal_score
</strong></code></pre>

### Scoring grades

We show vault grades based on the average vault performance over the last 7 days.

* **Excellent**: Values approximately between 99.7-100. Top 10% percentile. No missed blocks or a very small percentage of them. Validators perform excellently in attestations.
* **Good**: Values approximately between 99.5-99.7. Top 50% percentile. No missed blocks or a very small percentage of them. Validators perform well in attestations.
* **Moderate**: Values approximately between 97.1-99.5%. The vault has issues, with up to 3% missed attestations and/or blocks.
* **Bad**: Values between 0-97.09%. Validators are not performing correctly, missing blocks or poorly handling attestations.

### References

Rated Documentation: [Rated Network Methodologies](https://docs.rated.network/methodologies/ethereum/rated-effectiveness-rating)&#x20;

Beaconcha Documentation: [Beaconcha Metric Validator Efficiency](https://kb.beaconcha.in/v2beta/metric-validator-efficiency)
