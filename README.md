Multiple Coins Library with Javascript
================

A pure and powerful JavaScript Multiple Coins library.


## Get Started
### NodeJS
```
npm install mix-lib
```

```js
var lib = require('mix-lib');
var priv = new lib.PrivateKey("GEEK");
console.log(priv);
console.log(priv.toWIF());
console.log(priv.toAddress());
// <PrivateKey: 8f446ab8fa9db83b367bc4d160b7a6f0fc2fa6f390d076c2616ae7dae2ed49ca, network: GeekCash>
// XG68DmUydnkdaj9VoXzD6mzGzc2ABz2jEFcUPAYWnBew3eJtYvWk
// <Address: GPJs2uSCFDjDD9GqS5PcGcixBUs6jB8qL8, type: pubkeyhash, network: GeekCash>
```

```js
var lib = require('mix-lib');
var priv = new lib.PrivateKey("DASH");
console.log(priv);
console.log(priv.toWIF());
console.log(priv.toAddress());
// <PrivateKey: 58af0f84ecc68038f9d4f8ec5658c5bf4bea57fedaaa1ebe6e992ca32b101417, network: Dash>
// XEG2F8raABRoeze7xV4exbg6ji1YYR34qqWQGJ3CZuhdGcZvqGDx
// <Address: XkV5By8ADmr2jzm6bYjkQnUFHqeu9wk1bP, type: pubkeyhash, network: Dash>
```

```js
var lib = require('mix-lib');
var priv = new lib.PrivateKey("BTC");
console.log(priv);
console.log(priv.toWIF());
console.log(priv.toAddress());
// <PrivateKey: 74b35dce79cb9154858615e8cb8b2889f826ec557bb0bcf95d40881d367779af, network: Bitcoin>
// L18ZXoA7z6xJBmE9mvctDzwyg2skLLHhYWmupXdnkHQ7JgtL9kXf
// <Address: 1B7zH2tuXAwqFj9AypBqjMqJiiNKY67os4, type: pubkeyhash, network: Bitcoin>
```

```js
var lib = require('mix-lib');
var transaction = new lib.Transaction()
    .from(utxos)          // Feed information about what unspent outputs one can use
    .to(address, amount)  // Add an output with the given amount of satoshis
    .change(address)      // Sets up a change address where the rest of the funds will go
    .sign(privkeySet)     // Signs all the inputs it can
```

### Import an address via WIF

```js
var lib = require('mix-lib');
var wif = 'XBrJjgQ8d8J7EM2Z1pcQczqLpoKqQTy8zwMXzvz4nXi8feZCBz5w';
var address = new lib.PrivateKey(wif).toAddress();
//<Address: GPJs2uSCFDjDD9GqS5PcGcixBUs6jB8qL8, type: pubkeyhash, network: GeekCash>
```

### Coins

GeekCash
Dash
Bitcoin

## Docs

* [Addresses](docs/address.md)
* [Block](docs/block.md)
* [Crypto](docs/crypto.md)
* [Encoding](docs/encoding.md)
* [Hierarchically-derived Private and Public Keys](docs/hierarchical.md)
* [Networks](docs/networks.md)
* [PrivateKey](docs/privatekey.md)
* [PublicKey](docs/publickey.md)
* [Script](docs/script.md)
* [Transaction](docs/transaction.md)
* [Using Different Units](docs/unit.md)
* [Unspent Output](docs/unspentoutput.md)
* [URI](docs/uri.md)
* [Governance Object / Proposal](docs/govobject/govobject.md)

## Examples

Some examples can be found [here](docs/examples.md), below is a list of direct links for some of them.


* [Generate a random address](docs/examples.md#generate-a-random-address)
* [Generate an address from a SHA256 hash](docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](docs/examples.md#create-a-transaction)
* [Sign a Dash message](docs/examples.md#sign-a-bitcoin-message)
* [Verify a Dash message](docs/examples.md#verify-a-bitcoin-message)
* [Create an OP RETURN transaction](docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)


## License

Code released under [the MIT license](LICENSE).