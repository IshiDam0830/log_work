<?php
$news = [
	[ 'date' => '2011-06-16', 'title' => '「GMO Yours」オープン' ],
	[ 'date' => '1995-11-10', 'title' => 'interQ サービス開始' ],
	[ 'date' => '2019-12-05', 'title' => '「GMOデジタル・ハチ公Square」オープン' ],
	[ 'date' => '1996-09-10', 'title' => 'interQ GOGO! 無料配布開始' ],
	[ 'date' => '2000-12-11', 'title' => 'お名前.com 10万件突破' ]
];

// 石田のやつ
array_multisort($news);
foreach ($news as $key) {
	echo $key['date'].":".$key['title'].'<br>';
}




//出題した石屋さんのやつ
// ソートの条件を用意（'date'でソートする）
foreach($news as $key => $val){
	$date_sort[$key] = $val['date'];
}

/**
 * 課題①
 */

//dateでソート（古い順）
array_multisort($date_sort, SORT_ASC, $news);

// 出力
echo '<h2>課題①</h2>';
foreach ($news as $key => $value) {
	echo "{$value['date']}：{$value['title']}<br>";
}

/**
 * 課題②
 */

//dateでソート（新しい順）
array_multisort($date_sort, SORT_DESC, $news);

// 2000年代の始まりUTC
$millennium = strtotime(date('2000-01-01').' UTC');
// 出力
echo '<h2>課題②</h2>';
foreach ($news as $key => $value) {
	if(strtotime(date($value['date']).' UTC') > $millennium) {
		echo "{$value['date']}：{$value['title']}<br>";
	}
}




//斎藤さんのuasortを使ったやつ
uasort($news, function ($v1, $v2) {
	return strcmp($v1['date'], $v2['date']);
});

foreach($news as $n) {
	echo $n['date'] . ': ' . $n['title'] . "\n";
}

echo "-----------------------\n";

uasort($news, function($v1, $v2) {
	return strcmp($v1['date'], $v2['date']) * -1;
});

foreach($news as $n) {
	if(intval(substr($n['date'], 0, 4)) >= 2000) {
		echo $n['date'] . ': ' . $n['title'] . "\n";
	}
}


?>



<?php // 長谷川先輩のやつ ?>
<meta charset="UTF-8">
<?php
	$news = [
		[ 'date' => '2011-06-16', 'title' => '「GMO Yours」オープン' ],
		[ 'date' => '1995-11-10', 'title' => 'interQ サービス開始' ],
		[ 'date' => '2019-12-05', 'title' => '「GMOデジタル・ハチ公Square」オープン' ],
		[ 'date' => '1996-09-10', 'title' => 'interQ GOGO! 無料配布開始' ],
		[ 'date' => '2000-12-11', 'title' => 'お名前.com 10万件突破' ]
	];

	$news_mold = [];
	foreach($news as $item){
		$tmp = $item;
		$time = strtotime($item['date']);
		$tmp['year'] = date('Y', $time);
		$news_mold[$time] = $tmp;
	}
	ksort($news_mold);

	$news_late = [];
	foreach($news_mold as $key => $item){
		if($item['year']<2000){
			continue;
		}
		$news_late[$key] = $item;
	}
	krsort($news_late);
?>

<h2>課題①</h2>
<ul>
	<?php foreach($news_mold as $item): ?>
		<li><?php echo $item['date']; ?>：<?php echo $item['title']; ?></li>
	<?php endforeach; ?>
</ul>

<h2>課題②</h2>
<ul>
	<?php foreach($news_late as $item): ?>
		<li><?php echo $item['date']; ?>：<?php echo $item['title']; ?></li>
	<?php endforeach; ?>
</ul>