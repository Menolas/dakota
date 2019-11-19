var menuToggler = document.querySelector('.main-nav__toggler');
var menuBlock = document.querySelector('.main-nav__list');

menuToggler.addEventListener('click', function () {
	menuBlock.classList.toggle('main-nav__list--shown');
	menuToggler.classList.toggle('main-nav__toggler--close');
});

var blogHandlerForward = document.querySelector('.control-handlers__handler--right');
var blogHandlerBack = document.querySelector('.control-handlers__handler--left');
var blogArticles = document.querySelectorAll('.blog .blog__article');
var findArticleIndex = function () {
	for (var i = 0; i < blogArticles.length; i++) {
		var index;
		if (blogArticles[i].classList.contains('blog__article--shown')) {
			index = i;
		}
	}
	return index;
};



blogHandlerForward.addEventListener('click', function () {
	if (!blogHandlerForward.classList.contains('control-handlers__handler--faded')) {
	    var index = findArticleIndex();
	    var nextArticleIndex = index + 1;

	    if (nextArticleIndex > 0) {
	    	blogHandlerBack.classList.remove('control-handlers__handler--faded');
	    }

	    if (index < blogArticles.length - 1) {
			blogArticles[index].classList.remove('blog__article--shown');
			blogArticles[nextArticleIndex].classList.add('blog__article--shown');

			if (nextArticleIndex === blogArticles.length - 1) {
			    blogHandlerForward.classList.add('control-handlers__handler--faded');
		    }
		}
	}
});

blogHandlerBack.addEventListener('click', function () {
	if (!blogHandlerBack.classList.contains('control-handlers__handler--faded')) {
		var index = findArticleIndex();
		var nextArticleIndex = index - 1;

		if (nextArticleIndex < blogArticles.length - 1) {
			blogHandlerForward.classList.remove('control-handlers__handler--faded');
		}

		if (index > 0) {
			blogArticles[index].classList.remove('blog__article--shown');
			blogArticles[nextArticleIndex].classList.add('blog__article--shown');

			if (nextArticleIndex === 0) {
				blogHandlerBack.classList.add('control-handlers__handler--faded');
			}
		}
	}
});
