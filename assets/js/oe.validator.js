!function(){var e=$("#errorContainer"),a=$("#cautionWrapper"),r=$("#messageForm"),s=$("#modalSendForm"),l=$("#submitAlert");r.validate({rules:{name:"required",email:{required:!0,email:!0},message:"required"},messages:{name:{required:"Please enter your name"},email:{required:"Please enter your email",email:"Please enter a valid email"},message:"Please enter your message"},errorPlacement:function(a){a.appendTo(e)},focusInvalid:!0,onfocusout:!0,onkeyup:!1,showErrors:function(a,s){r.find("input, textarea").each(function(){$(this).removeClass("error")}),s.length&&(e.html(s[0].message).addClass("red"),$(s[0].element).addClass("error"))},submitHandler:function(){s.modal("show")}}),$("#submitConfirm").click(function(){var r=$("#msgName"),o=$("#msgEmail"),n=$("#msgMessage"),m=$("#g-recaptcha-response");m.val()?$.ajax({url:"ajax.php",type:"post",data:{name:r.val(),email:o.val(),message:n.val(),"g-recaptcha-response":m.val()},success:function(e){a.html(e),s.modal("hide")},error:function(a,r,s){e.addClass("red").html("Error*: There are some problems sending your message. Please try again later."),console.log(a),console.log("Details: "+r+"\nError:"+s)}}):l.addClass("red").html("Please check the captcha")})}();