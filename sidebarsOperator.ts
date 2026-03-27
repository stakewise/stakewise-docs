import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  operatorSidebar: [
    'introduction',
    'create-your-vault',
    'staking-nodes',
    'launch-operator-service-v4',
    'installation',
    'validator-keys',
    'validators-manager',
    'start-operator',
    {
      type: 'category',
      label: 'Alternative Key Management',
      link: {
        type: 'doc',
        id: 'alternative-key-management/index',
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
            id: 'alternative-key-management/dvt/index',
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
      items: [
        'manage-vault/vault-administration',
        'manage-vault/fee-claiming',
        'manage-vault/add-extra-rewards',
        'manage-vault/process-metavaults',
      ],
    },
    {
      type: 'category',
      label: 'Manage Validators',
      items: [
        'manage-validators/monitoring',
        'manage-validators/rated-network',
        'manage-validators/consolidate-validators',
        'manage-validators/manual-exit',
        'manage-validators/recover-validators',
        'manage-validators/automated-node-setup',
      ],
    },
    'smoothing-pool-relays',
    {
      type: 'category',
      label: 'Operator Service V3',
      link: {
        type: 'doc',
        id: 'operator-service-v3/intro',
      },
      items: [
        'operator-service-v3/prerequisites',
        'operator-service-v3/installation',
        'operator-service-v3/prepare-operator',
        'operator-service-v3/start-operator',
        {
          type: 'category',
          label: 'Alternative Key Management',
          link: {
            type: 'doc',
            id: 'operator-service-v3/alternative-key-management/index',
          },
          items: [
            'operator-service-v3/alternative-key-management/remote-signer',
            'operator-service-v3/alternative-key-management/hashicorp-vault',
            'operator-service-v3/alternative-key-management/api-mode',
          ],
        },
        'operator-service-v3/v4-upgrade-guide',
      ],
    },
  ]
}

export default sidebars
