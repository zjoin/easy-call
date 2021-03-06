$(document).ready (function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3page', '4page', '5page', 'lastPage'],
        menu: '.menu'
    });
    
    
 
 $(document).ready(function() { 

	(function ($) { 
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
	})(jQuery);

});   
    
    
    
    
    
    $(function(){
  
  // find items with class accordion
  var accordion = $('.item.accordion');
  
  // initialize any accordion
  accordion.each(function(){
    
    var accTrigger = $(this).children('h2');
    var accContent = $(this).html();
    
    // append arrow (maybe done by CSS at some point)
    accTrigger.append('<i class="fa fa-angle-down"></i>');
    
    accTrigger.siblings().wrapAll('<div class="accContent"></div>');
    
    // pull the trigger
    accTrigger.click(function(){
      
      var element = $(this);
      
      // open or close accordion
      if ( element.parent('.accordion').hasClass('open') == true ){
        element.removeClass('active');
        element.next('.accContent').slideUp(250);
        element.parent('.accordion').removeClass('open');
        element.find('i').addClass('fa-angle-down');
        element.find('i').removeClass('fa-angle-up');
      } else {
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
  
});
});
