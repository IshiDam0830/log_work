---
tags:
  - ホスティング
---
# あおぞらCP追加施策_広告LPにコンテンツ追加依頼

http://taskmanager.test/details/?id=32163

## 対応ページ
https://www.onamae-server.com/rs/campaign/

## PSDがない
狂ってる
- コンテンツの幅は883px？
	- どっから来た
	- 下の部分違うけどこれ意図的？意図するならなんで？
- チラシの裏に書いたメモ書きを原稿として送るのやめて
- （やめてくれ）

## ABテスト
https://www.onamae-server.com/rs/campaign/
↑のあおぞら追加部分のみ


## meta
- 10,000円が当たるビジネス応援キャンペーンに参加しよう｜お名前.comレンタルサーバー
- キャンペーンにご参加ください！コスパ抜群★ドメイン1円のお名前.comレンタルサーバー＆デビットカード付きキャッシュカードのGMOあおぞらネット銀行口座を申込んで当てよう★
- キャンペーン、プレゼント、10,000円、コストパフォーマンス、デビットカード、キャッシュカード、口座、ネット、レンタルサーバー、サーバー、ドメイン、お名前.com

## コーディングしたページ
（既存のLPから複製、一部別コードに差し替え・追加等）
- htdocs/rs/campaign/aozora/bank/includes/boxApply.php
- htdocs/rs/campaign/b-aozora/aozora_data/includes/boxApply.php
- - htdocs/rs/campaign/aozora/bank/scss/resources/_modules.scss
	- 264行目〜297行目
	- 748行目〜792行目
（既存のLPを複製、不要コンテンツ削除のみ）
- htdocs/rs/campaign/aozora/bank/index.php
- htdocs/rs/campaign/b-aozora/aozora_data/index.php
（新規コーディング）
- htdocs/rs/campaign/b-aozora/scss/style.scss
