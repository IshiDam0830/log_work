# CSS備忘録
### 疑似要素
- before/after
	- img要素等、**閉じタグのないものには使えない**（表示できない）
		- divとかで使おうね！

### absolute関連
- 上下中央揃えにしたい！
	- TOP50％＋TransateY-50%

### 画像関連
- Flexboxで画像に余白＋縦に伸びる（IE,モバイル）
	- flex-shrink:0;を設定
	- 縦並びFlexの場合、align-items: center(stretch以外)を設定で解消
		- ※widthの設定は必要