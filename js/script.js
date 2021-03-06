//  menu mobile animation

var menuToggler = document.querySelector('.main-nav__toggler');
var menuBlock = document.querySelector('.main-nav__list');

menuToggler.addEventListener('click', function () {
	menuBlock.classList.toggle('main-nav__list--shown');
	menuToggler.classList.toggle('main-nav__toggler--close');
});

// blog articles mobile animation

var similarArticles = document.querySelector('.blog__articles-list');
var blogHandlerForward = document.querySelector('.control-handlers__handler--right');
var blogHandlerBack = document.querySelector('.control-handlers__handler--left');
var blogArticles = similarArticles.querySelectorAll('.blog__articles-item');
console.log(similarArticles);

var findArticleIndex = function () {
	for (var i = 0; i < blogArticles.length; i++) {
		var index;
		if (blogArticles[i].classList.contains('blog__articles-item--shown')) {
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
			blogArticles[index].classList.remove('blog__articles-item--shown');
			blogArticles[nextArticleIndex].classList.add('blog__articles-item--shown');

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
			blogArticles[index].classList.remove('blog__articles-item--shown');
			blogArticles[nextArticleIndex].classList.add('blog__articles-item--shown');

			if (nextArticleIndex === 0) {
				blogHandlerBack.classList.add('control-handlers__handler--faded');
			}
		}
	}
});

// blog articles tablet animation 

similarArticles.addEventListener('click', function (evt) {
    var target = event.target;
    for (var i = 0; i < blogArticles.length; i++) {
		if (blogArticles[i].classList.contains('blog__articles-item--active')) {
			blogArticles[i].classList.remove('blog__articles-item--active');
		}
	}
    
    target.classList.add('blog__articles-item--active');
});

// gallery animation 

var similarGalleryPictures = document.querySelector('.gallery__list');
var container = document.querySelector('.container');
var bigPicture = similarGalleryPictures.querySelector('.gallery__big-picture');

/*similarGalleryPictures.addEventListener('click', function (evt) {
	var target = event.target;
	container.classList.add('container--shown-overlay');
	bigPicture.classList.add('gallery__big-picture--shown');
});*/
