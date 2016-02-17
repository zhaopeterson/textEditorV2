
$(function(){
	console.log($(window).width(), $(window).height())
	var recentsLength = 5,
		favoritesLength = 7,
		recentsDone = false;
	if($(".logo-mask img").hasClass("logo-off")){
		$(".logo-mask img").removeClass("logo-off").addClass("logo-on")
	}
	$(".logo-mask img").on("webkitTransitionEnd", function(){
		if($(".title-mask h1").hasClass("title-off")){
			$(".title-mask h1").removeClass("title-off").addClass("title-on")
		}
	});
	$(".title-mask h1").on("webkitTransitionEnd", function(){
			$("article.recents").addClass("recents-on")
				
	});// end of title-mask

	$("article.recents").on("webkitTransitionEnd", function(){

			for (var i=0; i<recentsLength; i++) {
				$("article.recents").append("<div class='app-tile' id='appTile"+i+"''>")
			}
			for (var i=0; i<=recentsLength; i++) {
				var id = "article.recents #appTile" + i;		
				$(id).css('margin-left', -i*240+"px");
			}
			$("article.recents .app-tile").each(function(index){
				var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
				$(this).css('background', randomColor);

				$(this).css('zIndex', recentsLength-index);
				$(this).html("<div class='scrim'><p>APP"+index+"</p></div>");
				//setTimeout(function(x) { return function() { console.log(x); }; }(i), 1000*i);
				//setTimeout(function(a){return function(){$(this).animate({opacity: 1}, 250)};}(index), 250*index);
				

				$(this).delay(index*250).animate({'opacity':1}, 150, "linear");
				$(this).animate({"margin-left": 0}, (500+index*50), "linear", function(){
					recentsDone = true;
					
					
				});



		});// end of recents on webkit transition


	$("article.recents").on("click", function(){
		$('.video-container').css('display', 'block')
		$('.splash').removeClass('out-viewport');
		$('.splash').addClass('in-viewport');
	
		$('.splash').on("animationend",function(){
			$(this).delay(50).css("display", "none");
			$('#featured-video').css('opacity', 1);
			//$('#featured-video').attr('autoplay', true);
			document.querySelector('#featured-video').play();
		})
	});

	// Can not use css transition
	$("article.recents .app-tile").hover(function() {
		$(this).find('.scrim').addClass("hover");
		$(this).find('.scrim p').animate({'margin-bottom': 0});
		$(this).dequeue();
		}, function() {
		$(this).find('.scrim').removeClass("hover");
		$(this).find('.scrim p').animate({'margin-bottom': "-40px"});
		$(this).dequeue();
		})	
	});


	setTimeout(addFavorites, recentsLength*250+3000);
	function addFavorites(){
		$("article.favorites").addClass("favorites-on")
		for (var i=0; i<favoritesLength; i++) {
			$("article.favorites").append("<div class='app-tile' id='appTile"+i+"''>")
		}

		$("article.favorites .app-tile").each(function(index){
			var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
			$(this).css('background', randomColor);
			$(this).css('margin-top', index*250+"px");
			$(this).append("<div class='scrim'>");
			$(this).delay(100*index).animate({"margin-top": 0}, 250 + index*200, "easeInOutBack", function(){
			})

		})
		
	}

})

