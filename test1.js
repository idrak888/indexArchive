$(document).ready(function(){
	$('.main').hide().slideDown(1000);
});

function main(){
	var validations = true;
	var errorMsg = document.querySelector('.error');
	var result = document.getElementById('results');
	var extrovert = 0;
	var introvert = 0;
	var notSure = 0;
	var user_name = document.getElementById('name').value;
	var user_age = document.getElementById('age').value;

	if (user_age = !NaN && user_age < 100) {
		validations = true;
	}
	else {
		validations = false;
		errorMsg.innerHTML = "Please make sure you've entered a (valid)number as your age."
	}

	//question1
	if (document.getElementById('e-1').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-1').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-1').checked) {
		introvert += 1;
	}
	else {
		validations = false;
	}

	//question2
	if (document.getElementById('e-2').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-2').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-2').checked) {
		introvert += 1;
	}
	else{
		validations = false;
	}

		//question3
	if (document.getElementById('e-3').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-3').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-3').checked) {
		introvert += 1;
	}
	else{
		validations = false;
	}

		//question4
	if (document.getElementById('e-4').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-4').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-4').checked) {
		introvert += 1;
	}
	else{
		validations = false;
	}

		//question5
	if (document.getElementById('e-5').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-5').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-5').checked) {
		introvert += 1;
	}
	else{
		validations = false;
	}

		//question6
	if (document.getElementById('e-6').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-6').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-6').checked) {
		introvert += 1;
	}
	else{
		validations = false;
	}

		//question7
	if (document.getElementById('e-7').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-7').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-7').checked) {
		introvert += 1;
	}
	else{
		validations = false;
	}

		//question8
	if (document.getElementById('e-8').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-8').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-8').checked) {
		introvert += 1;
	}
	else{
		validations = false;
	}

		//question9
	if (document.getElementById('e-9').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-9').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-9').checked) {
		introvert += 1;
	}
	else{
		validations = false;
	}

		//question10
	if (document.getElementById('e-10').checked) {
		extrovert += 1;
	}
	else if (document.getElementById('ns-10').checked) {
		notSure += 1;
	}
	else if (document.getElementById('i-10').checked) {
		introvert += 1;
	}
	else{
		validations = false;
	}

	var statement = introvert + " " + extrovert + " " + notSure ;

	if (extrovert > introvert && extrovert > notSure) {
	statement = "Alright " + user_name + ", from the infromation we got, you are more likely to be an extrovert!";
	}
	else if (introvert > extrovert && introvert > notSure) {
		statement = "Alright " + user_name + ", from the infromation we got, you are more likely to be an introvert!";
	}
	else if (notSure > extrovert && notSure > introvert) {
		var random = Math.random();
		random = Math.floor(random + 1);

		if (random == 1) {
			statement = "Alright " + user_name + ", from the infromation we got, you are more likely to be an introvert!";
		}
		else 
		{
			statement = "Alright " + user_name + ", from the infromation we got, you are more likely to be an extrovert!";
		}
	}
	
	if (validations == true) {
		result.innerHTML = statement;
		errorMsg.innerHTML = "";
	}
	else{
		errorMsg.innerHTML = "please make sure you've answered every question";
		result.innerHTML = "";
	}
	console.log(user_name);
};

document.getElementById('submit').addEventListener('click', main);