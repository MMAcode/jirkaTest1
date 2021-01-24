$(document).ready(function(){

	/* DROPDOWN MENU */
	$(".menu").hide(); 

	$(".has-menu").hover(
		function(){
			$(this).addClass("menu-open");
			$(this).children("ul").show();
		},
		function(){
			$(this).removeClass("menu-open");
			$(this).children("ul").hide();
		});


	/* OPEN EXTERNAL LINKS IN A NEW WINDOW */
	var links = document.getElementsByTagName("a");
	for (i = 0; i < links.length; i++) {
		if (links[i].rel == 'external') {
			links[i].onclick = function(){window.open(this.href);return false;};
		}
	}


	/* PAGINATION */
	if ($('#images').length){
	
		function updateNav(el) {
			if (el.rel == 'prev' && currentImage > 1) {
				updateImagePosition(currentImage-1);
			}
			else if (el.rel == 'next' && currentImage < images.length) {
				updateImagePosition(currentImage+1);
			}
			buildNavHTML(currentImage);
			bindNavEvents();
		}
	
	
		function updateImagePosition(img) {
			if (img < currentImage) {
				$('#images ul').animate({marginLeft: '+=' + width + 'px'}, 'fast');
			}
			if (img > currentImage) {
				$('#images ul').animate({marginLeft: '-=' + width + 'px'}, 'fast');
			}
			currentImage = img;
		}
	
	
		function buildNavHTML(img) {
			var navHTML = '';

			if (img != 1) {
				navHTML += '<a href="#' + currentPage + '-' + [img-1] + '" onclick="return false;" rel="prev" class="prev" title="Previous">Previous</a>';
			}

			if (img != images.length) {
				navHTML += '<a href="#' + currentPage + '-' + [img+1] + '" onclick="return false;" rel="next" class="next" title="Next">Next</a>';
			}

			imagesNav.innerHTML = navHTML;
		}
	
		
		function bindNavEvents() {
			$('#images-nav').children('a').click(function(){updateNav(this);});
		}
	
	
		var imagesNav = document.createElement('div');
		imagesNav.id = 'images-nav';
		
		/* GET PAGES & CURRENT PAGE */
		var pages = $('#portfolio-menu').children('li');
		var currentPage = document.getElementById('images').className;
		
		/* PREV/NEXT PAGES */
		for (i = 0; i < pages.length; i++) {
			var page = pages[i];
			if (page.className == currentPage) {
				if (i > 0) {
					var prevPage = pages[i-1].className;
				}
				if (i < pages.length-1) {
					var nextPage = pages[i+1].className;
				}
			}
		}
	
		/* GET IMAGES */
		var images = $('#images ul').children('li');
		var width = $('#images ul li:first').width();
		$('#images ul').width(width*12);
		$('#images ul').children('li').css({'float':'left'});
		var currentImage = 1;
		
		buildNavHTML(currentImage);
		$('#content').append(imagesNav);
		bindNavEvents();
	}





	/*
	$("a").click(function(event){
		event.preventDefault();
		// $(this).slideUp("slow");
		$('#projects').animate({marginLeft: '-=300px'}, 'fast');
	});
	*/
	
});