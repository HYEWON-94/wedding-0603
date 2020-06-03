$(".about-pt").onHover(function(){
	$(".about-pt .img").hind();
	$(".about-pt span").show();
});

$(".about-pt").onLeave(function(){
	$(".about-pt .img").show();
	$(".about-pt span").hind();
});




/* ******* 사용자 함수********** */
/* ******* 이벤트 콜백********** */
function onScroll() {
	var scTop = $(this).scrollTop();
	if(scTop > 800) $(".bt-top").css("visibility","visible");
	else $(".bt-top").css("visibility", "hidden");
}
function onTopClick() {
	$("html, body").stop().animate({"scrollTop": 0}, 800);
}



function onHover() {
$(this).find(".subs").stop().fadeIn(500);
$(this).find(".subs-rt").stop().fadeIn(500);

}

function onLeave() {
$(this).find(".subs").stop().fadeOut(500);
$(this).find(".subs-rt").stop().fadeOut(500);
}





/* ******* 이벤트 선언********** */

$(".bt-top").click(onTopClick); // 1
$(window).scroll(onScroll); // 2

$(".header .navi").hover(onHover, onLeave);

$(".about-pt").hover(onHover, onLeave);