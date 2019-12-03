window.onscroll = function () {
    console.log("labas");
    stickynav()
};

var navbar = document.getElementById("navbar");
console.log(navbar);
var jsnav = document.getElementById(document.getElementsByClassName('jsnav')[0].id);
console.log(jsnav);
var jsnavOffset = jsnav.offsetTop;


function stickynav() {
    if (window.pageYOffset >= jsnavOffset) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

