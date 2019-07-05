// const $triggerBtn = document.getElementById('button');
// const $target = document.getElementById('js-target');


// if($triggerBtn.length && $target.leng){
// 	$triggerBtn.addEventListener('click', function(){
// 		console.log(aaaa);
// 	});
// }


let changableName = 'dem';
const name = changableName;
console.log('変更可能:'+ changableName);
console.log('変更不可:'+ name);

function changeNameTest(){
	const name = 'change';
	console.log('const: '+name);
}

changeNameTest();

console.log('変更後'+name);

// function nameChange(){
// 	const name = 'nameInFunction';
// 	console.log(name);
// }
// nameChange();