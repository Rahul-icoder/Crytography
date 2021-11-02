const {createHash} = require('crypto');


// creating hash 
// hashing algorithmn md5,sha,argon2
// same input === same output
function hash(input){
	return createHash('sha256').update(input).digest('hex')
}
let password1 = 'rahul@123'
let hash1 = hash(password1)

let password2 = 'rahul@123'
let hash2 = hash(password2)

console.log(hash1,hash2)
