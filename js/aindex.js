
function onScroll() {
	var scTop = $(this).scrollTop();
	if(scTop > 800) $(".bt-top").css("visibility", "visible");
	else $(".bt-top").css("visibility", "hidden");
}

function onTopClick() {
  $("html, body").stop().animate({"scrollTop": 0}, 800);
}

function onHover() {
	$(this).find(".subs").stop().fadeIn(500);s
}

function onLeave() {
	$(this).find(".subs").stop().fadeOut(500);
}


$(".bt-top").click(onTopClick);

$(window).scroll(onScroll);

$(".header .navi").hover(onHover, onLeave);

