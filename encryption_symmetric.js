const {createCipheriv,randomBytes,createDecipheriv} = require('crypto');
// iv stands for initialization vector alog with randomBytes

// Cipher 
// encryption algorithm
const message = 'i like turtles'
const key = randomBytes(32);
const iv = randomBytes(16);
const cipher = createCipheriv('aes256',key,iv);

const encryptedMessage = cipher.update(message,'utf-8','hex') + cipher.final('hex')
console.log(encryptedMessage)

// Decipher
const decipher = createDecipheriv('aes256',key,iv);
const decryptedMessage = decipher.update(encryptedMessage,'hex','utf-8') + decipher.final('utf-8');

console.log(decryptedMessage)
