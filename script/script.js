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
	$('#myName').append(getName().userName + "\"");
	console.log(getName().userName);
}