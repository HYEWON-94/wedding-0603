
/************ 전역변수 *************/
var datas;
var mainNow = 0;
var mainPrev, mainNext, mainLast;
var infoChk = true; 	// info-wrap의 애니메이션 진행여부(true면 진행, flase면 무시)

/************ 사용자 함수 *************/
function mainAjax() {
	$.get("../json/banner.json", function(res){
		datas = res.banners;
		mainLast = datas.length - 1;
		mainPager();
		mainInit();
	});
}
function mainInit() {
	mainPrev = (mainNow == 0) ? mainLast : mainNow - 1;
	mainNext = (mainNow == mainLast) ? 0 : mainNow + 1;
	$(".main-wrap").find(".slide").remove();
	$(htmlMaker(mainNow)).appendTo(".main-wrap").css({
		"position": "relative",
		"transition": "transform 0.5s"
	});
	$(htmlMaker(mainPrev)).appendTo(".main-wrap").css("top", "-100%");
	$(htmlMaker(mainNext)).appendTo(".main-wrap").css("top", "100%");
	$(".main-wrap .pager").removeClass("active");
	$(".main-wrap .pager").eq(mainNow).addClass("active");
	setTimeout(function(){
		$(".main-wrap").find(".slide").eq(0).find(".ani-trans").css("transform", "translateX(0)");
	}, 300);
}

function htmlMaker(n) {
	html  = '<div class="slide">';
	html += '<img src="'+datas[n].src+'" class="img">';
	html += '<div class="mask"></div>';
	html += '<div class="slide-content '+datas[n].class+'">';
	html += '<h2 class="title ani-trans">'+datas[n].title+'<span>.</span></h2>';
	html += '<h3 class="desc ani-trans">'+datas[n].desc+'</h3>';
	html += '<div class="bts">';
	for(var i=0, bt; i<datas[n].buttons.length; i++) {
		bt = datas[n].buttons[i];
		html += '<a href="'+bt.link+'" class="'+bt.class+' ani-trans">'+bt.title+'</a>';
	}
	html += '</div>';
	html += '</div>';
	html += '</div>';
	return html;
}

function mainPager() {
	for(var i=0; i<=mainLast; i++) {
		$('<span class="pager"></span>').appendTo(".main-wrap .pagers").click(onPagerClick);
	}
}
function onMainPrev() {
	$(".main-wrap > .slide").eq(0).css("transform", "translateY(100px)");
	$(".main-wrap > .slide").eq(1).stop().animate({"top": 0}, 500, function() {
		mainNow = (mainNow == 0) ? mainLast : mainNow - 1;
		mainInit();
	});
}

function onMainNext() {
	$(".main-wrap > .slide").eq(0).css("transform", "translateY(-100px)");
	$(".main-wrap > .slide").eq(2).stop().animate({"top": 0}, 500, function() {
		mainNow = (mainNow == mainLast) ? 0 : mainNow + 1;
		mainInit();
	});
}

function onPagerClick() {
	var target = [];
	var old = mainNow;
	mainNow  = $(this).index();
	if(mainNow > old) {
		// console.log("아래거 올라옴");
		target[0] = "100%";
		target[1] = "-100px";
	}
	else if(mainNow < old) {
		// console.log("위에거 내려옴");
		target[0] = "-100%";
		target[1] = "100px";
	}
	else {
		return false;
	}
	$(".main-wrap > .slide").not($(".main-wrap > .slide").eq(0)).remove();
	$(htmlMaker(mainNow)).appendTo(".main-wrap").css("top", target[0]);
	$(".main-wrap > .slide").eq(0).css("transform", "translateY("+target[1]+")");
	$(".main-wrap > .slide").eq(1).stop().animate({"top": 0}, 500, mainInit);
}

function onMasonry(){






/************ 이벤트 선언 *************/

$(".main-wrap > .bt-prev").click(onMainPrev);
$(".main-wrap > .bt-next").click(onMainNext);