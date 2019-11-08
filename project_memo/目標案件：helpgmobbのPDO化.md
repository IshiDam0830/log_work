---
tags:
  - 目標
---
### わからん侍
- help.gmobb.jp = gmobb.jp/support/ ?
- PDOというかDB関連
	- まず最初にDBなんとかしないといけなさそう


## PHPのDB連携系メモ
### 【PHP超入門】クラス～例外処理～PDOの基礎(https://qiita.com/7968/items/6f089fec8dde676abb5b)
- 旧：$link = mysql_connect('ホスト名', 'ユーザー名', 'パスワード');
- 新：$dbh = new PDO('DSN','ユーザー名','パスワード',オプション);
	- $dbh = new PDO('mysql:host=サーバー名;dbname=データベース名;charset=文字エンコード','ユーザー名','パスワード',オプション);
- 


## memo
- mysql_connect（PHP 5.5.0で非推奨、PHP 7.0.0で削除）
	- 使用ファイル： /library/mysql.inc
	- mysql.incが読み込まれている
		- /library/common_db_contact_select.php
		- /library/common_db_docomohikari.php
		- /library/common_db.php
- mysql_query（PHP 5.5.0で非推奨、PHP 7.0.0で削除）
	- mysqli_query()かPDO::query()にしたほうが良い
	- 使用ファイル
		- /library/common_db.php
- SET NAMES
	- コンストラクタの DSN(Data Source Name) で指定する．
		- 例: $pdo = new PDO('mysql:dbname=test;host=localhost;charset=utf8');
	- 使用ファイル
		- /library/common_db_contact_select.php
		- /library/common_db_docomohikari.php
		- /library/common_db.php
- SET CHARACTER SET
	- 該当記述箇所なし