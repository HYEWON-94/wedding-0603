


if(scTop > 800) $(".bt-top").css("visivility", "visible");
else $(".bt-top").css("visivility", "hidden");

function onTopClick() {
  $("html, body").stop().animate({"scrollTop": 0}, 800);
}

$(".bt-top").click(onTopClick);