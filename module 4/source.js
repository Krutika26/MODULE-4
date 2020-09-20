
(function(){

var names=["John","Emma","Rahul","Jiya","Joy","Tina","Raj","Krutika","Kartik"];

for (var i = 0; i < names.length; i++) {
	var firstletter = names[i].charAt(0);
	if (firstletter==='J') {
		byespeaker(names[i]);
	}
	else{
		hellospeaker(names[i]);
	}
}

})();