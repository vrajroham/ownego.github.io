!function(e,t){var a=t(document),n=t("body"),o={firstScreen:1,screenCount:t(".main-screen").size()},s={switchActions:function(){a.on("click",".nav-items",function(){s.switchScreens(t(this).attr("data-screen-go"))}),a.on("keyup",function(e){if(!t("body").hasClass("modal-open"))switch(e.keyCode){case 38:var a=parseInt(n.attr("data-active-screen"));a>1&&s.switchScreens(a-1);break;case 40:var a=parseInt(n.attr("data-active-screen"));a<o.screenCount&&s.switchScreens(a+1)}})},switchScreens:function(e){n.attr("data-active-screen",e),t(".main-screen.active").removeClass("active"),t(".main-screen[data-screen-no="+e+"]").addClass("active"),1==e?(t("#oeLogo").oeSvgDrawing({colorCurrent:[255,255,255]}),t(".texttl").textillate({initialDelay:500})):2==e&&setTimeout(function(){t("#foundersSign").oeSvgDrawing({framesTotal:200,colorCurrent:[51,51,51],colorTarget:[255,255,255],colorStroke:[255,255,255]})},1e3);var a=t(".rectangle");3==e?setTimeout(function(){a.addClass("eff-chain")},800):a.removeClass("eff-chain")}};e.oe=s}(window,jQuery),$(function(){var e=$(window).outerHeight();$(".fitscreen").height(e),$(".btn-nav").click(function(e){e.stopPropagation(),$(".lines-button").toggleClass("close"),$(".site-nav-wrapper, .first-half-page").toggleClass("active")}),$("body, html").click(function(){$navBtn=$(".lines-button"),$navBtn.hasClass("close")&&($navBtn.removeClass("close"),$(".site-nav-wrapper, .first-half-page").removeClass("active"))}),$('[data-toggle="tooltip"]').tooltip(),oe.switchActions(),oe.loader.init(),$("#loader").hide(),oe.switchScreens(1)});