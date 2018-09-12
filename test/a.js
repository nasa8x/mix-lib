var lib = require('../dist');

var priv = new lib.PrivateKey("BTC");

// var publicKey = PublicKey(privateKey);
// var address = new Address(publicKey);

// var address = new Address(publicKey);

console.log(priv);
console.log(priv.toWIF());

console.log(priv.toAddress());

// var wif = 'XBrJjgQ8d8J7EM2Z1pcQczqLpoKqQTy8zwMXzvz4nXi8feZCBz5w';

// var address = new lib.PrivateKey(wif).toAddress();

// console.log(address);