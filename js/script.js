//Sticky nav
var navbar = document.getElementById("navbar");
var jsnav = document.getElementById(
  document.getElementsByClassName("jsnav")[0].id
);
var jsnavOffset = jsnav.offsetTop;

window.onscroll = function() {
  if (window.pageYOffset >= jsnavOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

//hamburger menu
function mobileNav() {
  const y = document.getElementById("navbar");
  const menuItems = document.querySelectorAll("ul li");
  console.log(menuItems);
  if (y.style.display === "flex" || y.style.display === "block") {
    y.style.display = "none";
    menuItems.forEach(x => (x.style.display = "none"));
  } else {
    y.style.display = "block";
    menuItems.forEach(x => (x.style.display = "block"));
  }
}

window.addEventListener("resize", function() {
  var y = document.getElementById("navbar");
  const menuItems = document.querySelectorAll("ul li");
  if (
    (y.style.display === "none" || y.style.display === "block") &&
    window.innerWidth > 767
  ) {
    y.style.display = "flex";
    menuItems.forEach(x => (x.style.display = "block"));
  }

  if (y.style.display === "flex" && window.innerWidth <= 767) {
    y.style.display = "none";
  }
});

//google maps
function initMap() {
  var uluru = { lat: 54.916, lng: 23.987 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

//prieziura
function popup(id, buttonId) {
  const x = document.getElementById(id);
  if (!x.classList.contains("w3-show")) {
    x.classList.add("w3-show");
    document.getElementById(buttonId).innerHTML = "Suskleisti";
  } else {
    x.classList.remove("w3-show");
    document.getElementById(buttonId).innerHTML = "Rodyti daugiau";
  }
}
