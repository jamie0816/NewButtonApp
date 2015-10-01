var Uscore = 0;

var highscore =10;

var press = function() {
	Uscore++;
	document.getElementById('score').innerHTML = "Your score: " + Uscore;

	if (Uscore === 20) {
		alert("Your pet is now a crab!");
		timerbutton();
		setTimeout(removeButton, 4000);
	}


	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
};

var timerbutton = function() {
	document.getElementById('bonus').innerHTML =
		'<input onclick="bonuspress()" type="image"'
}