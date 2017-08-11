  // Part3-1
function firstfocus() {
	var userid=document.getElementsByName("userid")[0].focus();
}

// Part3-2

function userid_validation(min , max) {
	console.log("user id validation is working");
	let length = document.getElementsByName("userid")[0].value.length ;
	console.log(length);
	if(length===0)
		window.alert("User ID should not be empty!");
	else if(length>max)
	{
		window.alert(`User ID should not more than ${max}!`);
	}
	else if(length<min)
		window.alert(`User ID should not less than ${min}!`);
	else
	{
		focusPassid(); //for Part4
	}
}


// Part 4-1
function focusPassid(argument) {
	var passid=document.getElementsByName("passid")[0].focus();

}

// Part 4-2
function passid_validation(min , max){
	console.log("password validation is working");
	let length = document.getElementsByName("passid")[0].value.length ;
	console.log(length);
	if(length===0)
		window.alert("Password should not be empty!");
	else if(length>max)
	{
		window.alert(`Password should not more than ${max}!`);
	}
	else if(length<min)
		window.alert(`Password should not less than ${min}!`);
	else
	{
		focusname(); //for Part4
	}
}

function focusname() {
	var passid=document.getElementsByName("username")[0].focus();

}


function allLetter(){
	let name = document.getElementsByName("username")[0].value;
	for(i=0;i<name.length;i++){

	}

}


