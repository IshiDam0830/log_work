window.addEventListener('load', function(){
	const $triggerBtn = document.getElementById('button');
	const $target = document.getElementsByClassName('js-target');
	let changableName = 'dem';
	const name = changableName;
	
	function changeNameTest(){
		const name = 'change';
		console.log('const: '+name);
	}

	$triggerBtn.addEventListener('click', function(){
		changeNameTest();
		$target[0].textContent = name;
	});
});
