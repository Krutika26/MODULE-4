
(function(window){

	var word="Good Bye";
    var byespeaker =function (name) {
	// body...
	console.log(word + " " + name);
}
window.byespeaker=byespeaker;
})(window);