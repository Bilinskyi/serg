	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player-js', {
			events: {
				'onReady': onPlayerReady,
				onStateChange: function() {
					player.playVideo()
				}
			}
		});
	}

	function onPlayerReady(event) {
		event.target.setVolume(0);
	}


	$(document).ready(function(){


		$(window).on('load', function() {

	// $('video').css({
	// 	width: '100%',
	// 	height: '100%'
	// })


})



 // function stopVideo() {
      //   player.stopVideo();
      // }

		// var scr = $(".main-wrapper").height() > $('body').height();

	// var flsm1 = true; 
	// var flsm2 = true; 

	// $(window).on('load resize', function() {

	// 	/*CHECK WIDTH 1 ITERATION*/
	// 	if (window.innerWidth <= 991) {
	// 		flsm2 = true;
	// 		if (flsm1) {
	// 			flsm1 = false;

	// 		}
	// 	} else {
	// 		flsm1 = true;
	// 		if (flsm2) {
	// 			flsm2 = false; 

	// 		}
	// 	}

	// });





	// $('.js-hamburger').on('click', function() {
	// 	$(this).toggleClass('is-active');
	// 	$('.nav').slideToggle();
	// });


	/* SLICK_SLIDER */
	// if ($('.your-class').length) {
	// 	$('.your-class').slick({
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		dots: true,
	// 		centerMode: false,
	// 		centerPadding: '30px',
	// 		touchMove: false,
	// 		draggable: false,
	// 		responsive: [
	// 		{
	// 			breakpoint: 992,
	// 			settings: {
	// 				dots: false,
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 668,
	// 			settings: {
	// 				dots: false,
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 		]
	// 	});
	// };






	/*MATCHHEIGHT*/
	// $('.your-class').matchHeight()

	/*FANCYBOX*/
	$(".fancybox").fancybox({
		'hideOnContentClick': true,
		minWidth : 230,
		padding : 0,
		closeBtn : true
	});

	$(".various").fancybox({
		width: '90%',
    height    : '80%',
		maxWidth  : 700,
		maxHeight : 400,
		fitToView : false,
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });



	/*SCROLL TO*/
	// $('header a[href^="#"]').on('click', function(event) {
	// 	var target = $( $(this).attr('href') );
	// 	if( target.length ) {
	// 		event.preventDefault();
	// 		$('html, body').animate({
	// 			scrollTop: target.offset().top -35
	// 		}, 600);
	// 	}
	// });


	/*MASK JQUERY*/
	// jQuery(function($){ 
	// 	$('input[type=tel]').mask("+7 (999) 999-99-99");
	// });


	/*HIDE PLACEHOLDER*/
	// $('input,textarea').focus(function(){
	// 	$(this).data('placeholder',$(this).attr('placeholder'))
	// 	.attr('placeholder','');
	// }).blur(function(){
	// 	$(this).attr('placeholder',$(this).data('placeholder'));
	// });






	/*YANDEX MAP*/
	// if ($('.map-wrapp').length) {
	// 	ymaps.ready(init);
	// 	function init(){
	// 		var myMap=new ymaps.Map("map-canvas",{
	// 			center:[44.499022, 34.174761],
	// 			zoom:15,
	// 			controls:['zoomControl']
	// 		}),
	// 		Placemark1=new ymaps.Placemark([44.499022, 34.174761],{
	// 			balloonContent:'',
	// 			hintContent:'',
	// 		},{
	// 			preset:'islands#redDotIcon'
	// 		})
	// 		myMap.geoObjects.add(Placemark1);
	// 		myMap.behaviors.disable('scrollZoom');
	// 	}
	// };



	/*deletecookie*/
	// $(document).on('click', 'a', function() {
	// 	if (readCookie('txt-c') !== null || readCookie('select-c') !== null ) {
	// 		eraseCookie('txt-c');
	// 		eraseCookie('select-c');
	// 	}
	// });




	var timeoutID;

	/*check-form*/
	$('#call-valid').validate({

		onfocusout: false,
		onkeyup: false,

		errorPlacement: function(error, element){

		},
		highlight: function(element, errorClass) {

			$(element).addClass(errorClass);




			var errorBlock = $('.wrapp-error');
			errorBlock.fadeIn(0);

			clearTimeout(timeoutID);
			timeoutID = setTimeout(function() {
				$('.wrapp-error').fadeOut(0);

			},3000);

		},

		rules:{
			"phone":{required:true},
			"name":{required:true}
		},
		messages:{
			"phone":{required:""},
			"name":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#call-valid')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							// window.location.href = "thx1.html";
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('.js-close, .wrapp-error').on('click', function() {
		$('.wrapp-error').fadeOut(0);
	});
	$('.wrapp-error__text').on('click', function(e) {
		e.stopPropagation();
	});

	// function createCookie(name,value,days) {
	// 	var expires = "";
	// 	if (days) {
	// 		var date = new Date();
	// 		date.setTime(date.getTime() + (days*24*60*60*1000));
	// 		expires = "; expires=" + date.toUTCString();
	// 	}
	// 	document.cookie = name + "=" + value + expires + "; path=/";
	// }

	// function readCookie(name) {
	// 	var nameEQ = name + "=";
	// 	var ca = document.cookie.split(';');
	// 	for(var i=0;i < ca.length;i++) {
	// 		var c = ca[i];
	// 		while (c.charAt(0)==' ') c = c.substring(1,c.length);
	// 		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	// 	}
	// 	return undefined;
	// }

	// function eraseCookie(name) {
	// 	createCookie(name,"",-1);
	// }




});