!function(t){t.fn.oeSvgDrawing=function(t){new e(this,t)},t.fn.oeSvgDrawing.defaults={debug:!1,framesStart:0,framesTotal:100,framesFillTotal:200,colorCurrent:[255,255,255],colorTarget:[51,51,51],colorStroke:[208,208,208],colorIncrement:[1,1,1]};var e=function(e,o){e&&(this.$element=e,this.options=t.extend({},t.fn.oeSvgDrawing.defaults,o),this.init())};e.prototype={constructor:e,debug:function(t){this.options.debug&&console.log(t)},init:function(){var t=this;this.frameCurrent=this.options.framesStart,this.path=new Array,this.length=new Array,this.handle=0,this.debug("Init! Ready to render "+this.$element.selector);var e=this.$element.children("path");this.pathCount=e.size(),e.each(function(e,o){t.path[e]=o;var n=t.path[e].getTotalLength();t.length[e]=n,t.path[e].style.strokeDasharray=n+" "+n,t.path[e].style.strokeDashoffset=n,t.path[e].style.fill="rgb("+t.options.colorCurrent[0]+",                                                 "+t.options.colorCurrent[1]+",                                                 "+t.options.colorCurrent[2]+")",t.path[e].style.stroke="rgb("+t.options.colorStroke[0]+",                                                 "+t.options.colorStroke[1]+",                                                 "+t.options.colorStroke[2]+")"}),this.render()},render:function(){this.debug("Render checking..."),this.rendered||(this.debug("Passed checking! Drawing..."),this.rendered=!0,this.draw())},draw:function(){var t=this,e=this.frameCurrent/this.options.framesTotal;if(e>1)this.debug("Stop draw then fill the svg"),t.fill(),window.cancelAnimFrame(this.handle);else{this.frameCurrent++;for(var o=0;o<t.pathCount;o++)this.path[o].style.strokeDashoffset=Math.floor(this.length[o]*(1-e));this.handle=window.requestAnimFrame(function(){t.draw()})}},fillLoop:function(){var t=this,e=this.options.colorCurrent,o=this.options.colorTarget,n=this.options.colorStroke,i=this.options.colorIncrement;e[0]+=e[0]<o[0]?i[0]:-i[0],e[1]+=e[1]<o[1]?i[1]:-i[1],e[2]+=e[2]<o[2]?i[2]:-i[2];for(var r="rgb("+e[0]+","+e[1]+","+e[2]+")",a=0;a<t.pathCount;a++)t.path[a].style.fill=r;e[0]==o[0]?(clearInterval(t.timerLoop),this.debug("Drawing completed."),delete this):e[0]<=n[0]&&setTimeout(function(){for(var e=0;e<t.pathCount;e++)t.path[e].style.stroke="transparent"},500)},fill:function(){var t=this;t.timerLoop=setInterval(function(){t.fillLoop()},1e3/t.options.framesFillTotal)}}}(window.jQuery),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),window.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){window.clearTimeout(t)}}();