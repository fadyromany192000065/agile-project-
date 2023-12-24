let img = document.querySelector(".img");
let container = document.querySelector(".container");

function phones(phone){
     img.src = phone;
}
function colors(color){
     container.style.background = color;
}
function color(color){
    h2.style.color = color;
}





function login()
{
  var uname = document.getElementById("text1").value;
  var pwd = document.getElementById("psw").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(uname =='')
  {
   
  }

  else if(pwd =='')
  {
        
  }
  else if(!filter.test(uname))
  {
    alert("Email Syntax Error");
  }

  else if( pwd.length < 6 )
  {  
    alert("Password is less than usual");
  }
  else
  {
     alert("email and password accepted");
     window.location = "register.html";
    }
}

function signup()
{
  var uname = document.getElementById("text1").value;
  var pwd = document.getElementById("psw").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var lname = document.getElementById("lname").value;
  var fname = document.getElementById("fname").value;
  var validFirstName=/^[A-Za-z]+$/;
  var validLastName=/^[A-Za-z]+$/;
   
  if(fname =='')
  {

    
  }
  else if(!validFirstName.test(fname)){
    alert(" wrong first name syntax ");
  }

  if(lname=="")
  {
   
  }else if(!validLastName.test(lname)){
    alert("wrong last name syntax");

  }
  if(uname =='')
  {
  
  }
  else if(!filter.test(uname))
  {
    alert("wrong email syntax");
  }
  if(pwd =='')
  {

  }
  else if(pwd.length < 6 )
  {  
    alert("Password is less than usual ");
  }
  else{
    alert(" CONGRATULATIONS, YOU HAVE SUCCESSFULLY REGISTERED ");
 
  }
}
