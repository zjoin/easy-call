 // Cookies
function CMV_createCookie(name, value, days) {
	
            if (days) {
                var date = new Date();	
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";

		    document.cookie = name + "=" + value + expires + "; path=/";
        }

function CMV_readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

function Ya_Event(EventName)
{
	var ya_Counter="";
		var keys =Object.keys( window );
			for( var i = 0; i < keys.length; ++i ) 
			{
				value = window[ keys[ i ] ];
				if (keys[ i ].indexOf("yaCounter") > -1)
				{
					ya_Counter=keys[ i ];
					if (ya_Counter.length)
					{
					try{
						ya_Counter=ya_Counter+".reachGoal('"+EventName+"');"
						eval(ya_Counter);
						}
						catch(e)
						{
						
						}
					}
				}
			}
}





$(document).ready(function() {
	$('#z_login').click(function(){
		var login=$('#l_email').val();
		var psw=$('#l_password').val();
		
		if (login!==""&&psw!=="")
		{
			$.post("/login",{email:login,password:psw},function(data)
			{
		
			$('#l_email').val("");
			$('#l_password').val("");
				if (data=="1")
				{
					$('.b_hdr__login_form').fadeOut(300);
					window.location.replace("/start");
				}
				else
				{
				$('#z_Incorrect_Login_Data').show();
				
				}
			})
		
		
		}
		
	})


	$('#z_recover').click(function(){
	
	var recover_email=$('#recover_email').val();
		if (recover_email!="")
		{
		$.post("/ChangePasswordRequest",{email:recover_email},function(data)
			{
			if (data=="1")
				{
					$('#z_Recovery_Success').show();
				}
				else
				{
					$('#z_Recovery_Error').show();
				
				}
			})
		
		
		}
	
	})


	$('.close-modal').click(function(){
	$('.enter').hide();
	})
	
	$('#r_btn_register1').click(function(){
	
		
	
					var r_email=$('#r_email1').val();
					
					if (r_email!=="")
						{
						var utm_source=CMV_readCookie('CMV_utm_source');
						var utm_medium=CMV_readCookie('CMV_utm_medium');
						$.post("/registration_email",{email:r_email,utm_source:utm_source,utm_medium:utm_medium},function(data)
							{
	
								if (data=="1")
								{
									Ya_Event('Registration_Success');
									window.location.href="/start";
								}
								else
								{
									Ya_Event('Registration_Fail');
								}
							})
					
						}
						else
						{
							Ya_Event('Registration_Fail');
						}
			
	})
	
	$('#r_btn_register2').click(function(){
	
		
	
					var r_email=$('#r_email2').val();
					
					if (r_email!=="")
						{
						var utm_source=CMV_readCookie('CMV_utm_source');
						var utm_medium=CMV_readCookie('CMV_utm_medium');
						$.post("/registration_email",{email:r_email,utm_source:utm_source,utm_medium:utm_medium},function(data)
							{
	
								if (data=="1")
								{
									Ya_Event('Registration_Success');
									window.location.href="/start";
								}
								else
								{
									Ya_Event('Registration_Fail');
								}
							})
					
						}
						else
						{
							Ya_Event('Registration_Fail');
						}
			
	})
	
	$('#r_btn_register3').click(function(){
	
		
	
					var r_email=$('#r_email1').val();
					
					if (r_email!=="")
						{
						var utm_source=CMV_readCookie('CMV_utm_source');
						var utm_medium=CMV_readCookie('CMV_utm_medium');
						$.post("/registration_email",{email:r_email,utm_source:utm_source,utm_medium:utm_medium},function(data)
							{
	
								if (data=="1")
								{
									Ya_Event('Registration_Success');
									window.location.href="/start";
								}
								else
								{
									Ya_Event('Registration_Fail');
								}
							})
					
						}
						else
						{
							Ya_Event('Registration_Fail');
						}
			
	})
	
	
	
	location.queryString = {};
			location.search.substr(1).split("&").forEach(function (pair) {
				if (pair === "") return;
				var parts = pair.split("=");
				location.queryString[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, " "));
			});
			
			if (CMV_readCookie('CMV_utm_source')==null)
			{
				if (location.queryString.utm_source!=undefined)
				{
					CMV_createCookie('CMV_utm_source',location.queryString.utm_source,1000)
				}
			}
			
			if (CMV_readCookie('CMV_utm_medium')==null)
			{
				if (location.queryString.utm_medium!=undefined)
				{
					CMV_createCookie('CMV_utm_medium',location.queryString.utm_medium,1000)
				}
			}
			
			button_animation();
			
			
})

var Stop_Anim=false;
	
function button_animation()
{

	$('.b-colors span').click(function(){
	var color1=$(this).css("background-color");
	$('.easycall_phone__cir4').css("background-color",color1);
	})

	
	var left1=100;
	$('.to-left').click(function(){
		$('.easycall_phone').css('left','15%');
		left1=35;
	})
	$('.to-center').click(function(){
		$('.easycall_phone').css('left','50%');
		left1=100;
	})
	$('.to-right').click(function(){
		$('.easycall_phone').css('left','75%');
		left1=145;
	})
	
	var show_anim1=true;
	var show_anim2=false;
	var show_anim3=false;
	$('#tab1').click(function(){show_anim1=true;show_anim2=false;show_anim3=false;})
	$('#tab2').click(function(){show_anim1=false;show_anim2=true;show_anim3=false;})
	$('#tab3').click(function(){show_anim1=false;show_anim2=false;show_anim3=true;})
	
	
	
	
	var step=1;
	
	var timer1=setInterval(function()
	{
		if (Stop_Anim){return;}
		$('.tap').remove();
		
		if (step==1&&show_anim1==false)
		{
		}
		else
		{
		
			if (step==1)
			{
				
				$('<div>').addClass("tap").css({left:left1,top:240 }).appendTo("#screen1").fadeOut(500);
			
			}
			
			if (step==2)
			{
					$('#button_call').toggleClass('invisible');
					$('#make_call').toggleClass('invisible');
					
			}
			if (step==3)
			{
				$('<div>').addClass("tap").css({left:135,top:110 }).appendTo("#screen1").fadeOut(500);
			}
			if (step==4)
			{
				$('#make_call').toggleClass('invisible');
				$('#call_screen').toggleClass('invisible');
			}
			if (step==6)
			{
				$('#call_screen').toggleClass('invisible');
				$('#button_call').toggleClass('invisible');
				step=0;
			}		
			step=step+1;
		}
	}, 2000);

//return;
	var step2=1;
	var timer2=setInterval(function()
	{
	if (Stop_Anim){return;}
	//	$('.tap').remove();
	
	
		if (step2==1&&show_anim2==false)
			{
			}
			else
			{
				if (step2==1)
				{
					
					$('<div>').addClass("tap").css({left:left1,top:240 }).appendTo("#screen2").fadeOut(500);
				
				}
				
				if (step2==2)
				{
						$('#button_call2').toggleClass('invisible');
						$('#office_list').toggleClass('invisible');
						$('[easycall_ul_id=0]').toggleClass('easycall_regionsTop');
				}
				if (step2==3)
				{
					$('<div>').addClass("tap").css({left:left1,top:30 }).appendTo("#screen2").fadeOut(500);
				}
				if (step2==4)
				{
				$('[easycall_ul_id=0]').toggleClass('easycall_regionsTop');
				$('[easycall_ul_id=1]').toggleClass('easycall_regionsTop');
				//	$('#make_call').toggleClass('invisible');
				//	$('#call_screen').toggleClass('invisible');
				}
				if (step2==5)
				{
					$('<div>').addClass("tap").css({left:left1,top:70 }).appendTo("#screen2").fadeOut(500);
				}		
				if (step2==6)
				{
			//	debugger;
					$('[easycall_ul_id=1]').toggleClass('easycall_regionsTop');	
				$('#office_list').toggleClass('invisible');
					$('#make_call2').toggleClass('invisible');
				}		
				if (step2==7)
				{
					
					$('<div>').addClass("tap").css({left:135,top:110 }).appendTo("#screen2").fadeOut(500);
				
				}		
				if (step2==8)
				{
					$('#call_screen2').toggleClass('invisible');
					$('#make_call2').toggleClass('invisible');
					
				}	
				if (step2==10)
				{
					$('#call_screen2').toggleClass('invisible');
					$('#button_call2').toggleClass('invisible');
					step2=0;
				}	
				
				
				
				step2=step2+1;
			}
	}, 2000);
	
	var step3=1;
	var microtimer1;
	var timer3=setInterval(function()
	{
	if (Stop_Anim){return;}
	
		if (step3==1&&show_anim3==false)
			{
			}
			else
			{
				if (step3==1)
				{
					
					$('<div>').addClass("tap").css({left:left1,top:240 }).appendTo("#screen3").fadeOut(500);
				
				}
				if (step3==2)
				{
						$('#button_call3').toggleClass('invisible');
						$('#lead_harvest').val('');
						$('#lead_harvest').toggleClass('invisible');
						$('<div>').addClass("tap").css({left:left1,top:200 }).appendTo("#screen3").fadeOut(500);
						
						var microstep1=1;
					var harvest_input=$('#lead_harvest input');
						 microtimer1=setInterval(function(){
							if(microstep1==1 ){ harvest_input.val('+7'); }
							else if(microstep1==2 ){ harvest_input.val('+78'); }
							else if(microstep1==3 ){ harvest_input.val('+781'); }
							else if(microstep1==4 ){ harvest_input.val('+7812'); }
							else if(microstep1==5 ){ harvest_input.val('+78129'); }
							else if(microstep1==6 ){ harvest_input.val('+7812930'); }
							else if(microstep1==7 ){ harvest_input.val('+78129308'); }
							else if(microstep1==8 ){ harvest_input.val('+781293087'); }
							else if(microstep1==9 ){ harvest_input.val('+7812930872'); }
							else if(microstep1==10 ){harvest_input.val('+78129308729'); }
							else if (microstep1==11 ){ microstep1=0;clearInterval(microtimer1); microtimer1=null;}
							
							microstep1=microstep1+1;
					
						},200)
						
				}
				/*
				if (step3==3)
				{
					
					
					
					
					//$('#lead_harvest input').val('+7 812 930 87 29');
				}
				*/
				if (step3==4)
				{
					$('<div>').addClass("tap").css({left:left1,top:240 }).appendTo("#screen3").fadeOut(500);	
				}
				
				if (step3==5)
				{
						$('#lead_harvest').toggleClass('invisible');
						$('#lead_harvest_finish').toggleClass('invisible');
						
				}
				
				if (step3==6)
				{
						$('#lead_harvest_finish').toggleClass('invisible');
						$('#button_call3').toggleClass('invisible');
						step3=0;
				}
				
			
				
				
				step3=step3+1;
		}
	}, 2000);
	
	
}
	
	