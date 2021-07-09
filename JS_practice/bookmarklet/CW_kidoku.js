//完全版
/* 
merge_request_force_remove_source_branch：マージ時ブランチを削除するチェックボックス
[data-default-label="Assignee"]：Assigneeのプルダウンメニューを開くボタン
[data-user-id="6"] a：石屋さんのID配下のリンクタグ




<li role="menuitem" class="sc-hcmgZB fEvfoz">メッセージをすべて既読にする</li>

<li role="menuitem" class="sc-hcmgZB fEvfoz">メッセージをすべて既読にする</li>

document.getElementById("sc-hcmgZB")

*/
javascript:(function(){
	var button_setting = document.getElementById("_chatRoomSetting").getElementsByTagName('button')[0];
	button_setting.click();
	var toRead = function(){
		var button_toRead = document.getElementsByClassName('sc-kcbnda')[0];
		button_toRead.click();
	}
	setTimeout(toRead,100,"");
}());


// ブックマークレット用圧縮版
// javascript:(function(){var b=document.getElementById("_chatRoomSetting").getElementsByClassName("sc-dREXXX")[0];b.click();var a=function(){var c=document.getElementsByClassName("sc-hcmgZB")[0];c.click()};setTimeout(a,100,"")}());
