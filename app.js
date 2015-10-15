var Uscore = 0;

var highscore = 10;

var press = function() {
	Uscore++;
	document.getElementById('score').innerHTML = "Your score: " + Uscore;


	if (Uscore>100000){
		document.getElementById('next_pet').innerHTML = "<img id='dragon' src='dragon.jpeg'>";
	}
	else if (Uscore>1800){
		document.getElementById('next_pet').innerHTML = "<img id='whaleshark' src='whaleshark.jpg'>";
		Uscore = Uscore+1000;
	}
	else if (Uscore>1000){
		document.getElementById('next_pet').innerHTML = "<img id='whale' src='whale.jpg'>";
		Uscore = Uscore+90;
	}
	else if (Uscore>900){
		document.getElementById('next_pet').innerHTML = "<img id='octopus' src='octopus.jpeg'>";
		Uscore = Uscore+80
	}
	else if (Uscore>600){
		document.getElementById('next_pet').innerHTML = "<img id='shark' src='shark.jpg'>";
		Uscore = Uscore+70;
	}
	else if (Uscore>400){
		document.getElementById('next_pet').innerHTML = "<img id='Tiger' src='Tiger.jpg'>";
		Uscore = Uscore+50;
	}
	else if (Uscore>250){
		document.getElementById('next_pet').innerHTML = "<img id='Lepoard' src='Leopard.jpg'>";
		Uscore = Uscore+40;
	}
	else if (Uscore>175){
		document.getElementById('next_pet').innerHTML = "<img id='dog' src='dog.jpg'>";
		Uscore = Uscore+5;
	}
	else if (Uscore>100){
		document.getElementById('next_pet').innerHTML = "<img id='cat' src='cat.jpg'>";
		Uscore = Uscore+3;
	}
	else if (Uscore>50){
		document.getElementById('next_pet').innerHTML = "<img id='parrots' src='Parrots.jpg'>";
		Uscore = Uscore+2;
	}
	else if (Uscore>20){
		document.getElementById('next_pet').innerHTML = "<img id='crab' src='crab.jpg'>";
	}
	else if (Uscore>0){
		document.getElementById('next_pet').innerHTML = "<img id='mouse' src='mouse.png'>";
	}
/*
	if (Uscore === 20) {
		alert("Your pet is now a crab!");
		timerbutton();
		setTimeout(removeButton, 4000);
	}


	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
*/

};

/*
var timerbutton = function() {
	document.getElementById('bonus').innerHTML =
		'<input onclick="bonuspress()" type="image"'
}
*/