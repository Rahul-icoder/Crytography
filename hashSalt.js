const {scryptSync,randomBytes,timingSafeEqual} = require('crypto');
//timingSafeEqual for taking time to perform an oeperation;
function signup(email,password){
	const salt = randomBytes(16).toString('hex');
	const hashPassword = scryptSync(password,salt,64).toString('hex');
	const user = {email,password:`${salt}:${hashPassword}`}
	return user
}

let users = [signup('rahulkerma@gmail.com','password123')]

function login(email,password){
	const user = users.filter(v=>v.email===email)
	const [salt,key] = user[0].password.split(':');
	const hashedBuffer = scryptSync(password,salt,64)
	const keyBuffer = Buffer.from(key,'hex')
	const match = timingSafeEqual(hashedBuffer,keyBuffer)
	if(match){
		console.log('you are loggedIn')
	}else{
		console.log('You are not loggedIn')
	}
}

login('rahulkerma@gmail.com','password123')