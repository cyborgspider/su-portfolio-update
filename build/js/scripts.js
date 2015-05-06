(function(){

	//Create an empty array where all our strings will be contained
	var content = [];

	//Go through each INFO block on the page and create an HTML string and put into the content array
	$('.info').each(function(i){
		var $this          = $(this),
			projectTitle   = this.hash.substr(1);
			numberOfImages = $this.attr('data-number'),
			imageFilename  = $this.attr('data-filename'),
			imgArray = [];

		for (var i = 1; i <= numberOfImages ; i++){
			imgArray.push('<img src="img/' + projectTitle + '/slide-' + i + '.jpg" alt="" />')
		}

		var productTemplate =   '<div class="modal-content mfp-hide" id="'+ projectTitle + '">' + 
								'<h2>' + projectTitle + '</h2>' + 
								imgArray.join('') + '</div>';
		
		//Adding to the global content array
		content.push(productTemplate)
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
	$('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});	

	//Animated navigation
	$('.nav-links').on('click', 'a', function(e){
     	var target = $(this).attr('href'),
         	targetOffset = $(target).offset().top - 80;

    	e.preventDefault();
    	$('html,body').animate({scrollTop: targetOffset + 'px'}, 700);
	})

})();