
(function(window){

	var word="Hello";
    var hellospeaker =function (name) {
	// body...
	console.log(word + " " + name);
}
window.hellospeaker=hellospeaker;
})(window);