$(document).ready(function() {
	$('#panel1').fadeIn(2000);
});

//Switch to next panel without options
function switchPanel(closeDiv, openDiv) {
	var thisPanel = '#panel' + closeDiv;
		nextPanel = '#panel' + openDiv;
	$(thisPanel).hide();
	$(nextPanel).fadeIn(500);
};

// For quickly going to desired panel while working with the game
function quickGoTo(newPanel) {
	var panel = '#panel' + newPanel;
	$('.story').hide();
	$(panel).fadeIn(500);
}

// Get name and age info from user
function getName() {
	var name = document.getElementById('name-input').value;
		age = document.getElementById('age-input').value;
		name1 = name.substring(0,1);
		name2 = name.substring(1,name.length);
		name = (name1.toUpperCase() + name2.toLowerCase());
	return {userName: name, userAge: age}
};

function addMyName() {
	$('.myName').append(getName().userName + "\"");
	$('#myName2').append(getName().userName + "...\"");
	if (getName().userName === 'Tibbs') {
		$('#theirName').append('Tibbets?\"');
		$('#theirName2').prepend('\"Say Tibbets');
		$('#theirName3').prepend('Tibbets');
	} else {
		$('#theirName').append('Tibbs?\"');
		$('#theirName2').prepend('\"Say Tibbs');
		$('#theirName3').prepend('Tibbs');
	}
};

function firstRiddle() {
	var firstArray = ['river', 'a river', 'brook', 'a brook', 'stream', 'a stream', 'current', 'a current', 'creek', 'a creek']
	var firstCloseArray = ['water', 'a water', 'waterbed', 'aqua']
	var answer = document.getElementById('first').value;
		answer = answer.toLowerCase();
		correct = firstArray.indexOf(answer);
		close = firstCloseArray.indexOf(answer);
	if (correct >= 0) {
		$('#panel31').hide();
		$('#panel32').fadeIn(500);
	} else if (close >= 0) {
		$('#panel31').hide();
		$('#panel34').fadeIn(500);
	} else {
		$('#panel31').hide();
		$('#panel33').fadeIn(500);
	}
};