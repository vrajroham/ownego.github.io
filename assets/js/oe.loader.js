!function(e,o){o.loader=function(){var a={loaderDelay:0,loaderSelector:"#loader",loaderCircle:"#loadingCircle",fontPercent:40,imgPercent:60,point:0,pushArr:[]},n=e(a.loaderSelector),r=e(a.loaderCircle);return{init:function(){r.easyPieChart({barColor:"#333",trackColor:"#ebebeb",scaleColor:!1,lineCap:"square",size:100,animate:a.loaderDelay,onStep:function(e,o,a){this.el.children[0].innerHTML=Math.round(a)+"%"}}),o.loader.fontLoader(),o.loader.imageLoader()},pushValue:function(e){a.point||o.loader.updateValue(),a.point+=e,a.pushArr.push(a.point)},updateValue:function(){var e=setInterval(function(){return a.pushArr[0]?(r.data("easyPieChart").update(a.pushArr[0]),void a.pushArr.shift()):void(a.point>=100&&(clearInterval(e),o.loader.end()))},a.loaderDelay)},fontLoader:function(){var e=0;WebFont.load({google:{families:["Roboto Condensed:700:latin,vietnamese","Roboto:100,300,400,700:latin,vietnamese"]},active:function(){var n=a.fontPercent-e;o.loader.pushValue(n)},fontactive:function(){var a=Math.floor(8*Math.random()+1);e+=a,o.loader.pushValue(a)}})},imageLoader:function(){var n=e("img").size(),r=Math.floor(a.imgPercent/n),t=0;e("body").imagesLoaded().progress(function(){t+=r,o.loader.pushValue(r)}).always(function(){o.loader.pushValue(a.imgPercent-t)})},end:function(){n.on("click","#startBtn",function(){setTimeout(function(){o.switchScreens(1)},500),n.hide()}),r.addClass("done")}}}()}(jQuery,window.oe,window.document);