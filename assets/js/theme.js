var problemVector = document.getElementById("fb-vector");
problemVector.style.marginRight = "25px";

var menu = document.getElementsByClassName("overlay-menu")[0];
var cross = document.getElementsByClassName("nav-menu-open")[0];
var menuButton = document.getElementsByClassName("nav-menu-open")[0];
var contactButton = document.getElementsByClassName("button-send")[0];

menuButton.addEventListener('click', function(){
    if(cross.classList.contains('opened')){
	    menu.style.display = "none";
        cross.classList.remove('opened');
    }
    else{
        menu.style.display = "block";
        cross.classList.add('opened');
    }
});
const namePattern = /^[a-zA-Z]{3,35}$/;
const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
const phonePattern = /^\d+$/;
var nameInput = document.querySelector('#input-name');
var emailInput = document.querySelector('#input-email');
var phoneInput = document.querySelector('#input-phone');

contactButton.addEventListener('click', function(){
    if (!namePattern.test(nameInput.value)) {
        console.log(nameInput.value);
        alert('Invalid name. It should contain 3-35 latin letters only!');
        return;
    }
    if (!emailPattern.test(emailInput.value)) {
        alert('Invalid email!');
        return;
    }
    if (!phonePattern.test(phoneInput.value)) {
        alert('Invalid phone number. It should contain only numbers!');
        return;
    }
    alert("Email sent!");
});
