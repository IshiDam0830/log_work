const readline = require('readline');
let correctAnswer = 'ECMAScript';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const rl2 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// q1
// rl.question('JavaScriptの “公式な” 名前は何ですか？', function(answer){
// 	if(answer == correctAnswer){
// 		console.log('Right!');
// 	}else{
// 		console.log('Didn’t know? ECMAScript!');
// 	}
// 	rl.close();
// });

// q2
// rl.question('number?', function(input){
// 	if(input == 0){
// 		console.log('0');
// 	}else if(input < 0){
// 		console.log('minus');
// 	}else{
// 		console.log('plus');
// 	}

// 	rl.close();
// });

//q3
// $ID = 'Admin'
// $pass = 'TheMaster';

// rl.question('ID? ', function(inputID){
// 	if(inputID == $ID){
// 		rl2.question('pass?', function(inputPass){
// 			if(inputPass == $pass){
// 				console.log("welcome!");
// 			}
// 			rl2.close();
// 		});
// 	}else{
// 		rl.close();
// 		console.log('ID: ' + inputID + ' false');
// 	}
// 	rl.close();
// });


//Q4
//result = (a + b < 4) ? 'below' : 'Over';


const login = '';
let message =
	(login == 'employee') ? 'Hello' :
	(login == 'Director') ? 'Greetings':
	(login == '')? 'NO login':
	'???';
console.log(message);