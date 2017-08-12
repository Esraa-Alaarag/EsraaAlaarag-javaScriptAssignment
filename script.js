
function firstfocus() {
	var userid=document.getElementsByName("userid")[0].focus();
}



function userid_validation(min , max) {

	let length = document.getElementsByName("userid")[0].value.length ;
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
		 
		movenext(document.getElementsByName("userid")[0]);

	}
}



function passid_validation(min , max){
	
	let length = document.getElementsByName("passid")[0].value.length ;
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
		movenext(document.getElementsByName("passid")[0]); //for Part4
	}
}



function allLetter(){
	let name = document.getElementsByName("username")[0].value;
	var letters = /[^a-zA-Z ]/;  
      if(name.match(letters))  
      {  
      	window.alert('Please input alphabet characters only'); 
      }  
      else  
      {  
      	movenext(document.getElementsByName("username")[0])
      }  
    
}


function ValidateEmail() {
	let email = document.getElementsByName("email")[0].value;
	var at = /[@]/;  
      if(!email.match(at))  
      {  
      	window.alert('Please Enter valid email'); 
      }  
     
}

function movenext(child) {	
	child.parentElement.nextElementSibling.nextElementSibling.querySelectorAll('input')[0].focus();
}


