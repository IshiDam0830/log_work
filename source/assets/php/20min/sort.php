<html>
<head>
<meta charset="utf-8">
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
<style>
p{
	margin:0;
}

</style>
<?php
	$text = '2020年02月12日　2019年12月期 通期決算説明会を開催いたしました
2020年04月07日　2020年12月期　第1四半期決算ライブ説明会開催のお知らせ
2020年02月28日　在宅勤務に関するアンケートを実施
2020年01月26日　GMOインターネットグループ、新型コロナウィルスの感染拡大に備え在宅勤務体制へ移行
2019年12月27日　GMOインターネットグループ 新TVCMを 2020年元日に放送！
2020年01月10日　2019年12月期　通期決算ライブ説明会開催のお知らせ
2020年04月10日　在宅勤務で浮いたオフィス経費を全パートナーに還元 ～ 在宅勤務を支援する2つの施策を実施 ～
2020年03月16日　GMOインターネットグループ　新型コロナウイルスの感染拡大に伴い、各種支援を実施
2019年11月12日　2019年12月期 第3四半期決算説明会を開催いたしました
2020年02月12日　2019年12期通期決算短信（連結）を発表いたしました';
$list = explode("\n",$text);
?>

<h2>デフォルト</h2>
<?php foreach($list as $val): ?>
<p><?php echo $val; ?></p>
<?php endforeach; ?>

<?php sort($list); ?>
<h2>昇順</h2>
<?php foreach($list as $val): ?>
<p><?php echo $val; ?></p>
<?php endforeach; ?>

<?php rsort($list); ?>
<h2>降順</h2>
<?php foreach($list as $val): ?>
<p><?php echo $val; ?></p>
<?php endforeach; ?>

</body>
</html>


<?php
// 早川さんのやつ
?>
