
// HMAC = Hash-Based Message Authentication Code
//Must have key shared to Both side . Ex - JWT
// when you use different key you can get different hash
const {createHmac} = require('crypto');

const key = 'super-secret!'
const message = 'hi good morning'
const hmac = createHmac('sha256',key).update(message).digest('hex') 
console.log(hmac);

