const readline = require('readline');
let correctAnswer = 'ECMAScript';

const rl = readline.createInterface({
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
function cancelQuestion(){
	rl.close();
}
rl.question('ID? ', function(inputID){
	if(inputID == ''){
		cancelQuestion();
	}else if(inputID == 'Adomin'){
		rl.question('pass? ', function(inputPass){

		});
	}else{
		cancelQuestion();
	}

	rl.close();
});