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

// add name Tibbs or Tibbets, so the name will be the same even if the user chooses Tibbs as name
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
	};
};

// Keep score of the riddle game
var userScore = 0;
var ghostScore = 0;

// Answers to the first ghost riddle
function firstRiddle() {
	var firstArray = ['river', 'brook', 'stream', 'current', 'creek'];
	var firstCloseArray = ['water', 'waterbed', 'aqua'];
	var answer = document.getElementById('first').value;
		answer = answer.trim().toLowerCase().replace('a ','').replace('an ','');
		correct = firstArray.indexOf(answer);
		close = firstCloseArray.indexOf(answer);
	$('#panel31').hide();
	// reset scores while testing
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
	};
};

// First user riddle answers
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
	};
	console.log('user: ' + userScore);
	console.log('ghost: ' + ghostScore);
};

// which riddle is shown based on how the first riddle went
function toSecondRiddle() {
	$('.story').hide();
	if (userScore == 1) {
		$('#panel38').fadeIn(500);
	} else {
		$('#panel39').fadeIn(500);
	};
};

// Answers to the more difficult second ghost riddle
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
		};
	} else {
		$('#panel43').fadeIn(500);
	};
};

// Answer to the easier secong ghost riddle
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
	};
};

// answers to second user riddle
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
	};
	console.log('user: ' + userScore);
	console.log('ghost: ' + ghostScore);
};

// which riddle is shown to user third round
function toFourthRiddle() {
	$('.story').hide();
	if (userScore == 2) {
		$('#panel50').fadeIn(500);
	} else {
		$('#panel51').fadeIn(500);
	};
};

// third ghost riddle answers with win possibility
function fourthRiddle() {
	var fourthArray = ['memory', 'recollection', 'thought of past', 'thought', 'remembrance'];
	var answer = document.getElementById('fourth').value;
		answer = answer.trim().toLowerCase().replace('a ','').replace('an ','');
		correct = fourthArray.indexOf(answer);
	$('.story').hide();
	if (correct >= 0) {
		if (ghostScore == 2) {
			// tie breaker possibility
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
	};
};

// third ghost riddle answers without win possibility
function fifthRiddle() {
	var fifthArray = ['worm', 'grub', 'maggot'];
	var answer = document.getElementById('fifth').value;
		answer = answer.trim().toLowerCase().replace('a ','').replace('an ','');
		correct = fifthArray.indexOf(answer);
	$('#panel51').hide();
	if (correct >= 0) {
		if (ghostScore == 2) {
			$('#panel56').fadeIn(500);
		} else {
			$('#panel57').fadeIn(500);
		}
		userScore += 1;
	} else if (ghostScore + userScore == 0) {
		$('#panel60').fadeIn(500);
	} else {
		if (ghostScore == 2) {
			$('#panel58').fadeIn(500);
		} else {
			$('#panel59').fadeIn(500);
		}
	};
	// the ghost tells the current situation.
	if (ghostScore == userScore) {
		$('.score').append('It\'s a tie, but I haven\'t yet guessed this round so I might still get the lead.');
	} else if (userScore > ghostScore) {
		$('.score').append('You have guesed ' + (userScore - ghostScore) + ' more right than me, though I haven\t still guessed this round.');
	} else {
		$('.score').append('I\'m winning at the moment, but you can still catch up, if you do well next round.');
	};
};

// answers to last user riddle
function thirdGS(selection) {
	$('.story').hide();
	if (userScore == 0) {
		$('.scoreThird').append('didn\'t get any');
	} else if (userScore == 1) {
		$('.scoreThird').append('only got one');
	} else {
		$('.scoreThird').append('only got two');
	};
	if (selection == 1) {
		$('#panel61').fadeIn(500);
		ghostScore += 1;
	} else if (selection == 2) {
		$('#panel62').fadeIn(500);
		ghostScore += 1;
	} else {
		$('#panel63').fadeIn(500);
		ghostScore += 1;
	};
	console.log('user: ' + userScore);
	console.log('ghost: ' + ghostScore);
};

// answers to last user riddle
function fourthGS(selection) {
	$('.story').hide();
	if (selection == 1) {
		$('#panel64').fadeIn(500);
	} else if (selection == 2) {
		$('#panel65').fadeIn(500);
		ghostScore += 1;
	} else {
		$('#panel66').fadeIn(500);
	};
	console.log('user: ' + userScore);
	console.log('ghost: ' + ghostScore);
};

function toTieRiddle() {
	$('.story').hide();
	$('#panel70').fadeIn(500);
};

// answers to the user riddle when all answers have been wrongly answered
function fifthGS(selection) {
	$('.story').hide();
	if (selection == 1) {
		$('#panel67').fadeIn(500);
	} else if (selection == 2) {
		$('#panel68').fadeIn(500);
	} else {
		$('#panel69').fadeIn(500);
	};
	console.log('user: ' + userScore);
	console.log('ghost: ' + ghostScore);
};

// Answers to tiebraker ghost riddle
function tieRiddle() {
	var tieArray = ['moon'];
	var answer = document.getElementById('tieR').value;
		answer = answer.trim().toLowerCase().replace('a ','').replace('the ','').replace('an ','');
		correct = tieArray.indexOf(answer);
	$('#panel70').hide();
	if (correct >= 0) {
		if (userScore == 3) {
			$('#panel71').fadeIn(500);
		} else {
			$('#panel72').fadeIn(500);
		}
		userScore += 1;
	} else {
		$('#panel73').fadeIn(500);
	};
};

// answers to tiebraker ghost turn
function tieGS(selection) {
	$('.story').hide();
	ghostScore += 1;
	if (selection == 1) {
		if (ghostScore == 1) {
			$('#panel74').fadeIn(500);
		} else {
			$('#panel75').fadeIn(500);
		}
	} else if (selection == 2) {
		if (ghostScore == 1) {
			$('#panel76').fadeIn(500);
		} else {
			$('#panel77').fadeIn(500);
		}
	} else {
		if (ghostScore == 1) {
			$('#panel78').fadeIn(500);
		} else {
			$('#panel79').fadeIn(500);
		}
	};
	console.log('user: ' + userScore);
	console.log('ghost: ' + ghostScore);
};

// answers sixth user riddle
function sixthGS(selection) {
	$('.story').hide();
	ghostScore += 1;
	if (selection == 1) {
		$('#answer80').append('a glove');
	} else if (selection == 2) {
		$('#answer80').append('a sponge');
	} else {
		$('#answer80').append('silence');
	};
	$('#panel80').fadeIn(500);
	if (userScore == 0) {
		$('.score80').append('two to none in your favor. You might win with next round');
	} else if (userScore == 1) {
		if (ghostScore == 1) {
			$('.score80').append('at a tie, we both have one correct answer');
		} else {
			$('.score80').append('two to one in your favor. You might win with next round');
		}
	} else {
		if (ghostScore == 1) {
			$('.score80').append('two to one in my favor. I might win with next round');
		} else  {
			$('.score80').append('at a tie. Either of us could win the next round');
		}
	}
	console.log('user: ' + userScore);
	console.log('ghost: ' + ghostScore);
};

// sixth ghost riddle, score possibilities (user/ghost) 0/2, 1/1, 1/2, 2/1, 2/2
function sixthRiddle() {
	var fourthArray = ['memory', 'recollection', 'thought of past', 'thought', 'remembrance'];
	var answer = document.getElementById('fourth').value;
		answer = answer.trim().toLowerCase().replace('a ','').replace('an ','');
		correct = fourthArray.indexOf(answer);
	$('.story').hide();
	if (correct >= 0) {
		if (ghostScore == 2) {
			// tie breaker possibility
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
	};
};
