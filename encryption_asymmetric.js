// public key and private key (secret)
// rsa
const {privateKey,publicKey} = require('./keyPair');

const {publicEncrypt,privateDecrypt} = require('crypto');
const message = 'the british are comming'
const encryptedData = publicEncrypt(
	publicKey,
	Buffer.from(message)
)

const decryptedData = privateDecrypt(
	privateKey,
	encryptedData
)

console.log(decryptedData.toString('utf-8'))