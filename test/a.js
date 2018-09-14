var lib = require('../dist');

var priv = new lib.PrivateKey("XSN");


// var priv = new lib.Address("XSN");

var publicKey = new lib.PublicKey(priv);
var address = new lib.Address(publicKey);

console.log(address);

// console.log(priv);
// console.log(priv.toWIF());

// console.log(priv);

//  var wif = 'XG68DmUydnkdaj9VoXzD6mzGzc2ABz2jEFcUPAYWnBew3eJtYvWk';

// var address = new lib.PrivateKey(wif).toAddress();

// console.log(address);