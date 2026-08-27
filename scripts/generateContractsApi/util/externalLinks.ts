const OZ = 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts'
const OZ_UPGRADEABLE =
  'https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts'

// Base contracts pulled in from lib/. forge doc emits these as plain text because
// they live outside contracts/, so we link them by hand.
export const externalLinks: Record<string, string> = {
  EIP712: `${OZ}/utils/cryptography/EIP712.sol`,
  ERC20Permit: `${OZ}/token/ERC20/extensions/ERC20Permit.sol`,
  IERC20: `${OZ}/token/ERC20/IERC20.sol`,
  IERC20Metadata: `${OZ}/token/ERC20/extensions/IERC20Metadata.sol`,
  IERC20Permit: `${OZ}/token/ERC20/extensions/IERC20Permit.sol`,
  Ownable2Step: `${OZ}/access/Ownable2Step.sol`,
  ReentrancyGuard: `${OZ}/utils/ReentrancyGuard.sol`,
  EIP712Upgradeable: `${OZ_UPGRADEABLE}/utils/cryptography/EIP712Upgradeable.sol`,
  Initializable: `${OZ_UPGRADEABLE}/proxy/utils/Initializable.sol`,
  Ownable2StepUpgradeable: `${OZ_UPGRADEABLE}/access/Ownable2StepUpgradeable.sol`,
  ReentrancyGuardUpgradeable: `${OZ_UPGRADEABLE}/utils/ReentrancyGuardUpgradeable.sol`,
  UUPSUpgradeable: `${OZ_UPGRADEABLE}/proxy/utils/UUPSUpgradeable.sol`,
}
