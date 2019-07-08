let num = 0;
for(num; num <= 100; num++){
	let message = num;
	if(num % 15 == 0){
		message = "FissBuzz";
	}else if(num % 5 == 0){
		message = 'Buzz';
	}else if(num % 3 == 0){
		message = 'Fizz';
	}
	console.log(message);
}