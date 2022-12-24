// _0: Xomu, KiraraMagic, Kumi-P等合集
var _0_0 = "http://music.163.com/song/media/outer/url?id=1907498364.mp3";
var _0_1 = "http://music.163.com/song/media/outer/url?id=1415070152.mp3";
var _0_2 = "http://music.163.com/song/media/outer/url?id=1821918070.mp3";
var _0_3 = "http://music.163.com/song/media/outer/url?id=569962512.mp3";
var _0_4 = "http://music.163.com/song/media/outer/url?id=1370028656.mp3";
var _0_5 = "http://music.163.com/song/media/outer/url?id=1963634342.mp3";
var _0_6 = "http://music.163.com/song/media/outer/url?id=1325892124.mp3";
var _0_7 = "http://music.163.com/song/media/outer/url?id=1447458944.mp3";
var _0_8 = "http://music.163.com/song/media/outer/url?id=521415465.mp3";
var _0_9 = "http://music.163.com/song/media/outer/url?id=1304538675.mp3";
var _0_10 = "http://music.163.com/song/media/outer/url?id=1360122230.mp3";

var _0 = [
	_0_0, _0_1, _0_2, _0_3, _0_4,
	_0_5, _0_6, _0_7, _0_8, _0_9,
	_0_10,
];
// _1: Plum合集
var _1_0 = "http://music.163.com/song/media/outer/url?id=1876939145.mp3";
var _1_1 = "http://music.163.com/song/media/outer/url?id=1987806566.mp3";
var _1_2 = "http://music.163.com/song/media/outer/url?id=1876939925.mp3";
var _1_3 = "http://music.163.com/song/media/outer/url?id=1877154230.mp3";
var _1_4 = "http://music.163.com/song/media/outer/url?id=2002648035.mp3";
var _1_5 = "http://music.163.com/song/media/outer/url?id=1877153935.mp3";
var _1_6 = "http://music.163.com/song/media/outer/url?id=1876939087.mp3";
var _1_7 = "http://music.163.com/song/media/outer/url?id=1966149345.mp3";
var _1_8 = "http://music.163.com/song/media/outer/url?id=1876939921.mp3";
var _1_9 = "http://music.163.com/song/media/outer/url?id=1922395111.mp3";
var _1_10 = "http://music.163.com/song/media/outer/url?id=1877154652.mp3";
var _1_11 = "http://music.163.com/song/media/outer/url?id=1877154641.mp3";

var _1 = [
	_1_0, _1_1, _1_2, _1_3, _1_4,
	_1_5, _1_6, _1_7, _1_8, _1_9,
	_1_10, _1_11
];
// _2: Tobu, F-777等合集
var _2_0 = "http://music.163.com/song/media/outer/url?id=1301417907.mp3";
var _2_1 = "http://music.163.com/song/media/outer/url?id=41644477.mp3";
var _2_2 = "http://music.163.com/song/media/outer/url?id=28830412.mp3";
var _2_3 = "http://music.163.com/song/media/outer/url?id=28830410.mp3";
var _2_4 = "http://music.163.com/song/media/outer/url?id=484730269.mp3";
var _2_5 = "http://music.163.com/song/media/outer/url?id=460628799.mp3";
var _2_6 = "http://music.163.com/song/media/outer/url?id=423015272.mp3";
var _2_7 = "http://music.163.com/song/media/outer/url?id=451126088.mp3";
var _2_8 = "http://music.163.com/song/media/outer/url?id=1939762974.mp3";
var _2_9 = "http://music.163.com/song/media/outer/url?id=41644447.mp3";
var _2_10 = "http://music.163.com/song/media/outer/url?id=1293953588.mp3";
var _2_11 = "http://music.163.com/song/media/outer/url?id=491686205.mp3";
var _2_12 = "http://music.163.com/song/media/outer/url?id=1937251481.mp3";
var _2_13 = "http://music.163.com/song/media/outer/url?id=1940069861.mp3";
var _2_14 = "http://music.163.com/song/media/outer/url?id=444267496.mp3";

var _2 = [
	_2_0, _2_1, _2_2, _2_3, _2_4,
	_2_5, _2_6, _2_7, _2_8, _2_9,
	_2_10, _2_11, _2_12, _2_13, _2_14
];
// _3: 其他
var _3_0 = "http://music.163.com/song/media/outer/url?id=33922813.mp3";
var _3_1 = "http://music.163.com/song/media/outer/url?id=462177081.mp3";
var _3_2 = "http://music.163.com/song/media/outer/url?id=1400281837.mp3";
var _3_3 = "http://music.163.com/song/media/outer/url?id=406737893.mp3";
var _3_4 = "http://music.163.com/song/media/outer/url?id=409646391.mp3";
var _3_5 = "http://music.163.com/song/media/outer/url?id=1474047989.mp3";
var _3_6 = "http://music.163.com/song/media/outer/url?id=33937527.mp3";
var _3_7 = "http://music.163.com/song/media/outer/url?id=556204130.mp3";

var _3 = [
	_3_0, _3_1, _3_2, _3_3, _3_4,
	_3_5, _3_6, _3_7
];

var _index = [_0, _1, _2, _3];
var _new = "0-1";
var _last = "0-0";
function set(_list, _music){
	var _ = _index[_list];
	var _link = _[_music];
	
	var p = document.getElementById("player");
	p.src = _link;
	p.play();
	setInterval("axis()", 500);
	setInterval("display()", 500);
	
	document.getElementById(_last).style.backgroundColor = "#347ebf";
	document.getElementById(_list + "-" + _music).style.backgroundColor = "#777b83";
	
	_last = _list + "-" + _music;
	
	i = _list;
	j = _music;
}

//player播放器控制
var _auto = false;
function auto(){
	var p = document.getElementById("player");
	if(p.ended && _auto){
		if(j + 1 == _index[i].length){
			i ++;
			j = 0;
		}else{
			j ++;
		}
		set(i ,j);
	}
}
function axis(){
	var p = document.getElementById("player");
	var a = document.getElementById("axis-inner");
	a.style.width = 600*p.currentTime/p.duration + "px";
}
function display(){
	var p = document.getElementById("player");
	document.getElementById("currentTime-display").innerHTML = "当前时长:" + Math.trunc(p.currentTime);
	document.getElementById("totalTime-display").innerHTML = "总时长:" + Math.trunc(p.duration);
	document.getElementById("volume-display").innerHTML = "音量:" + Math.trunc(p.volume*100) + "%";
	document.getElementById("num-display").innerHTML = "序号:" + i + "-" + j;
}
function ctrl(_cmd){
	var p = document.getElementById("player");
	switch(_cmd){
		case 0:
			// 播放/暂停
			if(p.paused){
				p.play();
			}else{
				p.pause();
			}
		break;
		case 1:
			// 循环
			p.loop = !p.loop;
			if(p.loop){
				document.getElementById("loop").innerHTML = "循环:开";
				if(_auto){
					ctrl(2);
				}
			}else{
				document.getElementById("loop").innerHTML = "循环:关";
			}
		break;
		case 2:
			// 自动连播
			setInterval("auto()", 1000);
			if(_auto){
				_auto = false;
				document.getElementById("auto").innerHTML = "自动连播:关";
			}else{
				_auto = true;
				document.getElementById("auto").innerHTML = "自动连播:开";
				if(p.loop){
					ctrl(1);
				}
			}
		break;
		case 3:
			// 下载
			location.href = p.currentSrc
		break;
		case 4:
			// +10s
			p.currentTime += 10;
		break;
		case 5:
			// -10s
			p.currentTime -= 10;
		break;
		case 6:
			// 音量+
			p.volume += 0.1;
		break;
		case 7:
			// 音量-
			p.volume -= 0.1;
		break;
	}
}
