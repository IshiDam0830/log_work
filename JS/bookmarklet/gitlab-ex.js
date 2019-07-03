javascript: var l = document.getElementsByClassName('diff-wrap-lines');
for (var i in l) {
	if (typeof (l[i].style) != 'undefined' && l[i].style.display != 'none') {
		var a = l[i].getElementsByClassName('click-to-expand');
		if (a.length) {
			a[0].click();
		}
	}
}