function formSbmt(){
    alert("Email sent!");
}

function openMenu(){
    var menu = document.getElementsByClassName("overlay-menu")[0];
    var cross = document.getElementsByClassName("nav-menu-open")[0];
    if(cross.classList.contains('opened')){
	    menu.style.display = "none";
        cross.classList.remove('opened');
    }
    else{
        menu.style.display = "block";
        cross.classList.add('opened');
    }
}
    