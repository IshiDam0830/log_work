---
title: jQuery初心者はこれだけでOK！progateで学習したjQueryまとめ
tags: jQuery JavaScript HTML5 CSS
author: pocket_ma_kun
slide: false
---
#なんのためにまとめるのか？

将来的に
「えーっと、jQueryってどう書くんだっけ…？(てへぺろ)」
って困っている自分の未来が容易に想像できるので、

1:備忘録として残し
2:書きながら復習をして記憶にも残りやすくし
3:jQuery初心者が、このページ見ただけでjQueryの基礎マスターしたぜ！って気持ちになる
ために書いておこうぞい。

#jQueryとは？
javascriptライブラリ。
webブラウザで動作するjsのよくつかう道具をまとめてくれている。

#jQueryの基本的な使い方は？
jQueryオブジェクトの作成→メソッドの呼び出し。
つまり「何を(オブジェクト)」「どうするか？(メソッド)」と記述すればOK！
例えば、こんな感じ。

```html:html
<head>
<!-- ここでjQueryライブラリを読み込んでいる。jQuery利用時に必須の1行目 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
</head>

<body>
<div id="id">
 <h1 class="class">jQueryの使い方</h1>
 <p>簡単だよ！</p>
</div>

<!-- この記述で外部ファイルのjQuery.jsを参照。bodyの最後に記述すると処理速度UP！ -->
<!-- jQuery利用時に必須の2行目 -->
<script src="jQuery.js"></script>
</body>
```

```js:jQuery.js
//この外部ファイルを自分で作成する
$(function(){

$('h1').hide();
　→HTMLの要素をセレクタで指定。

$('#id')
→定義したidをセレクタで指定

$('.class')
→定義したclassをセレクタで指定

$('#id').イベント名(function(){});

});

```
基本的にjQueryを使うときはclassではなく、
idで指定してあげるとidはhtmlファイル内に1つしかないので処理が高速化されまっせ。

書き方のポイントは
\$();の中に
function(){}が入っていて、
その中に$('#id').hide();などが入っていること。

（よくどこに;つけるんだっけ？とか
()と{}はどうすんのよ？って混乱しがちなので…汗）


#出てきたメソッド一覧（覚えられなくても、左のストックに入れて後でカンペすればおｋ）

```js:js
//hideメソッド
$('#id').hide();

//fadeInメソッド
$('#id').fadeIn();
//引数で、アニメーションの速度を、例えば1500ミリ秒に指定できる。
//引数に'slow'などとしてもアニメーション速度を指定可能。

//fadeOutメソッド
$('#id').fadeOut(1500);
//引数で、アニメーションの速度を、例えば1500ミリ秒に指定できる。

//slideUpメソッド
$('#id').slideUp(1500);
//引数で、アニメーションの速度を、例えば1500ミリ秒に指定できる。

//slideDownメソッド
$('#id').slideDown(1500);
//引数で、アニメーションの速度を、例えば1500ミリ秒に指定できる。


//showメソッド
$('#id').show();
//もともとcssのdisplay: none;で隠れているような要素を表示することができる。

//cssメソッド
$('#id').css('プロパティ','値');
↓
$('#id').css('color','red');
$('#id').css('display','none');

//htmlメソッド
//<p>こんにちは</p>という要素がHTML内にあるとき
$('').html('<span></span>');

//textメソッド
//<p>こんにちは</p>という要素がHTML内にあるとき
$('p').text('Hello');
//とすればHelloに書き換わる。

//findメソッドとchildrenメソッド
すべての子孫要素に対して、特定のセレクタを探すfindメソッド。
子要素に対してだけ、特定のセレクタを探すchildrenメソッド。

$(function() {
  $('#find-method').click(function() {
    // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
    // cssメソッドで文字の色をredに指定する
    $('#wrapper').find('a').css('color','red');
  
  });
  
  $('#children-method').click(function() {
    // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
    // fadeOutメソッドで隠す
    $('#wrapper').children('a').fadeOut();
    
  });
});

```

#出てきたイベント一覧（覚えられなくても、左のストックに入れて後でカンペすればおｋ）

クリックイベント click

```js:js
$(function(){
　　　//idというidを持つ要素が、clickされたときにfadeOutする処理。
　　$('#id').click(function(){
 　$('#id').fadeOut();
　　});
});

//#hide-textというidを持つHTMLの要素がクリックされたら、slideUpで隠すという意味
$(function(){
  $('#hide-text').click(function(){
    $('#text').slideUp();
  });
});

```

#若干、応用編！(でもまだまだ大丈夫…なはず！）
##this
すべてを同じように扱うならthis！

```html:html
<ul>
    <li class="list-item">リスト1</li>
    <li class="list-item">リスト2</li>
    <li class="list-item">リスト3</li>
</ul>
```

```js:js
$(function() {
  $('.list-itme').click(function(){
//どのli要素をクリックしてもcssメソッドが動くようにthisをつかっている
    $(this).css('color','red');
  });  
});
```

##何度も同じセレクターを使うときはコレ！

変数に代入してしまえ！

```js:js
//何回も$('div')って書きたくねーよ…
//そんなときはこちら！
var $div = $('div');

$div.css('color','red');
$div.text('hello');

```

そして同じ要素に対してjQueryを反映させるなら
いちいち上のように書かずに。。。こう！
(ドットでメソッドがつながっているのでメソッドチェーンという)
処理速度もUPするぞい！

```js:js
$div.css('color','red').text('hello');
```

##マウスがのったときの動作hover
ポイントはマウスがのったときのfunctionと、
マウスがはずれたときのfunctionをセットで記述すること。

```js:js
$(function() {
  $('#language-wrapper').hover(function(){
    $('.language-text').fadeIn();
  },function(){
    $('.language-text').fadeOut();
  });
});
```

#最後に
他にもjQueryはいろいろできます。
まずは基本的な書き方だけ使うことができれば
後は独学でもなんとかなるっす。

[Kei](https://twitter.com/energyrevo21)と開発した[エロ診断メーカー](https://slack-redir.net/link?url=https%3A%2F%2Fero-shindan.herokuapp.com%2F)や、
Ed.D.(Eros Driven Development)の[ホームページ](https://storage.googleapis.com/edd-homepage/IntroductionEdD/index.html)もjQueryを使いこなすことができれば、もう少し動きがあって面白いサイトになる。
その実装はまた今度ということで。

ではではドロン！！

