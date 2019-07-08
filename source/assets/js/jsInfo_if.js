let year = 2012;
let cont = (year == 2015)

if (cont){
	console.log( 'You are right!' );
}else{
	console.log('How can you be so wrong?');
}

let accessAllowed = 18;
let age = Math.floor(Math.random()*(40 + 1 - 5)) + 5;
let messageAllow = 'get away!';

if(age < 18){
	messageAllow = 'get away';
}else{
	messageAllow = 'you allowed';
}
console.log('you are '+age + '!' +messageAllow);
