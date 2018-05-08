$(document).ready(function() {
	var k = !0;
	$(".loginmask").css("opacity", 0.8);
	$(".openlogin,.openregister").click(function() {
		// top本来的值是: -600px。
		k && "0px" != $("#loginalert").css("top") && ($("#loginalert").show(), $(".loginmask").fadeIn(500), $("#loginalert").animate({
			top: 0
		}, 400))
		var classname = $(this).attr("class");
		if(classname == "openlogin"){
			$(".loginwindow").show(),$(".regwindow").hide();
		}else{
			$(".loginwindow").hide(),$(".regwindow").show();
		}
	});
	$(".loginmask,.closealert").click(function(){
		k && (k = !1, $("#loginalert").animate({
			top: -600
		}, 400, function() {
			$("#loginalert").hide();
			k = !0
		}), $(".loginmask").fadeOut(500));
	});
	$("#login_now").click(function(){
		$(".regwindow").hide(),$(".loginwindow").show();
	});
	$("#reg_now").click(function(){
		$(".loginwindow").hide(),$(".regwindow").show();
	});
});