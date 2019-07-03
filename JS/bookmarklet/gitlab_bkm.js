//完全版
/* 
merge_request_force_remove_source_branch：マージ時ブランチを削除するチェックボックス
[data-default-label="Assignee"]：Assigneeのプルダウンメニューを開くボタン
[data-user-id="6"] a：石屋さんのID配下のリンクタグ

*/
javascript:(function(){
	var $removebranch=document.getElementById('merge_request_force_remove_source_branch'),
		$assigneeList=document.querySelector('[data-default-label="Assignee"]');
	$removebranch.checked=false;
	$assigneeList.click();
	var log = function(){
		var $assignee=document.querySelector('[data-user-id="6"] a');
		$assigneeClick = $assignee.click();
	};
	setTimeout(log,100,"test");
}());


// ブックマークレット用圧縮版
javascript:(function(){var $removebranch=document.getElementById("merge_request_force_remove_source_branch"),$assigneeList=document.querySelector('[data-default-label="Assignee"]');$removebranch.checked=!1,$assigneeList.click();var log=function(){var e=document.querySelector('[data-user-id="6"] a');$assigneeClick=e.click()};setTimeout(log,100,"test");}());
