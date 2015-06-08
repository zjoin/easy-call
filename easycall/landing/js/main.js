// init one page
function Full_Page() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3page', '4page', '5page', 'lastPage'],
        menu: '.menu'
    });
	
	
	$("table").delegate('td','mouseover mouseleave', function(e) {
    if (e.type == 'mouseover') {
		$("colgroup").eq($(this).index()).addClass("hover");
    }
    else {
		$("colgroup").eq($(this).index()).removeClass("hover");
    }
});


};    
    
    
// init tabs
function init_tabs(){

		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	}

 

 
 
 

// init accordion
function Init_Accordion(){
        var accordion = $('.item.accordion');
        accordion.each(function(){
       var accTrigger = $(this).children('h2');
       var accContent = $(this).html();
          accTrigger.append('<i class="fa fa-angle-down"></i>');
          accTrigger.siblings().wrapAll('<div class="accContent"></div>');
    
    accTrigger.click(function(){
      var element = $(this);

      if ( element.parent('.accordion').hasClass('open') == true ){
        element.removeClass('active');
        element.next('.accContent').slideUp(250);
        element.parent('.accordion').removeClass('open');
        element.find('i').addClass('fa-angle-down');
        element.find('i').removeClass('fa-angle-up');
      } 
        else {
        $('.accordion h2').removeClass('active');
        element.addClass('active');
        $('.accordion .accContent').slideUp(250);
        $('.accordion').removeClass('open');
        $('.accordion h2 i').removeClass('fa-angle-up');
        $('.accordion h2 i').addClass('fa-angle-down');
        element.find('i').removeClass('fa-angle-down');
        element.find('i').addClass('fa-angle-up');
        element.next('.accContent').slideDown(250);
        element.parent('.accordion').addClass('open');
      }
    });
  });
}


function Init_Mobile () {
    $("#header__button").click(function() {
      $(this).toggleClass("hamburger--open");
        $('.menu').toggle();
        $('.menu li a').on('click', function(){
            $('.menu').hide();
            $("#header__button").toggleClass("hamburger--open");
        })
    });
}

function login_modal()
{
$('#btn_login').click(function(){
  	$('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur');
	return false;
})

$('.btn-close').click(function(){
  	$('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur');
	  $('.all-register').show(); 
       $('.all-register.iforget').hide(); 
	    $('.head-toggle').text('Вход');
	
	return false;
})

 $('.z_recover').on('click', function(){
       $('.all-register').hide(); 
       $('.all-register.iforget').show(); 
        $('.head-toggle').text('Напомнить пароль');
    });
	
}


function init_exixts() {
$('#r_btn_register1, #r_btn_register2, #r_btn_register3').click(function() {
 $('.you-exist').fadeIn().delay(3000).fadeOut(); 
 return false;
});
}



$(document).ready (function() {

init_tabs();
Full_Page();
Init_Accordion();
Init_Mobile();
login_modal();
init_exixts();
})
 


