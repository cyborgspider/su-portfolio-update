(function(){

	//Create an empty array where all our strings will be contained
	var content = [];

	//Go through each INFO block on the page and create an HTML string and put into the content array
	$('.info').each(function(i){
		var $this            = $(this),
			projectLink        = this.hash.substr(1),
			projectTitle       = $this.find('h2').text(),
			projectDescription = $this.find('p'),
			numberOfImages     = $this.attr('data-number'),
			imageFilename      = $this.attr('data-filename'),
			linkBehance        = $this.attr('data-behance') || '',
			linkLive           = $this.attr('data-live') || '',
			imgArray           = [];

		for (var i = 1; i <= numberOfImages ; i++){
			imgArray.push('<img src="img/' + projectLink + '/slide-' + i + '.jpg" alt="" />')
		}

		var productTemplate =  function(){
			if (!linkBehance && !linkLive){
				return '<div class="modal-content mfp-hide" id="'+ projectLink + '">' +
								'<h2>' + projectTitle + '</h2>' +
								'<p>' + $(projectDescription[1]).text() + '</p>' +
								imgArray.join('') + '</div>';
			} else if (!linkLive && linkBehance) {
				return '<div class="modal-content mfp-hide" id="'+ projectLink + '">' +
								'<h2>' + projectTitle + '</h2>' +
								'<p>' + $(projectDescription[1]).text() + '</p>' +
								'<p><a href="' + linkBehance + '" target="_blank">Larger view from Behance</a></p>' +
								imgArray.join('') + '</div>'
			} else if (linkLive && !linkBehance) {
				return '<div class="modal-content mfp-hide" id="'+ projectLink + '">' +
								'<h2>' + projectTitle + '</h2>' +
								'<p>' + $(projectDescription[1]).text() + '</p>' +
								'<p><a href="' + linkLive + '" target="_blank">Check out live site</a></p>' +
								imgArray.join('') + '</div>'
			} else {
				return '<div class="modal-content mfp-hide" id="'+ projectLink + '">' +
								'<h2>' + projectTitle + '</h2>' +
								'<p>' + $(projectDescription[1]).text() + '</p>' +
								'<p><a href="' + linkBehance + '" target="_blank">Larger view from Behance</a><a href="' + linkLive + '" target="_blank">Check out live site</a></p>' +
								imgArray.join('') + '</div>'
			}
		};

		//Adding to the global content array
		content.push(productTemplate())
	});
	//Here's the code that adds the content to our page.
	$(content.join('')).appendTo('body');

	//Modal lightbox code, only if the content has been loaded
	if (content){
		$('.info').magnificPopup({
			type:'inline'
		});
	} else {
		console.log('Please wait while our content is generated.')
	}

	//Counter animation
	// $('.count').each(function () {
	//     $(this).prop('Counter',0).animate({
	//         Counter: $(this).text()
	//     }, {
	//         duration: 4000,
	//         easing: 'swing',
	//         step: function (now) {
	//             $(this).text(Math.ceil(now));
	//         }
	//     });
	// });

	//Scrollspy (Wayfinder.js)
	// Cache selectors
	var lastId,
	    topMenu = $(".nav-links"),
	    topMenuHeight = topMenu.outerHeight()+15,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }

	    });
	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({
	      scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;

	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";

	   if (lastId !== id) {
	       lastId = id;

	       // Set/remove active class
	       menuItems
	         .removeClass("active")
	         .filter("[href=#"+id+"]").addClass("active");

	       //Handle the fish-hook nav animation
	       if(id !== 'hero'){
	       	$('.nav-top-wrap').addClass('-not-hero');
	       } else {
	       	$('.nav-top-wrap').removeClass('-not-hero');
	       };
	   }

	});

	//Mobile menu
	$('.icon-menu').click(function(){
		var $this = $(this),
			  $menu = $this.closest('.mobile-nav');
		$menu.addClass('-active');
	});
	$('.icon-close').click(function(){
		var $this = $(this),
			  $menu = $this.closest('.mobile-nav');
		$menu.removeClass('-active');
	});
	$('.mobile-links').on('click', 'a', function(){
		$('.mobile-nav').removeClass('-active');
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({
	      scrollTop: offsetTop
	  }, 300);
	});

})();
