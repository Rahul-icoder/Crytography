// validate data it comes from trusted party
const {privateKey,publicKey} = require('./keyPair');
const {createSign,createVerify} = require('crypto')

const message = 'this data must be signed'
const signer = createSign('rsa-sha256')
signer.update(message)
const signature = signer.sign(privateKey,'hex')
const verifier = createVerify('rsa-sha256')
verifier.update(message)
const isVerified = verifier.verify(publicKey,signature,'hex')
console.log(isVerified)