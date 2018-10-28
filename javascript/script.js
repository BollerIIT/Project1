/*
Thomas Boller
Basic form data collection
10/17/2018
*/

	var subButton = document.getElementById('submit');
	
	function submitBtnHandler () {
		//tests the button was clicked
		console.log('submit clicked');
		
		var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		//stores the form data for use
		var name = document.getElementById('name');
		var email = document.getElementById('email');
		var phone = document.getElementById('pNumber');
		var birthDat = document.getElementById('dob');
		
var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
		//var email = document.getElementById('email');

		if (regexEmail.test(email.value)) {
			submitForm();
		} else {
			alert("You need to enter a valid email address")

		}

	};
		
		
	function submitForm () {		
		//Alerts the user that their data was submited
		alert("Your information was received, someone will contact you shortly");		
	}