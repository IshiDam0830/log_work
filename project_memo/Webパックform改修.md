---
tags:
  - ホスティング
  - form
---

ajaxでパラメータがvaridationになってtype=wpが消えるのでその前にステータスを定義して渡したい;
→パラメータをあとづけして確認可能に

メール送信時にform画面まで戻っちゃう
$valid_redirectで引っかかったか？って思うけどconfirmの送り先にパラメータはつけてない
でふぉるとバリデーションに引っかかってたっぽい
  - これ$is_wpで'form'と同じように変更しようとしたけどうまく行かないのはどうして何
  - ベタ書きでdomain消してwp_系増やしたら普通に行けた
  - **解決**:confirmの<form>にもパラメータつければよかったぽい


(例)【メインタイトル大文字】犬と暮らす&#13;&#10;【タイトル中文字】お名前PetcareServices&#13;&#10;【文面】人と犬がより仲良く暮らせるようサポートします！




<?php 
		echo '<pre style="word-break: break-all ;">';
		var_dump($_SESSION);
		echo '<pre>';
		 ?>



- うまくセッションが送れない
	- 画像のバリデーションのみ削除→X
	- 画像のバリデーションと入力なし→X
	- 画像のバリデーションと入力欄なし→X
	- 画像のバリデーションと入力欄なし＋コンテンツテンプレート内の<?php?>の書き方を変更→X




(例)小タイトルと説明文を2点いれてください。&#13;&#10;&#13;&#10;【小タイトル】愛犬目線で犬のためのサービス&#13;&#10;【説明文】旅行や出張、急な病気やケガで家に帰れない、&#13;&#10;&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;トイレなどのしつけに困っている、&#13;&#10;&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;長生きしてほしいからごはんに気を使いたいなど、&#13;&#10;&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;困ったことが起きたら、ご相談ください。&#13;&#10;&#13;&#10;【小タイトル】ご提供できるサービス&#13;&#10;【説明文】ペットホテル（一時預かり）&#13;&#10;&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;トリミング&#13;&#10;&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;しつけ教室&#13;&#10;&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;ペットフードなどの健康ケアをアドバイス




(例)以下会社概要を入れてください。&#13;&#10;&#13;&#10;お名前&#13;&#10;メールアドレス&#13;&#10;お問い合わせ内容&#13;&#10;






(例)小タイトルと説明文を2点いれてください。&#13;&#10;【文章】困ったときは、お名前PetCareServicesにお任せください&#13;&#10;&#13;&#10;【中タイトル】ペットホテル（一時預かり）&#13;&#10;【小タイトル】大切な愛犬に快適なステイ&#13;&#10;【説明文】お食事、お散歩含めてストレスの無いよう楽しく過ごしてもらえるように努めています。また、買い物中などの数時間の一時お預かりのサービスもあります。&#13;&#10;


(例)以下会社概要を入れてください。&#13;&#10;&#13;&#10;会社名：お名前PetCareServices株式会社&#13;&#10;代表者：〇〇〇〇&#13;&#10;所在地：東京都渋谷区桜丘〇-〇-〇&#13;&#10;代表電話番号：〇〇〇〇&#13;&#10;メールアドレス：お問い合わせフォーム&#13;&#10;資本金：0000円&#13;&#10;設立：平成00年0月&#13;&#10;事業内容：ペットサービス&#13;&#10;従業員数：000人




実装の指定がパラメーター制御からディレクトリ複製に移って大体の作業が無に帰して悲しいので書いてたコードを残しておく
index.php
<!-- // wordpress用の申込みか判別 -->
$is_wp = filter_input(INPUT_GET, 'type') == 'wp' ? true : false;
$wp_param = $is_wp ? '?type=wp':'';

<!--
switch($varidate_page_name) {}内部
wordpressに申し込みの時、入力必須項目からドメインを削除してWP用の項目を追加、
キーのIDを振り直す
-->
if($is_wp){
	$required_keys = array_diff($required_keys, array('domain'));
	array_push($required_keys, 'wp_url', 'wp_user', 'wp_pass');
	$required_keys = array_values($required_keys);
}

<!--
if(CommonForm::getMode() == 'process') {}内部
weebly、wpによって送信する項目をwebsite_infoに出し分けて
メールテンプレートの記述を%website_info%に変更する
-->
if($is_wp){
	$posts['website_info'] =
		"[WordPres管理画面のURL]\n
		${wp_url}\n\n
		[WordPressのユーザー名]\n
		${wp_user}\n\n
		[WordPressのパスワード]\n
		${wp_pass}\n\n";
}else{
	$posts['website_info'] =
		"[独自ドメイン（登録したWebサイトのドメイン）]\n
		${domain}";
}

'wp_url', 'wp_user', 'wp_pass',
<!--
main, subpage1~3, confirm
wordpress用の申込みかの判別を読み込んでwp_paramをformの送信先urlに追加
項目の出し分けはis_wpで
-->
global $is_wp;
global $wp_param;

<!-- JS（footer.php内） -->
<!-- // パラメータでweebly・WordPress申し込みサービス分岐 -->
	var url_param = location.search;
	var url_param_regex = /(\?|\&)type\=[a-z]*(\&|$)/;
	console.log(url_param);
	console.log(url_param.search(url_param_regex));

<!-- //申し込みサービス分岐時varidation用urlにパラメータ追加 -->
	var target_param = '';
	if(url_param.search(url_param_regex) != -1){
		target_param = '\&type='+getParam('type');
	}

<!-- パラメータ取得用関数 -->
	function getParam(name, url) {
		if(!url){
			url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		var results = regex.exec(url);
		if(!results){
			return null
		};
		if(!results[2]){
			return ''
		};
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
<!--
バリデーションurlにwp出し分け用のパラメータも追加
 -->
var ajax_option = {
	url: '?varidation'+target_param,
	type: 'POST',
	dataType: 'json'
};


/server/website-pack/form-wp/






きっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっしょ
セキュリティとか情報漏えいの部分で精査もなくて改善も考えられないやつが社会人すんなよ
改善も考えられないていうか重要性をわかってない？

部署内ルールある？って聞いて「ないと思います！」じゃねええんだよ
あるなしで聞いて予想で返してくんな脳足らず

けっっっっきょく一番最初の指摘全部あたってんじゃねえかよ
依頼受けて10分で思いつく問題点退けておいて当初のライブ日前日になってやっぱ変えて！ってなるんだ？ふーん

ちゃんと読め