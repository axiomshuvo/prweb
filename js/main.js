$(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
          })

$(document).ready(function(){

	// WaterBubble

	$('#Html5').waterbubble({
	    radius: 100,
	    lineWidth: 5,
	    data: 0.95,
	    waterColor: '#ea5927',
	    textColor: '#ffffff',
	    txt: 'Html5',
	    font: 'bold 30px "PT Sans"',
	    wave: true,
	    animation: true
	});

	$('#Css3').waterbubble({
	    radius: 100,
	    lineWidth: 5,
	    data: 0.95,
	    waterColor: 'rgb(19, 139, 202)',
	    textColor: '#ffffff',
	    txt: 'Css3',
	    font: 'bold 30px "PT Sans"',
	    wave: true,
	    animation: true
	});

	$('#Sass').waterbubble({
	    radius: 100,
	    lineWidth: 5,
	    data: 0.75,
	    waterColor: 'rgb(198, 83, 140)',
	    textColor: '#ffffff',
	    txt: 'Sass',
	    font: 'bold 30px "PT Sans"',
	    wave: true,
	    animation: true
	});

	$('#Bootstrap').waterbubble({
	    radius: 100,
	    lineWidth: 5,
	    data: 0.95,
	    waterColor: 'rgb(34, 24, 49)',
	    textColor: '#ffffff',
	    txt: 'Bootstrap',
	    font: 'bold 30px "PT Sans"',
	    wave: true,
	    animation: true
	});

	$('#Git').waterbubble({
	    radius: 100,
	    lineWidth: 5,
	    data: 0.7,
	    waterColor: '#f4645f',
	    textColor: '#ffffff',
	    txt: 'Git',
	    font: 'bold 30px "PT Sans"',
	    wave: true,
	    animation: true
	});

	$('#Photoshop').waterbubble({
	    radius: 100,
	    lineWidth: 5,
	    data: 0.7,
	    waterColor: 'rgb(0, 29, 38)',
	    textColor: '#ffffff',
	    txt: 'SEO',
	    font: 'bold 30px "PT Sans"',
	    wave: true,
	    animation: true
	});

	$('#Jquery').waterbubble({
	    radius: 100,
	    lineWidth: 5,
	    data: 0.9,
	    waterColor: '#0769ad',
	    textColor: '#ffffff',
	    txt: 'jQuery',
	    font: 'bold 30px "PT Sans"',
	    wave: true,
	    animation: true
	});

 // Tooltip

    $('[data-toggle="tooltip"]').tooltip();


	// TimeLine 

	$.timeliner({
		timelineContainer: '#timeline-js',
		timelineSectionMarker: '.milestone',
		oneOpen: true,
		startState: 'flat',
		expandAllText: '+ Show All',
		collapseAllText: '- Hide All'
	});

	$.timeliner({
		timelineContainer: '#extimeline-js',
		timelineSectionMarker: '.milestone',
		oneOpen: true,
		startState: 'flat',
		expandAllText: '+ Show All',
		collapseAllText: '- Hide All'
	});
		
		// Carosel
		
  	$('.flexslider').flexslider({
	    animation: "slide",
	    animationLoop: true,
	    itemWidth: 205,
	    slideshowSpeed: 1500,
	    itemMargin: 10
	  });


	


    //pettyphoto

     $("a[rel^='prettyPhoto']").prettyPhoto({
     	
     });

     //Smooth Scroll

       $('body').smoothScroll({
       		delegateSelector: 'ul.nav a',
       		speed:1500
      	});

    // MixitUp

    $('.portfolio-items').mixItUp();

    //Scroll Top
             var scrollTimeout;
            
            $('a.scroll-to-top').click(function(){
                $('html,body').animate({scrollTop:0},1500);
                return false;
            });

            $(window).scroll(function(){
                clearTimeout(scrollTimeout);
                if($(window).scrollTop()>400){
                    scrollTimeout = setTimeout(function(){$('a.scroll-to-top:hidden').fadeIn()},100);
                }
                else{
                    scrollTimeout = setTimeout(function(){$('a.scroll-to-top:visible').fadeOut()},100);    
            }
            });


    // GMAP3

    // $('#gmap').gmap3({
    //     marker:{address:"Haltern am See, Weseler Str. 151", options:{icon: "../img/location1.png"}},
    //     map:{
    //         options:{
    //           zoom: 14,
    //     	  scrollwheel: false
    //         }
    //        }
    //   });

   

} ) ;



  