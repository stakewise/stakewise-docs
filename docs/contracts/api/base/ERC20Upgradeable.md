---
title: ERC20Upgradeable
sidebar_position: 1
description: "Modern and gas-efficient upgradeable ERC20 token implementation with EIP-2612 permit functionality"
---

# ERC20Upgradeable

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/base/ERC20Upgradeable.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [IERC20Permit ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/IERC20Permit.sol), [IERC20 ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol), [IERC20Metadata ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/IERC20Metadata.sol)

Modern and gas efficient ERC20 + EIP-2612 implementation


## State Variables
### _permitTypeHash

```solidity
bytes32 private constant _permitTypeHash =
    keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)")
```


### name
Returns the name of the token.


```solidity
string public override name
```


### symbol
Returns the symbol of the token.


```solidity
string public override symbol
```


### decimals
Returns the decimals places of the token.


```solidity
uint8 public constant override decimals = 18
```


### allowance

```solidity
mapping(address => mapping(address => uint256)) public override allowance
```


### nonces

```solidity
mapping(address => uint256) public override nonces
```


### _initialChainId
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
uint256 private immutable _initialChainId
```


### _initialDomainSeparator

```solidity
bytes32 private _initialDomainSeparator
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[50] private __gap
```


## Functions
### constructor

Constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor() ;
```

### approve

Sets `amount` as the allowance of `spender` over the caller's tokens.

Be aware of front-running risks: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729


```solidity
function approve(address spender, uint256 amount) public override returns (bool);
```

### transfer

Moves `amount` tokens from the caller's account to `to`.


```solidity
function transfer(address to, uint256 amount) public virtual override returns (bool);
```

### transferFrom

Moves `amount` tokens from `from` to `to` using the allowance mechanism.
`amount` is then deducted from the caller's allowance.


```solidity
function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool);
```

### permit

Sets `value` as the allowance of `spender` over `owner`'s tokens,
given `owner`'s signed approval.
IMPORTANT: The same issues `IERC20-approve` has related to transaction
ordering also apply here.
Emits an `Approval` event.
Requirements:
- `spender` cannot be the zero address.
- `deadline` must be a timestamp in the future.
- `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`
over the EIP712-formatted function arguments.
- the signature must use `owner`'s current nonce (see `nonces`).
For more information on the signature format, see the
https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP
section].
CAUTION: See Security Considerations above.


```solidity
function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)
    public
    override;
```

### DOMAIN_SEPARATOR

Returns the domain separator used in the encoding of the signature for `permit`, as defined by `EIP712`.


```solidity
function DOMAIN_SEPARATOR() public view override returns (bytes32);
```

### _computeDomainSeparator

Computes the hash of the EIP712 typed data

This function is used to compute the hash of the EIP712 typed data


```solidity
function _computeDomainSeparator() private view returns (bytes32);
```

### _transfer

Moves `amount` of tokens from `from` to `to`.
Emits a `Transfer` event.


```solidity
function _transfer(address from, address to, uint256 amount) internal virtual;
```

### __ERC20Upgradeable_init

Initializes the ERC20Upgradeable contract


```solidity
function __ERC20Upgradeable_init(string memory _name, string memory _symbol) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_name`|`string`|The name of the ERC20 token|
|`_symbol`|`string`|The symbol of the ERC20 token|
