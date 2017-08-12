
function firstfocus() {
	var userid=document.getElementsByName("userid")[0].focus();
}



function userid_validation(min , max) {

	let length = document.getElementsByName("userid")[0].value.length ;
	if(length===0){
		console.log("User ID should not be empty!");
		document.getElementsByName("userid")[0].focus();
	}
	else if(length>max)
	{
		console.log(`User ID should not more than ${max}!`);
		document.getElementsByName("userid")[0].focus();
	}
	else if(length<min){
		console.log(`User ID should not less than ${min}!`);
		document.getElementsByName("userid")[0].focus();}
	else
	{
		 
		movenext(document.getElementsByName("userid")[0]);

	}
}



function passid_validation(min , max){
	
	let length = document.getElementsByName("passid")[0].value.length ;
	if(length===0)
	{
		console.log("Password should not be empty!");
		document.getElementsByName("passid")[0].focus();
	}
	else if(length>max)
	{
		console.log(`Password should not more than ${max}!`);
		document.getElementsByName("passid")[0].focus()
	}
	else if(length<min){
		console.log(`Password should not less than ${min}!`);
		document.getElementsByName("passid")[0].focus()
	}
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
      	console.log('Please input alphabet characters only');
      	document.getElementsByName("username")[0].focus(); 
      }  
      else  
      {  
      	movenext(document.getElementsByName("username")[0]);
      }  
    
}


function ValidateEmail() {
	let email = document.getElementsByName("email")[0].value;
	var at = /[@]/;  
      if(!email.match(at))  
      {  
      	console.log('Please Enter valid email'); 
      	document.getElementsByName("email")[0].focus();
      }  
     
}

function movenext(child) {	
	child.parentElement.nextElementSibling.nextElementSibling.querySelectorAll('input')[0].focus();
}


