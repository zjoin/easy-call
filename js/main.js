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
 

  var toRight = $('.to-right');  
  var toCenter = $('.to-center');  
  var toLeft = $('.to-left');
    
toRight.on('click', function(){
    $('.widget').removeClass('go-left').toggleClass('go-right');
 }); 
    
toLeft.on('click', function(){
    $('.widget').removeClass('go-right').toggleClass('go-left');
 });
    
toCenter.on('click', function(){
    $('.widget').removeClass('go-right').removeClass('go-left');
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





(function() {

    var Clicktex = {

        Common: {

            Res: {

                removeClass: function (obj, cls) {

                    var classes = obj.className.split(' ');

                    for( i=0; i < classes.length; i++) {

                        if (classes[i] == cls) {

                            classes.splice(i, 1);

                            i--;

                        }
                    }

                    obj.className = classes.join(' ');

                },

                commentSlider: function(sliderOffset) {

                    var slider = document.getElementsByClassName('slider')[0].children[0];

                    Clicktex.Common.Globals.sliderTimer = setInterval(function() {

                        slider.style.left = '-' + sliderOffset + 'px';
                        slider.className = 'anima';
                        var floatingSlide = $('.slider > ul > li:first-child');
                        floatingSlide.animate({opacity: 0});

                        setTimeout(function() {

                            floatingSlide.css({opacity: 1});
                            $(floatingSlide).remove();
                            slider.className = '';
                            slider.style.left = '0';
                            $(slider).append($(floatingSlide));

                        }, 4500);

                    }, 11000);

                },

                regFormValidateEmail: function(obj) {

                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(obj);

                },

                regFormValidateName: function(obj) {

                    return obj.match(/^[a-zA-Z]+$/);

                },

                regFormValidatePhone: function(obj) {

                    phoneRegex = /(\+?(?:(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)|\((?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\))[0-9. -]{4,14})(?:\b|x\d+)/;
                    return obj.match(phoneRegex);

                },

                iphoneBackToWebpage: function() {

                    document.getElementsByClassName('end-call')[0].className += ' pushed';
                    document.getElementsByClassName('calling-signature')[0].innerHTML = 'конец вызова';
                    setTimeout(function() {
                        document.getElementsByClassName('hbeat')[0].style.opacity = 1;
                        document.getElementsByClassName('calling')[0].style.opacity = 0;
                        setTimeout(function() {
                            document.getElementsByClassName('calling')[0].style.display = 'none';
                            document.getElementsByClassName('end-call')[0].className = 'end-call';
                            document.getElementsByClassName('calling-signature')[0].innerHTML = 'звоню...';
                        }, 100);
                        document.getElementsByClassName('ctx-menu')[0].style.bottom = '-70px';
                        var getCall = document.getElementsByClassName('get-call')[0];
                        getCall.parentNode.removeChild(getCall);
                    }, 800);

                },

                iphoneAction: function() {

                    var urlSubmit = Clicktex.Common.Elements.smartPhoneFormSubmit(),
                        urlInput = Clicktex.Common.Elements.smartPhoneFormURLInput(),
                        urlRender = Clicktex.Common.Elements.smartPhoneURLInput(),
                        headerRender = Clicktex.Common.Elements.smartPhoneYourSite(),
                        windowRender = Clicktex.Common.Elements.smartPhoneWindow(),
                        infoScroller = Clicktex.Common.Elements.smartPhoneInfoScroll(),
                        staticBtn = document.getElementsByClassName('static-btn')[0];

                    if ( urlInput.value ) {

                        var offerSite = document.createElement('img'),
                            offerSiteUrl,
                            offerSiteUrlRender,
                            splittedUrl = urlInput.value.split('/');

                        if ( splittedUrl.length > 1 ) {

                            offerSiteUrl = urlInput.value;
                            offerSiteUrlRender = urlInput.value.split('/')[2];

                        } else if ( splittedUrl.length === 1 ) {

                            offerSiteUrl = 'http://' + urlInput.value;
                            offerSiteUrlRender = urlInput.value;

                        }

                        if ( Clicktex.Common.Globals.iphoneUsed ) {

                            staticBtn.style.display = 'block';

                        }

                        urlInput.readOnly = true;
                        urlInput.blur();

                        Clicktex.Common.Globals.smartPhoneLoad = true;

                        document.getElementsByClassName('scroll-box')[0].children[1].style.display = 'none';
                        document.getElementsByClassName('scroll-box')[0].children[2].style.display = 'none';
                        document.getElementsByClassName('scroll-box')[0].children[3].style.display = 'none';
                        document.getElementsByClassName('scroll-box')[0].children[0].innerHTML = 'Загрузка...';


                        if ( document.getElementsByClassName('arrow-second')[0].style.opacity === '1' ) {

                            document.getElementsByClassName('arrow-second')[0].style.opacity = 0;
                            setTimeout(function() {
                                document.getElementsByClassName('arrow-second')[0].style.bottom = '188px';
                            }, 100);
                        }

                        staticBtn.className = 'static-btn rotateX';

                        headerRender.style.display = 'none';

                        if ( document.getElementsByTagName('img').length > 0 ) {

                            windowRender.innerHTML = '';

                        }

                        //document.getElementsByClassName('fa-spinner')[0].className = 'fa fa-spinner';
                        document.getElementsByClassName('hbeat')[0].style.opacity = 0;
                        document.getElementsByClassName('calling')[0].style.opacity = 0;
                        document.getElementsByClassName('calling')[0].style.display = 'none';

                        document.getElementsByClassName('url-submit')[0].className = 'url-submit rotate';
                        document.getElementsByClassName('arrow-first')[0].style.opacity = 0;

                        setTimeout(function() {
                            document.getElementsByClassName('arrow-first')[0].style.top = '553px';
                        }, 100);

                        $.get('http://5.9.18.70:3000/api?url=' + offerSiteUrl, {}, function(res) {

                            if ( res.imgUrl === '404' ) {

                                Clicktex.Common.Globals.iphoneUsed = true;
                                document.getElementsByClassName('url-submit')[0].className = 'url-submit';
                                document.getElementsByClassName('scroll-box')[0].children[0].innerHTML = 'Упс... Некорректный URL';
                                document.getElementsByClassName('scroll-box')[0].children[0].style.color = '#ff0000';
                                setTimeout(function() {

                                    document.getElementsByClassName('scroll-box')[0].children[0].style.color = '#000000';
                                    document.getElementsByClassName('scroll-box')[0].children[1].style.display = 'block';
                                    document.getElementsByClassName('scroll-box')[0].children[2].style.display = 'block';
                                    document.getElementsByClassName('scroll-box')[0].children[3].style.display = 'block';
                                    document.getElementsByClassName('scroll-box')[0].children[0].innerHTML = 'Примерить виджет';
                                    Clicktex.Common.Res.iphoneSourceState();
                                }, 2000);

                            } else {

                                urlInput.readOnly = false;

                                Clicktex.Common.Globals.smartPhoneLoad = false;

                                document.getElementsByClassName('hbeat')[0].style.display = 'block';
                                document.getElementsByClassName('arrow-second')[0].style.opacity = 1;
                                document.getElementsByClassName('arrow-second')[0].style.bottom = '188px';

                                Clicktex.Common.Globals.iphoneUsed = true;
                                infoScroller.style.top = '-453px';

                                setTimeout(function() {

                                    document.getElementsByClassName('scroll-box')[0].children[1].style.display = 'block';
                                    document.getElementsByClassName('scroll-box')[0].children[2].style.display = 'block';
                                    document.getElementsByClassName('scroll-box')[0].children[3].style.display = 'block';
                                    document.getElementsByClassName('scroll-box')[0].children[0].innerHTML = 'Примерить виджет';

                                }, 500);

                                document.getElementsByClassName('url-submit')[0].className = 'url-submit';

                                staticBtn.style.display = 'none';
                                staticBtn.className = 'static-btn pulseBtn';
                                document.getElementsByClassName('hbeat')[0].style.opacity = 1;

                                offerSite.src = res.imgUrl;
                                windowRender.appendChild(offerSite);

                                var ctxButton = document.getElementsByClassName('hbeat')[0];

                                ctxButton.addEventListener('click', function(e) {

                                    e.preventDefault();

                                    if ( document.getElementsByClassName('arrow-second')[0].style.opacity === '1' ) {

                                        document.getElementsByClassName('arrow-second')[0].style.opacity = 0;
                                        setTimeout(function() {
                                            document.getElementsByClassName('arrow-second')[0].style.bottom = '553px';
                                        }, 100);
                                    }

                                    if ( document.getElementsByClassName('ctx-menu')[0] ) {

                                        c = document.getElementsByClassName('ctx-menu')[0];
                                        c.parentNode.removeChild(c);

                                    }

                                    if ( document.getElementsByClassName('blur')[0] ) {

                                        c = document.getElementsByClassName('blur')[0];
                                        c.parentNode.removeChild(c);

                                    }

                                    var ctxMenu = document.createElement('div'),
                                        getCall = document.createElement('div'),
                                        overlayScreen = document.createElement('div');

                                    ctxMenu.className = 'ctx-menu';
                                    ctxMenu.innerHTML = '<div class="menu-item dept-sales">Бесплатная консультация</div><div class="menu-item dept-office">Поддержка клиентов</div>';

                                    getCall.className = 'get-call';
                                    getCall.innerHTML = '<div class="call-number">8 (800) 000-00-00</div><div class="call-cancel">Отменить</div><div class="call-push">Позвонить</div>';

                                    overlayScreen.className = 'blur';

                                    windowRender.appendChild(ctxMenu);
                                    windowRender.insertBefore(overlayScreen, ctxMenu);

                                    setTimeout(function() {
                                        ctxMenu.style.bottom = '0';
                                        overlayScreen.style.opacity = '1';
                                    },100);

                                    overlayScreen.addEventListener('click', function(e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        ctxMenu.style.bottom = '-70px';
                                        windowRender.removeChild(overlayScreen);

                                        if ( document.getElementsByClassName('get-call')[0] ) {

                                            c = document.getElementsByClassName('get-call')[0];
                                            c.parentNode.removeChild(c);

                                        }

                                        ctxButton.style.opacity = 1;

                                    }, false);

                                    ctxMenu.addEventListener('click', function(e) {

                                        if ( document.getElementsByClassName('get-call')[0] ) {

                                            return false;

                                        }

                                        windowRender.appendChild(getCall);
                                        ctxMenu.style.bottom = '-70px';
                                        setTimeout(function() {
                                            getCall.style.opacity = 1;
                                            ctxButton.style.opacity = 0;

                                            setTimeout(function(){

                                                document.getElementsByClassName('end-call')[0].className += ' rotate-iphone';

                                            }, 200);

                                        }, 100);

                                        var callScreenBtn = document.getElementsByClassName('call-push')[0],
                                            callScreenCancel = document.getElementsByClassName('call-cancel')[0],
                                            callScreenDiv = document.getElementsByClassName('calling')[0];

                                        callScreenBtn.addEventListener('click', function(e) {

                                            e.preventDefault();
                                            windowRender.removeChild(overlayScreen);
                                            callScreenDiv.style.display = 'block';
                                            setTimeout(function() {
                                                callScreenDiv.style.opacity = 1;
                                                infoScroller.style.top = '-906px';
                                            }, 100);
                                            var endCall = document.getElementsByClassName('end-call')[0];
                                            endCall.addEventListener('click', Clicktex.Common.Res.iphoneBackToWebpage, false);

                                        }, false);

                                        callScreenCancel.addEventListener('click', function(e) {

                                            e.preventDefault();
                                            windowRender.removeChild(overlayScreen);
                                            ctxButton.style.opacity = 1;
                                            menuCall = document.getElementsByClassName('get-call')[0];
                                            menuCall.style.opacity = 0;
                                            setTimeout(function() {
                                                menuCall.parentNode.removeChild(menuCall);
                                            }, 100);

                                        }, false);

                                    }, false);

                                }, false);

                            }

                        });

                    }

                },

                iphoneSourceState: function() {

                    var headerRender = Clicktex.Common.Elements.smartPhoneYourSite(),
                        windowRender = Clicktex.Common.Elements.smartPhoneWindow(),
                        infoScroller = Clicktex.Common.Elements.smartPhoneInfoScroll(),
                        urlInput = Clicktex.Common.Elements.smartPhoneFormURLInput(),
                        urlRender = Clicktex.Common.Elements.smartPhoneURLInput(),
                        ctxButton = document.getElementsByClassName('hbeat')[0],
                        staticBtn = document.getElementsByClassName('static-btn')[0],
                        overlayScreen = document.getElementsByClassName('blur')[0];

                    if ( Clicktex.Common.Globals.iphoneUsed ) {

                        if ( overlayScreen ) {
                            windowRender.removeChild(overlayScreen);
                        }

                        urlInput.readOnly = false;

                        document.getElementById('offer-site-input').parentNode.children[0].style.display = 'block';

                        ctxButton.style.opacity = '0';
                        urlInput.value = '';

                        windowRender.className += ' scale-0';

                        if ( document.getElementsByClassName('calling')[0].style.display === 'block' ) {

                            document.getElementsByClassName('calling')[0].className += ' scale-0';

                            setTimeout(function() {

                                document.getElementsByClassName('calling')[0].style.opacity = 0;
                                document.getElementsByClassName('calling')[0].style.display = 'none';
                                document.getElementsByClassName('calling')[0].className = 'calling';

                            }, 400)

                        }

                        setTimeout(function() {

                            windowRender.innerHTML = '';
                            ctxButton.style.display = 'none';
                            staticBtn.style.display = 'block';
                            staticBtn.className = 'static-btn pulseBtn';
                            headerRender.style.display = 'block';
                            Clicktex.Common.Res.removeClass(windowRender, 'scale-0');
                            infoScroller.style.top = '0';
                            Clicktex.Common.Globals.iphoneUsed = false;
                            Clicktex.Common.Globals.smartPhoneLoad = false;
                            document.getElementsByClassName('arrow-first')[0].style.top = '168px';
                            document.getElementsByClassName('arrow-first')[0].style.opacity = '1';

                        }, 400);

                    } else {

                        var urlInput = Clicktex.Common.Elements.smartPhoneFormURLInput();
                        urlInput.className += 'quick-pulse';
                        setTimeout(function() {

                            urlInput.className = '';
                            urlInput.focus();

                        }, 500);

                    }

                }

            },

            Globals: {

                barOpen: false,
                iphoneUsed: false,
                smartPhoneLoad: false,
                mailValid: false,
                sliderOffset: 960,
                sliderTimer: ''

            },

            Elements: {

                enterCtxAdminBtn: function() {

                    return document.getElementById('admin-enter-btn');

                },

                enterCtxAdmin: function() {

                    return document.getElementsByClassName('enter-form')[0];

                },

                enterCtxAdminName: function() {

                    return document.getElementsByClassName('enter-form')[0].children[0].children[0];

                },

                enterCtxAdminPass: function() {

                    return document.getElementsByClassName('enter-form')[0].children[0].children[1];

                },

                startPresentBtn: function() {

                    return document.getElementById('start-present');

                },

                navBar: function() {

                    return document.getElementsByTagName('nav')[0];

                },

                barBtn: function() {

                    return document.getElementsByClassName('menu-icon')[0];

                },

                adminEnterBtn: function() {

                    return document.getElementsByClassName('native')[0];

                },

                regOfferCheck: function() {

                    return document.getElementById('want-offer');

                },

                regOfferName: function() {

                    return document.getElementById('offer-name');

                },

                regOfferPhone: function() {

                    return document.getElementById('offer-phone');

                },

                regOfferBtn: function() {

                    return document.getElementById('reg-offer');

                },

                smartPhoneURLInput: function() {

                    return document.getElementsByClassName('url-input')[0];

                },

                smartPhoneWindow: function() {

                    return document.getElementsByClassName('window')[0];

                },

                smartPhoneFormURLInput: function() {

                    return document.getElementById('offer-site-input');

                },

                smartPhoneFormSubmit: function() {

                    return document.getElementsByClassName('url-submit')[0];

                },

                smartPhoneYourSite: function() {

                    return document.getElementsByClassName('your-site')[0];

                },

                smartPhoneInfoScroll: function() {

                    return document.getElementsByClassName('vert-scroll-block')[0];

                },

                smartPhoneHomeButton: function() {

                    return document.getElementsByClassName('home-btn')[0];

                },

                smartPhoneStaticBtn: function() {

                    return document.getElementsByClassName('static-btn')[0];

                }


            },

            MobileCheck: {

                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },

                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry|BB10|PlayBook/i);
                },

                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },

                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },

                any: function() {
                    return ( this.Android() || this.BlackBerry() || this.iOS() || this.Windows());
                }

            }

        },

        Bindings: {

            global: function () {

                document.body.addEventListener('click', function (e) {

                    e.stopPropagation();

                document.getElementsByClassName('reg-form')[0].addEventListener('click', function(e) {

                e.preventDefault();

                $('html, body').animate({scrollTop: document.body.offsetHeight});

                }, false);

                        if (Clicktex.Common.Elements.enterCtxAdmin().className === 'enter-form') {

                            Clicktex.Common.Elements.enterCtxAdmin().style.top = '-260px';
                            Clicktex.Common.Elements.enterCtxAdmin().style.opacity = 0;
                            setTimeout(function () {

                                Clicktex.Common.Elements.enterCtxAdmin().className += ' hidden';
                                Clicktex.Common.Elements.enterCtxAdminBtn().className = '';

                            }, 300)

                        }

                        if ( Clicktex.Common.Globals.barOpen === true && Clicktex.Common.MobileCheck.any() ) {

                            Clicktex.Common.Elements.navBar().className = '';
                            Clicktex.Common.Globals.barOpen = false;

                        }

                }, false);



                var floated = false;

                window.addEventListener('resize', function(e) {

                    if ( document.getElementsByClassName('slider')[0]) {

                        if ( window.innerWidth < 1200 ) {

                            clearInterval(Clicktex.Common.Globals.sliderTimer);
                            Clicktex.Common.Globals.sliderOffset = 632;
                            Clicktex.Common.Res.commentSlider(Clicktex.Common.Globals.sliderOffset)

                        } else {

                            clearInterval(Clicktex.Common.Globals.sliderTimer);
                            Clicktex.Common.Globals.sliderOffset = 960;
                            Clicktex.Common.Res.commentSlider(Clicktex.Common.Globals.sliderOffset)

                        }

                    }



                }, false);

                window.addEventListener('scroll', function(e) {


                    if ( Clicktex.Common.MobileCheck.any() ) {

                        e.preventDefault();
                        e.stopPropagation();

                    }

                    if ( document.getElementsByClassName('mainpage-slider-box')[0] ) {

                        if ( !Clicktex.Common.MobileCheck.any() ) {

                            if ( window.scrollY >= ( document.body.offsetHeight - 1700)) {

                                $('.slider-block > ul').addClass('anima');
                                $('.slider-block > ul').css({left: 0});

                            } else {

                                $('.slider-block > ul').css({left: Clicktex.Common.Globals.sliderOffset});

                            }

                        }

                    }

                    var parallax = document.querySelectorAll(".parallax"),
                        speed = 0.5;

                    if ( parallax ) {

                        [].slice.call(parallax).forEach(function(el,i){

                            var windowYOffset = window.pageYOffset,
                                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

                            el.style.backgroundPosition = elBackgrounPos;

                        });

                    }

                    if ( Clicktex.Common.Elements.smartPhoneFormURLInput() ) {

                        var fullWindowHeight = window.innerHeight,
                            offsetTopSmartBox = document.getElementsByClassName('smartphone')[0].parentNode.offsetTop,
                            customOffsetTop = 400, //144,
                            firstArrowMoment = fullWindowHeight + offsetTopSmartBox - customOffsetTop,
                            firstArrow = document.getElementsByClassName('arrow-first')[0];


                        if ( window.scrollY >= firstArrowMoment && !Clicktex.Common.Globals.iphoneUsed ) {

                            if ( !Clicktex.Common.Globals.smartPhoneLoad ) {

                                firstArrow.style.top = '168px';
                                firstArrow.style.opacity = '1';

                            }

                        } else if ( window.scrollY < firstArrowMoment &&  firstArrow.style.top === '168px' ) {

                            firstArrow.style.top = '553px';
                            firstArrow.style.opacity = '0';

                        }

                    }

                }, false);

                if ( Clicktex.Common.Elements.startPresentBtn() ) {

                    Clicktex.Common.Elements.startPresentBtn().addEventListener('click', function(e) {

                        e.preventDefault();
                        var targetPosition = document.getElementsByClassName('mainpage')[0].offsetHeight - 101 + 'px';


                        // change JQuery to native after release!!!!!!!!!!!!!!!
                        $('html, body').animate({scrollTop: targetPosition});

                        setTimeout(function() {

                            var urlInput = Clicktex.Common.Elements.smartPhoneFormURLInput();
                            urlInput.className += 'quick-pulse';
                            setTimeout(function() {

                                urlInput.className = '';

                            }, 1100);

                        }, 900);

                    }, false);

                }

            },

            enterForm: function () {

                var enterBtn = Clicktex.Common.Elements.enterCtxAdminBtn(),
                    enterForm = Clicktex.Common.Elements.enterCtxAdmin(),
                    enterChildName = Clicktex.Common.Elements.enterCtxAdminName(),
                    enterChildPass = Clicktex.Common.Elements.enterCtxAdminPass();

                enterBtn.addEventListener('click', function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    $.get('http://www.clicktex.ru/admin/is_auth', function(res) {

                        if ( res == 1 ) {

                            window.location = 'http://www.clicktex.ru/admin';

                        } else if ( res == 0 ) {

                            if (enterForm.className.match(/hidden/i)) {

                                enterBtn.className += ' active';
                                enterForm.className = 'enter-form';
                                enterForm.style.top = '45px';
                                enterForm.style.opacity = 1;

                                enterChildName.addEventListener('click', function (e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }, false);

                                enterChildPass.addEventListener('click', function (e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }, false);

                            } else {

                                enterForm.style.top = '-260px';
                                enterForm.style.opacity = 0;
                                setTimeout(function () {

                                    enterBtn.className = '';
                                    enterForm.className += ' hidden';

                                    enterChildName.removeEventListener('click', function (e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }, false);

                                    enterChildPass.removeEventListener('click', function (e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }, false);

                                }, 300)

                            }

                        }

                    });

                }, false);


            },

            floatingFormOfferCheck: function() {

                var checkBox = Clicktex.Common.Elements.regOfferCheck();

                if ( checkBox !== null ) {

                    var regOfferBtn = Clicktex.Common.Elements.regOfferBtn(),
                        form = regOfferBtn.parentNode;

                    var newOfferName = document.createElement('input'),
                        newOfferPhone = document.createElement('input');

                    newOfferName.type = 'text';
                    newOfferName.id = 'offer-name';
                    newOfferName.placeholder = 'Ваше имя';
                    newOfferName.name = 'name';

                    newOfferPhone.type = 'text';
                    newOfferPhone.id = 'offer-phone';
                    newOfferPhone.placeholder = 'Ваш телефон';
                    newOfferPhone.name = 'phone';

                    //checkBox.addEventListener('click', function(e) {

                    //    if ( checkBox.checked === false ) {

                            var offerName = Clicktex.Common.Elements.regOfferName(),
                                offerPhone = Clicktex.Common.Elements.regOfferPhone();

                    //        offerName.parentNode.removeChild(offerName);
                    //        offerPhone.parentNode.removeChild(offerPhone);

                    //    }


                    //    if ( checkBox.checked === true ) {

                    //        form.insertBefore(newOfferName, regOfferBtn);
                    //        form.insertBefore(newOfferPhone, regOfferBtn);

                            newOfferName.style.border = '1px solid #cccccc';
                            newOfferPhone.style.border = '1px solid #cccccc';

                            newOfferName.addEventListener('keypress', function(e) {

                                if ( e.keyCode === 13 ) {

                                    return false;

                                }

                            }, false);

                            newOfferName.addEventListener('keyup', function(e) {

                                var self = this;

                                if ( e.keyCode === 13 ) {

                                    return false;

                                }

                                if ( !Clicktex.Common.Res.regFormValidateName(this.value) ) {

                                    self.style.border = '1px #ff0000 solid';

                                } else {

                                    self.style.border = '1px #1ad1fd solid';

                                }

                            }, false);

                            newOfferName.addEventListener('blur', function(e) {

                                this.style.border = '1px #cccccc solid';

                            }, false);

                            newOfferName.addEventListener('focus', function(e) {

                                var self = this;

                                if ( newOfferName.value.length === 0 ) {

                                    newOfferName.style.border = '1px #1ad1fd solid';

                                } else {

                                    if ( !Clicktex.Common.Res.regFormValidateName(this.value) ) {

                                        self.style.border = '1px #ff0000 solid';

                                    } else {

                                        self.style.border = '1px #1ad1fd solid';

                                    }

                                }

                            }, false);

                            newOfferPhone.addEventListener('keypress', function(e) {

                                if ( e.keyCode === 13 ) {

                                    return false;

                                }

                            }, false);

                            newOfferPhone.addEventListener('keyup', function(e) {

                                var self = this;

                                if ( e.keyCode === 13 ) {

                                    return false;

                                }

                                if ( !Clicktex.Common.Res.regFormValidatePhone(this.value) ) {

                                    self.style.border = '1px #ff0000 solid';

                                } else {

                                    self.style.border = '1px #1ad1fd solid';

                                }

                            }, false);

                            newOfferPhone.addEventListener('blur', function(e) {

                                this.style.border = '1px #cccccc solid';

                            }, false);

                            newOfferPhone.addEventListener('focus', function(e) {

                                var self = this;

                                if ( newOfferPhone.value.length === 0 ) {

                                    newOfferPhone.style.border = '1px #1ad1fd solid';

                                } else {

                                    if (!Clicktex.Common.Res.regFormValidatePhone(this.value)) {

                                        self.style.border = '1px #ff0000 solid';

                                    } else {

                                        self.style.border = '1px #1ad1fd solid';

                                    }

                                }

                            }, false);

                        //}

                    //})

                }

            },

            smartSimulator: function() {

                if ( Clicktex.Common.Elements.smartPhoneFormSubmit() ) {

                    var exampleLinks = document.getElementsByClassName('example-link');

                    exampleLinks[0].addEventListener('click', function(e) {

                        e.preventDefault();

                        if ( Clicktex.Common.Globals.iphoneUsed || Clicktex.Common.Globals.smartPhoneLoad ) {

                            return false;

                        }

                        var labelHTTP = document.getElementById('offer-site-input').parentNode.children[0];
                        labelHTTP.style.display = 'none';
                        document.getElementById('offer-site-input').value = e.target.innerHTML;
                        Clicktex.Common.Res.iphoneAction();

                    }, false);

                    exampleLinks[1].addEventListener('click', function(e) {

                        e.preventDefault();

                        if ( Clicktex.Common.Globals.iphoneUsed || Clicktex.Common.Globals.smartPhoneLoad ) {

                            return false;

                        }

                        var labelHTTP = document.getElementById('offer-site-input').parentNode.children[0];
                        labelHTTP.style.display = 'none';
                        document.getElementById('offer-site-input').value = e.target.innerHTML;
                        Clicktex.Common.Res.iphoneAction();

                    }, false);

                    exampleLinks[2].addEventListener('click', function(e) {

                        e.preventDefault();

                        if ( Clicktex.Common.Globals.iphoneUsed || Clicktex.Common.Globals.smartPhoneLoad ) {

                            return false;

                        }

                        var labelHTTP = document.getElementById('offer-site-input').parentNode.children[0];
                        labelHTTP.style.display = 'none';
                        document.getElementById('offer-site-input').value = e.target.innerHTML;
                        Clicktex.Common.Res.iphoneAction();

                    }, false);

                    document.getElementById('offer-site-input').addEventListener('click', function(e) {

                        document.getElementsByClassName('arrow-first')[0].style.top = '553px';
                        document.getElementsByClassName('arrow-first')[0].style.opacity = 0;

                    }, false);

                    document.getElementById('offer-site-input').addEventListener('keypress', function(e) {

                        document.getElementsByClassName('arrow-first')[0].style.top = '553px';
                        document.getElementsByClassName('arrow-first')[0].style.opacity = 0;

                    }, false);

                    document.getElementById('offer-site-input').addEventListener('focus', function(e) {

                        var labelHTTP = this.parentNode.children[0];
                        labelHTTP.style.display = 'none';


                    }, false);

                    document.getElementById('offer-site-input').addEventListener('blur', function(e) {

                        var self = this;
                        if ( self.value.length === 0 ) {

                            var labelHTTP = this.parentNode.children[0];
                            labelHTTP.style.display = 'block';
                            document.getElementsByClassName('arrow-first')[0].style.top = '168px';
                            document.getElementsByClassName('arrow-first')[0].style.opacity = 1;

                        }

                    }, false);

                    Clicktex.Common.Elements.smartPhoneStaticBtn().addEventListener('click', function(e) {

                        if ( !Clicktex.Common.Globals.iphoneUsed ) {

                            e.preventDefault();
                            var urlInput = Clicktex.Common.Elements.smartPhoneFormURLInput();
                            urlInput.className += 'quick-pulse';
                            setTimeout(function() {

                                urlInput.className = '';
                                urlInput.focus();

                            }, 500);

                        }

                    });

                    Clicktex.Common.Elements.smartPhoneFormURLInput().addEventListener('keypress', function(e) {

                        if (e.keyCode === 13) {

                            Clicktex.Common.Res.iphoneAction();

                        }

                    }, false);

                    Clicktex.Common.Elements.smartPhoneFormSubmit().addEventListener('click', function(e) {

                        e.preventDefault();

                        if ( Clicktex.Common.Elements.smartPhoneFormURLInput().value.length === 0 ) {

                            e.preventDefault();
                            var urlInput = Clicktex.Common.Elements.smartPhoneFormURLInput();
                            urlInput.className += 'quick-pulse';
                            setTimeout(function() {

                                urlInput.className = '';
                                urlInput.focus();

                            }, 500);

                            return false;

                        }

                        Clicktex.Common.Res.iphoneAction();

                    }, false);

                    Clicktex.Common.Elements.smartPhoneHomeButton().addEventListener('click', function(e) {

                        e.preventDefault();

                        if ( document.getElementsByClassName('arrow-second')[0].style.opacity === '1' ) {

                            document.getElementsByClassName('arrow-second')[0].style.opacity = 0;
                            setTimeout(function() {
                                document.getElementsByClassName('arrow-second')[0].style.bottom = '553px';
                            }, 100);
                        }

                        Clicktex.Common.Res.iphoneSourceState();

                    });

                }

            }

        },

        BindingsMobile: {

            barsTouch: function() {

                Clicktex.Common.Elements.adminEnterBtn().className = '';

                var barBtn = Clicktex.Common.Elements.barBtn(),
                    navBar = Clicktex.Common.Elements.navBar(),
                    startY,
                    endY;

                navBar.className = '';

                barBtn.addEventListener('touchstart', function(e) {

                    e.preventDefault();
                    e.stopImmediatePropagation();
                    startY = e.touches[0].pageY;

                }, false);

                barBtn.addEventListener('touchend', function(e) {

                    e.preventDefault();
                    e.stopImmediatePropagation();
                    endY = e.changedTouches[0].pageY;

                    if ( startY == endY ) {

                        if ( Clicktex.Common.Globals.barOpen === false ) {

                            navBar.className += ' opened';
                            Clicktex.Common.Globals.barOpen = true;

                        } else {

                            navBar.className = '';
                            Clicktex.Common.Globals.barOpen = false;

                        }

                    }

                });

            },

            menuSlide: function() {

                var navBar = Clicktex.Common.Elements.navBar(),
                    startY,
                    endY,
                    isNav;

                navBar.className = '';

                navBar.addEventListener('touchstart', function(e) {

                    //e.preventDefault();
                    e.stopImmediatePropagation();

                    startY = e.touches[0].pageY;

                    if (e.target.nodeName === 'NAV' || e.target.parentNode.nodeName === 'NAV') {

                        isNav = true;

                    } else {

                        isNav = false;

                    }

                }, false);

                navBar.addEventListener('touchmove', function(e) {

                    e.preventDefault();
                    e.stopImmediatePropagation();

                }, false);

                navBar.addEventListener('touchend', function(e) {

                    //e.preventDefault();
                    e.stopImmediatePropagation();
                    endY = e.changedTouches[0].pageY;

                    if ( isNav === true ) {

                        if ( Clicktex.Common.Globals.barOpen === false ) {

                            if ( startY < endY ) {

                                navBar.className += ' opened';
                                Clicktex.Common.Globals.barOpen = true;

                            }

                        } else {

                            if ( startY > endY ) {

                                navBar.className = '';
                                Clicktex.Common.Globals.barOpen = false;

                            }

                        }

                    }

                }, false);

            }

        },

        scrollFunc: function(target) {

            var pageName = window.pageName;
            var mainUrl = window.location.href.split('/')[0] + '//' + window.location.href.split('/')[2] + '/';

            if ( pageName === 'product' ) {

                var targetBlock = target.href.split('/')[4];

                if ( targetBlock === 'demo' ) {

                    window.history.replaceState({}, '', mainUrl + pageName + '/' + targetBlock);
                    $('html, body').animate({scrollTop: ( $('#iphone-sim').position().top + document.getElementsByClassName('mainpage')[0].offsetHeight ) - 104});
                    setTimeout(function() {

                        var urlInput = Clicktex.Common.Elements.smartPhoneFormURLInput();
                        urlInput.className += 'quick-pulse';
                        setTimeout(function() {

                            urlInput.className = '';

                        }, 1100);

                    }, 900);

                }

                if ( targetBlock === 'advantages') {

                    window.history.replaceState({}, '', mainUrl + pageName + '/' + targetBlock);
                    $('html, body').animate({scrollTop: ( $('#product-advantages').position().top + document.getElementsByClassName('mainpage')[0].offsetHeight ) - 104});

                }

                if ( targetBlock === 'connect' ) {

                    window.history.replaceState({}, '', mainUrl + pageName + '/' + targetBlock);
                    $('html, body').animate({scrollTop: ($('#product-connect').offset().top - 104)});

                }


            }

            if ( pageName === 'clients' ) {

                var targetBlock = target.href.split('/')[4];

                if ( targetBlock === 'clients') {

                    window.history.replaceState({}, '', mainUrl + pageName + '/' + targetBlock);
                    $('html, body').animate({scrollTop: $('#clients-clients').position().top - 144 + 70})

                }

                if ( targetBlock === 'story' ) {

                    window.history.replaceState({}, '', mainUrl + pageName + '/' + targetBlock);
                    $('html, body').animate({scrollTop: $('#clients-story').position().top - 144})

                }

            }

            if ( pageName === 'jobs') {



            }

        },

        scrollingLinks: function() {

            var self = this;
            var links = document.getElementsByClassName('link');

            for( var i = 0; i < links.length; i++ ) {

                links[i].addEventListener('click', function(e) {

                    if ( this.href.split('/')[3] === window.pageName ) {

                        e.preventDefault();
                        self.scrollFunc(this);

                    }

                });

            }

        },

        init: function() {

            var self = this;

            /*
            document.getElementsByClassName('fixed-connect')[0].children[0].addEventListener('click', function(e) {

                e.preventDefault();
                $('html, body').animate({scrollTop: $('#product-connect').position().top + 450});

            });
            */

            if ( document.getElementsByClassName('smartphone')[0] ) {

                document.getElementsByClassName('adv-button')[0].addEventListener('click', function(e) {

                    e.preventDefault();
                    $('html, body').animate({scrollTop: $('#product-connect').offset().top});

                });

            }

            if ( document.referrer.split('/')[3] !== window.pageName || !document.referrer.split('/')[3] ) {

                var globalPage = window.pageName;

                if ( document.location.href.split('/')[4] ) {

                    var page = document.location.href.split('/')[4];

                    if ( globalPage === 'product' ) {

                        targetPageName = '#' + globalPage + '-' + page;
                        $('html, body').animate({ scrollTop: ($(targetPageName).offset().top - 124)})

                    }

                    if ( globalPage === 'clients' ) {

                        targetPageName = '#' + globalPage + '-' + page;

                        if ( page === 'clients') {

                            $('html, body').animate({ scrollTop: $(targetPageName).position().top - 144 + 70})

                        } else {

                            $('html, body').animate({ scrollTop: $(targetPageName).position().top - 144 })

                        }

                    }

                    if ( globalPage === 'jobs' ) {


                    }

                }

            }

            this.scrollingLinks();
            this.Bindings.smartSimulator();
            this.Bindings.enterForm();
            this.Bindings.global();
            this.Bindings.floatingFormOfferCheck();

            if (document.getElementsByClassName('slider')[0]) {

                if ( window.innerWidth < 1200 ) {

                    Clicktex.Common.Globals.sliderOffset = 632;

                }

                Clicktex.Common.Res.commentSlider(Clicktex.Common.Globals.sliderOffset);

            }

            if ( Clicktex.Common.MobileCheck.any() ) {
                self.BindingsMobile.barsTouch();
                self.BindingsMobile.menuSlide();

            }

        }

    };

    document.addEventListener('DOMContentLoaded', function() {

        window.addEventListener("load", function load(event){
            window.removeEventListener("load", load, false);
            var links = document.querySelectorAll('a'),
                paragraph = document.querySelectorAll('p'),
                header1 = document.querySelectorAll('h1'),
                header2 = document.querySelectorAll('h2'),
                header3 = document.querySelectorAll('h3'),
                header4 = document.querySelectorAll('h4');

            for ( var i = 0; i < links.length - 1; i++ ) {
                links[i].style.opacity = 1;
            }

            if ( document.getElementsByClassName('slogan')[0] ) {

                document.getElementsByClassName('slogan')[0].style.opacity = 1;
                document.getElementById('start-present').style.opacity = 1;

            }

            if ( document.getElementsByClassName('mac-device')[0] ) {

                if ( document.getElementById('client-slide') && Clicktex.Common.MobileCheck.any()) {

                    $('#client-slide').attr('data-center', "left: 0");
                    $('#client-slide').attr('data-bottom', "left: 100%")

                }

                setTimeout(function() {

                    skrollr.init();


                }, 300)

            }


        },false);

        if ( document.getElementById('reg-mail-input') ) {

            document.getElementById('reg-mail-input').addEventListener('keyup', function(e) {

                var self = this;

                if ( !Clicktex.Common.Res.regFormValidateEmail(this.value) ) {

                    self.style.border = "1px #ff0000 solid";
                    Clicktex.Common.Globals.mailValid = false;

                } else {

                    self.style.border = "1px #1ad1fd solid";
                    Clicktex.Common.Globals.mailValid = true;

                }

            }, false);

            document.getElementById('reg-mail-input').addEventListener('keypress', function(e) {

                if ( e.keyCode === 13 ) {

                    return false;

                }

            }, false);

            document.getElementById('reg-mail-input').addEventListener('blur', function(e) {

                this.style.border = '1px #cccccc solid';

            }, false);

            document.getElementById('reg-mail-input').addEventListener('focus', function(e) {

                this.style.border = '1px #1ad1fd solid';

            }, false);

            document.getElementById('offer-name').addEventListener('blur', function(e) {

                this.style.border = '1px #cccccc solid';

            }, false);

            document.getElementById('offer-name').addEventListener('focus', function(e) {

                this.style.border = '1px #1ad1fd solid';

            }, false);

            document.getElementById('offer-phone').addEventListener('blur', function(e) {

                this.style.border = '1px #cccccc solid';

            }, false);

            document.getElementById('offer-phone').addEventListener('focus', function(e) {

                this.style.border = '1px #1ad1fd solid';

            }, false);

            Clicktex.Common.Elements.regOfferBtn().addEventListener('click', function(e) {

                //if ( document.getElementById('want-offer').checked ) {

                    var nameVal = document.getElementById('offer-name').value,
                        phoneVal = document.getElementById('offer-phone').value;

                    if ( !Clicktex.Common.Res.regFormValidateEmail(document.getElementById('reg-mail-input').value) ) {

                        document.getElementById('reg-mail-input').style.border = "1px #ff0000 solid";
                        Clicktex.Common.Globals.mailValid = false;

                    } else {

                        //document.getElementById('reg-mail-input').style.border = "1px #1ad1fd solid";
                        Clicktex.Common.Globals.mailValid = true;

                    }

                    if ( !Clicktex.Common.Res.regFormValidateName(nameVal) ) {

                        document.getElementById('offer-name').style.border = '1px #ff0000 solid';

                    }

                    if ( !Clicktex.Common.Res.regFormValidatePhone(phoneVal) ) {

                        document.getElementById('offer-phone').style.border = '1px #ff0000 solid';

                    }

                    if ( !Clicktex.Common.Globals.mailValid ) {

                        document.getElementById('reg-mail-input').style.border = '1px #ff0000 solid';

                    }

                    if ( !Clicktex.Common.Globals.mailValid || !Clicktex.Common.Res.regFormValidateName(nameVal) || !Clicktex.Common.Res.regFormValidatePhone(phoneVal) ) {

                        e.preventDefault();
                        return false;

                    }

                //}

                /*
                if ( !document.getElementById('want-offer').checked ) {

                    if ( !Clicktex.Common.Globals.mailValid ) {

                        document.getElementById('reg-mail-input').style.border = '1px #ff0000 solid';

                        var blinkme = setInterval(function() {

                            document.getElementById('reg-mail-input').style.border = '1px #cccccc solid';

                            setTimeout(function() {
                                document.getElementById('reg-mail-input').style.border = '1px #ff0000 solid';

                                setTimeout(function() {

                                    document.getElementById('reg-mail-input').style.border = '1px #cccccc solid';

                                    setTimeout(function() {

                                        document.getElementById('reg-mail-input').style.border = '1px #ff0000 solid';

                                    }, 250);

                                }, 250);

                            }, 250);

                        }, 250);

                        setTimeout(function() {

                            clearInterval(blinkme);

                        }, 1500);
                        e.preventDefault();
                        return false;

                    }

                }
                */

            }, false);

        }

        if ( Clicktex.Common.MobileCheck.any() ) {

            var bgVideo = document.getElementById('bgvid'),
                bgImage = document.createElement('div'),
                mainPage = document.getElementsByClassName('mainpage')[0],
                sloganEl = document.getElementsByClassName('slogan')[0];

            if ( bgVideo ) {

                bgVideo.parentNode.removeChild(bgVideo);
                bgImage.id = 'bgstatic';
                mainPage.insertBefore(bgImage, sloganEl);

            }

            var hoverElems = document.getElementsByClassName('native');

            for ( var i = 0; i < hoverElems.length; i++ ) {

                Clicktex.Common.Res.removeClass(hoverElems[i], 'native');

            }

        }

        var macDisplay = document.getElementsByClassName('mac-device')[0];


        Clicktex.init();

    }, false);

})();




















