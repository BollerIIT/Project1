/*
Thomas Boller
Basic form data collection
10/17/2018
*/

	var subButton = document.getElementById('submit');
	
	function submitBtnHandler () {
		//tests the button was clicked
		console.log('submit clicked');
		
		//stores the form data for use
		var name = document.getElementById('name');
		var email = document.getElementById('email');
		var phone = document.getElementById('pNumber');
		var birthDat = document.getElementById('dob');
		
		//Alerts the user that their data was submited
		alert("Your information was received, someone will contact you shortly");
	};
		
		

	
	document.getElementById('submit').addEventListener('click', runBtnHandler, false);
	