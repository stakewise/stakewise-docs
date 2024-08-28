# Running with Hashi Vault

Operator supports loading signing keys from remote [Hashi Vault](https://github.com/hashicorp/vault) instance, avoiding storage of keystores on the filesystem. This approach is best suited for node operators who already have most of Stakewise Operator functionality implemented in their systems, and only need integration for validator registration or pooling support. Regular users should only employ this functionality on their own risk, if they already manage a deployment of hashi vault.

### Prerequisite

Complete the following steps before proceeding:

1. [Install Operator Service](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)
2. [Prepare Operator Service](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)
3. [Update deposit data file to the Vault](https://docs.stakewise.io/for-operators/operator-service#install-operator-service)

Currently there are two commands that support loading signing keys: `start` and `validators-exit`, user must provide hashi vault instance URL, authentication token, and secret path in K/V engine. Internal structure of the secret must resemble following json:

```json
{
  "pubkey1": "privkey1",
  "pubkey2": "privkey2",
  ...
}
```

Note that public and private signing keys must be stored in hex form, with or without 0x prefix.

After loading keys from hashi vault, operator behaves in the same way as if it had loaded them from keystores, no additional operations needed to support the integration.

## `start` options for hashi vault

Passing following options to `start` command will enable loading validator signing keys from remote [Hashi Vault](https://github.com/hashicorp/vault). Make sure keystores directory is empty before running this command, otherwise operator will prefer local keystores.

* `--hashi-vault-url` - URL to the remote hashi vault instance
* `--hashi-vault-token` - Token for use when authenticating with hashi vault
* `--hashi-vault-key-path` - Key path in hashi vault K/V engine holding signing secrets
