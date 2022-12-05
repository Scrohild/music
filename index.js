

// _0: Xomu, KiraraMagic, Kumi-P等合集
var _0_0 = "http://music.163.com/song/media/outer/url?id=1907498364.mp3"
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
var _1_0 = "http://ws.stream.qqmusic.qq.com/C400000ujZNW2BO8VY.m4a?guid=172486767&vkey=E693B7CEE28B6022AA2093349148627BD0D32ACE3F528EE521D8F78CF0F9389674F1D43C5A08887515FFF51BD8536B572925FE191F1B29A6&uin=&fromtag=120032";
var _1_1 = "http://music.163.com/song/media/outer/url?id=1987806566.mp3";
var _1_2 = "http://music.163.com/song/media/outer/url?id=1876939925.mp3";
var _1_3 = "http://music.163.com/song/media/outer/url?id=1877154230.mp3";
var _1_4 = "http://music.163.com/song/media/outer/url?id=2002648035.mp3";
var _1_5 = "http://music.163.com/song/media/outer/url?id=1877153935.mp3";
var _1_6 = "http://music.163.com/song/media/outer/url?id=1876939087.mp3";
var _1_7 = "http://music.163.com/song/media/outer/url?id=1877153908.mp3";

var _1 = [
	_1_0, _1_1, _1_2, _1_3, _1_4,
	_1_5, _1_6, _1_7
];
// _3: Tobu, F-777等合集
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

var _2 = [
	_2_0, _2_1, _2_2, _2_3, _2_4,
	_2_5, _2_6, _2_7, _2_8, _2_9,
	_2_10, _2_11
];
var _3 = [];

var _index = [_0, _1, _2, _3];
function play(list, music){
	var _list = _index[list];
	var _link = _list[music];
	
	document.getElementById("player").src = _link;
	document.getElementById("player").play();
	
	// document.getElementsByClassName("music").style.backgroundColor = "#347ebf";
	// document.getElementById(list + "-" + music).style.backgroundColor = "#777b83";
}
