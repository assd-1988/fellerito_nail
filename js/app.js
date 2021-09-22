var css = []
$$('a[data-property]').forEach(function(el, i){
	var property = el.getAttribute('data-property'),
		from = el.getAttribute('data-from'),
		to = el.getAttribute('data-to');
	
	var id = property, i = 1;
	
	while(document.getElementById(id)) {
		id = property + '/' + ++i;
	}
	
	el.id = id;
	el.href = '#' + id;
	
	el.title = property + ' from ' + from + ' to ' + to;
	
	var selector = '#' + id.replace(/([^\w-])/g, '\\$1'),
		ident = id.replace(/([^\w-])/g, '-');
	
	css.push('@keyframes ' + ident + '{',
			'from{' + property + ':' + from + '}',
			'to{' + property + ':' + to + '}}',
			selector + ' { animation: ' + ident + ' 1s infinite alternate;' + property + ':' + from + '}');
});


