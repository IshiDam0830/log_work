javascript: (function () {
	var id = 'TMTAG';
	var tag = document.getElementById(id);
	if (tag) {
		document.body.removeChild(tag);
	}
	tag = document.createElement('script');
	tag.id = 'TMTAG';
	tag.src = 'http://taskmanager.test/jsonp/input_itemid/?' + new Date().getTime();
	document.body.appendChild(tag);
})();