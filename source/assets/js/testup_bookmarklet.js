/* 
[_to]: チャットワークのTOボタンID
[data-default-label="Assignee"]：Assigneeのプルダウンメニューを開くボタン
[id="_chatText"]; テキスト入力エリア

//以下承認者増えたら追加
[data-cwui-lt-value="1426010"]：石屋さんのCWTO用ID
[data-cwui-lt-value="1426214"]: 中島さんのCWTO用ID
[data-cwui-lt-value="1426238"]: 新垣さんのCWTO用ID


*/
javascript:(function(){
	var btn_to = document.getElementById('_to');
	var inputarea = document.getElementById('_chatText');
	var mergeURL = window.prompt('マージリクエストのURLを入力');

	btn_to.click();
	var arrayTo = {
		$to_ishiya: document.querySelector('[data-cwui-lt-value="1426010"]'),
		$to_nakajima: document.querySelector('[data-cwui-lt-value="1426214"]'),
		$to_arakaki: document.querySelector('[data-cwui-lt-value="1426238"]'),
	};

	var foreach_num = 1;
	Object.keys(arrayTo).forEach(function(keys){
		if(foreach_num == 2){
			inputarea.value+= "CC:";
		}else if(foreach_num > 2){
			inputarea.value+= "\t";
		}
		arrayTo[keys].click();
		foreach_num ++;
	});

	var task_id = prompt('タスマネ番号');
	var task_url = 'http://taskmanager.test/details/?id=' + task_id;
	var addText = 
			'お疲れ様です。\nお忙しいところ恐縮です、こちらのテストアップをお願いいたします。\n'
			+ 'たすまね： ' + task_url +'\n'
			+ 'マージリクエスト： ' + mergeURL;

	inputarea.value+= addText;
}());

