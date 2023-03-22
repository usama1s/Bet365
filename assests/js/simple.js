// get references to the links and content elements
const featuredLink = document.getElementById("featured-link");
const eventsLink = document.getElementById("events-link");
const feature = document.getElementById("feature");
const topevent = document.getElementById("event");
const navicon = document.getElementById("navbars");
const navmenu = document.getElementById("navmenu");
const navclose = document.getElementById("navclose");
const navoverlay = document.getElementById("nav_overlay");
const popUp = document.getElementById("popup");
const popupoverlay = document.getElementById("popup_overlay");

navicon.addEventListener("click", tooglemenu);
navclose.addEventListener("click", tooglemenu);
navoverlay.addEventListener("click", tooglemenu);

function tooglemenu() {
  navmenu.classList.toggle("smallmenu");
  navoverlay.classList.toggle("show");
}
