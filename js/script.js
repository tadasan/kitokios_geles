window.onscroll = function () {
    stickynav()
};

var navbar = document.getElementById("navbar");
var jsnav = document.getElementById(document.getElementsByClassName('jsnav')[0].id);
var jsnavOffset = jsnav.offsetTop;


function stickynav() {
    if (window.pageYOffset >= jsnavOffset) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


function initMap() {
var uluru = {lat: 54.916, lng: 23.987};
var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 15, center: uluru});
var marker = new google.maps.Marker({position: uluru, map: map});
}

function popup(id, textToChange) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        document.getElementById(textToChange).innerHTML = "Suskleisti";
    } else {
        x.className = x.className.replace(" w3-show", "");
        document.getElementById(textToChange).innerHTML = "Gėlės priežiūra";
    }
}


function mobileNav() {
    
    var y = document.getElementById('navbar');
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}