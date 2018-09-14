var lib = require('../dist');

var priv = new lib.PrivateKey("XSN");

// var publicKey = PublicKey(privateKey);
// var address = new Address(publicKey);

// var address = new Address(publicKey);

console.log(priv);
console.log(priv.toWIF());

console.log(priv.toAddress());

//  var wif = 'XG68DmUydnkdaj9VoXzD6mzGzc2ABz2jEFcUPAYWnBew3eJtYvWk';

// var address = new lib.PrivateKey(wif).toAddress();

// console.log(address);