---
title: ERC20Upgradeable
sidebar_position: 1
description: "Modern and gas-efficient upgradeable ERC20 token implementation with EIP-2612 permit functionality"
---

# ERC20Upgradeable

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/base/ERC20Upgradeable.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [IERC20Permit ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/IERC20Permit.sol), [IERC20 ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol), [IERC20Metadata ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/IERC20Metadata.sol)

Modern and gas efficient [ERC20 ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol) + [EIP-2612 ↗](https://eips.ethereum.org/EIPS/eip-2612) implementation.


## State Variables
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
Returns the remaining number of tokens that `spender` is allowed
to spend on behalf of `owner`


```solidity
mapping(address => mapping(address => uint256)) public override allowance
```


### nonces
Returns the current nonce for `owner`. This value must be
included whenever a signature is generated for `permit`.
Every successful call to `permit` increases `owner`'s nonce by one. This
prevents a signature from being used multiple times.


```solidity
mapping(address => uint256) public override nonces
```


## Functions

### approve

Sets `amount` as the allowance of `spender` over the caller's tokens.

:::custom-warning[Front-Running Risk]
Be aware of potential front-running attacks. See [EIP-20 Discussion ↗](https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729) for details.
:::


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

Sets `value` as the allowance of `spender` over `owner`'s tokens using a signed approval.

:::custom-warning[Security Considerations]
- The same front-running issues that affect `IERC20-approve` also apply here
- Always verify signatures are using the latest nonce
- Be cautious of signature replay attacks
:::

Emits an `Approval` event.

**Requirements:**
- `spender` cannot be the zero address
- `deadline` must be a timestamp in the future
- `v`, `r` and `s` must be a valid `secp256k1` signature from `owner` over the EIP712-formatted function arguments
- The signature must use `owner`'s current nonce (see `nonces`)

For more information, see [EIP-2612 Specification ↗](https://eips.ethereum.org/EIPS/eip-2612#specification).


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
