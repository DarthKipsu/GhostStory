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

var userScore = 0;
var ghostScore = 0;

function firstRiddle() {
	var firstArray = ['river', 'brook', 'stream', 'current', 'creek'];
	var firstCloseArray = ['water', 'waterbed', 'aqua'];
	var answer = document.getElementById('first').value;
		answer = answer.trim().toLowerCase().replace('a ','').replace('an ','');
		correct = firstArray.indexOf(answer);
		close = firstCloseArray.indexOf(answer);
	$('#panel31').hide();
	userScore = 0;
	ghostScore = 0;
	if (correct >= 0) {
		$('#panel32').fadeIn(500);
		$('#first-answer').append(answer);
		userScore += 1;
	} else if (close >= 0) {
		$('#panel34').fadeIn(500);
		userScore += 1;
	} else {
		$('#panel33').fadeIn(500);
	}
};

function firstGhostScore(selection) {
	$('.story').hide();
	if (selection == 1) {
		$('#panel35').fadeIn(500);
		ghostScore += 1;
	} else if (selection == 2) {
		$('#panel36').fadeIn(500);
	} else {
		$('#panel37').fadeIn(500);
		ghostScore += 1;
	}
	console.log('user: ' + userScore);
	console.log('ghost: ' + ghostScore);
};

function toSecondRiddle() {
	$('.story').hide();
	if (userScore == 1) {
		$('#panel38').fadeIn(500);
	} else {
		$('#panel39').fadeIn(500);
	}
};

function secondRiddle() {
	var secondArray = ['tombstone', 'gravestone', 'burialstone'];
	var secondCloseArray = ['grave', 'tomb', 'burial'];
	var answer = document.getElementById('second').value;
		answer = answer.trim().toLowerCase().replace('a ','').replace('an ','');
		correct = secondArray.indexOf(answer);
		close = secondCloseArray.indexOf(answer);
	$('#panel38').hide();
	$('.second-answer').append(answer);
	if (correct >= 0) {
		$('#panel40').fadeIn(500);
		userScore += 1;
	} else if (close >= 0) {
		if (ghostScore == 1) {
			$('#panel41').fadeIn(500);
			userScore += 1;
		} else {
			$('#panel42').fadeIn(500);
		}
	} else {
		$('#panel43').fadeIn(500);
	}
};

function thirdRiddle() {
	var thirdArray = ['fish'];
	var answer = document.getElementById('third').value;
		answer = answer.trim().toLowerCase().replace('a ','').replace('an ','');
		correct = thirdArray.indexOf(answer);
	$('#panel39').hide();
	if (correct >= 0) {
		$('#panel44').fadeIn(500);
		userScore += 1;
	} else {
		$('#panel45').fadeIn(500);
	}
};

function secondGS(selection) {
	$('.story').hide();
	if (selection == 1) {
		$('#panel46').fadeIn(500);
		ghostScore += 1;
	} else if (selection == 2) {
		if (ghostScore + userScore == 0) {
			$('#panel49').fadeIn(500);
		} else {
			$('#panel47').fadeIn(500);
		}
	} else {
		$('#panel48').fadeIn(500);
		ghostScore += 1;
	}
	console.log('user: ' + userScore);
	console.log('ghost: ' + ghostScore);
};

function toFourthRiddle() {
	$('.story').hide();
	if (userScore == 2) {
		$('#panel50').fadeIn(500);
	} else {
		$('#panel51').fadeIn(500);
	}
};

function fourthRiddle() {
	var fourthArray = ['memory', 'recollection', 'thought of past', 'thought', 'remembrance'];
	var answer = document.getElementById('fourth').value;
		answer = answer.trim().toLowerCase().replace('a ','').replace('an ','');
		correct = fourthArray.indexOf(answer);
	$('#panel50').hide();
	if (correct >= 0) {
		if (ghostScore == 2) {
			$('#panel52').fadeIn(500);
		} else {
			$('#panel53').fadeIn(500);
			if (ghostScore == 1) {
				$('.ghost-score').append('only guessed one of your riddles.');
			} else {
				$('.ghost-score').append('didn\'t guess a single one!');
			}
		}
		userScore += 1;
	} else {
		if (ghostScore == 2) {
			$('#panel54').fadeIn(500);
		} else {
			$('#panel55').fadeIn(500);
		}
	}
};