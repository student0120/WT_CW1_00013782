// Animation functions
// This is fuunction to animate all objects from down to up while scrolling in order to make the website more dynamic
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);









// Sign Up functions
// selecting object by it class and ids
const singupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const singup = document.querySelector(".singup");
const login = document.querySelector(".login");

loginBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn");
    login.classList.add("loginForm");
    singup.classList.remove("singupForm");
    moveBtn.innerHTML = "Login";
})

singupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginForm");
    singup.classList.add("singupForm");
    moveBtn.innerHTML = "Singup";
})


 







// Window alert function to navigate clients to main instagram profile
function shop() {
  window.alert("For more information, visit our Intagram and telegram channels.\n  \nHere is our Instagram, profile below:\n@uno.mens.wear");
}
// Accepted Windows alert after clicking Submit button
function accepted() {
  window.alert("Your E-mail has been accepted.\nThank you so much");
}

function order() {
  window.alert("Your order has been successfully accepted");
}
function submission(){
  window.alert("Your request has been accepted")
}


var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Showing the message when password is added
myInput.onfocus = function() {
  document.getElementById("message").style.display = "flex";
}

// When section clicks the mesage disappers
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When password is entered it checks the validation
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validation of capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validation of numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validation length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}




function nav() {
  document.getElementById('nav-bar').style.display = "flex";
}


function exit(){
  document.getElementById("exit").style.display = "none"
}








































