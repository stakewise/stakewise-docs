import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  operatorSidebar: [
    'introduction',
    'create-regular-vault',
    'staking-nodes',
    'launch-operator-service',
    'validator-keys',
    'validators-manager',
    'start-operator',
    'operator-monitoring',
    'smoothing-pool-relays',
    {
      type: 'category',
      label: 'Meta Vault',
      link: {
        type: 'doc',
        id: 'meta-vault/overview',
      },
      items: [
        'meta-vault/create-meta-vault',
        'meta-vault/configure-meta-vault',
        'meta-vault/operate-meta-vault',
      ],
    },
    {
      type: 'category',
      label: 'Alternative Key Management',
      link: {
        type: 'doc',
        id: 'alternative-key-management/overview',
      },
      items: [
        'alternative-key-management/remote-signer',
        'alternative-key-management/hashicorp-vault',
        'alternative-key-management/api-mode',
        {
          type: 'category',
          label: 'DVT',
          link: {
            type: 'doc',
            id: 'alternative-key-management/dvt/overview',
          },
          items: [
            'alternative-key-management/dvt/ssv-setup',
            'alternative-key-management/dvt/obol-setup',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Manage Vault',
      link: {
        type: 'doc',
        id: 'manage-vault/overview',
      },
      items: [
        'manage-vault/vault-administration',
        'manage-vault/fee-claiming',
        'manage-vault/add-extra-rewards',
      ],
    },
    {
      type: 'category',
      label: 'Manage Validators',
      link: {
        type: 'doc',
        id: 'manage-validators/overview',
      },
      items: [
        'manage-validators/rated-network',
        'manage-validators/consolidate-validators',
        'manage-validators/manually-exit-validators',
        'manage-validators/recover-validators',
        'manage-validators/automated-node-setup',
      ],
    },
    {
      type: 'category',
      label: 'Operator Service V3',
      link: {
        type: 'doc',
        id: 'operator-service-v3/overview',
      },
      items: [
        'operator-service-v3/v4-upgrade-guide',
        {
          type: 'category',
          label: 'Run Operator Service V3',
          link: {
            type: 'doc',
            id: 'operator-service-v3/run-operator-service-v3/overview',
          },
          items: [
            'operator-service-v3/run-operator-service-v3/prerequisites',
            'operator-service-v3/run-operator-service-v3/installation',
            'operator-service-v3/run-operator-service-v3/prepare-operator',
            'operator-service-v3/run-operator-service-v3/start-operator',
          ],
        },
        {
          type: 'category',
          label: 'Alternative Key Management',
          link: {
            type: 'doc',
            id: 'operator-service-v3/alternative-key-management/overview',
          },
          items: [
            'operator-service-v3/alternative-key-management/remote-signer',
            'operator-service-v3/alternative-key-management/hashicorp-vault',
            'operator-service-v3/alternative-key-management/api-mode',
            {
              type: 'category',
              label: 'DVT',
              link: {
                type: 'doc',
                id: 'operator-service-v3/alternative-key-management/dvt/overview',
              },
              items: [
                'operator-service-v3/alternative-key-management/dvt/ssv-setup',
                'operator-service-v3/alternative-key-management/dvt/obol-setup',
              ],
            },
          ],
        },
        'operator-service-v3/manually-exit-validators',
      ],
    },
  ]
}

export default sidebars
