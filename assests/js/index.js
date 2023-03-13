// get references to the links and content elements
const featuredLink = document.getElementById("featured-link");
const eventsLink = document.getElementById("events-link");
const feature = document.getElementById("feature");
const topevent = document.getElementById("event");
const navicon = document.getElementById("navbars");
const navmenu = document.getElementById("navmenu");
const navclose = document.getElementById("navclose");
const navoverlay = document.getElementById("nav_overlay");

featuredLink.addEventListener("click", showFeatured);
eventsLink.addEventListener("click", showEvents);
navicon.addEventListener("click", tooglemenu);
navclose.addEventListener("click", tooglemenu);
navoverlay.addEventListener("click", tooglemenu);


function showFeatured() {
  topevent.style.display = "none";
  featuredLink.classList.add("border-bottom");
  feature.style.display = "block";
  eventsLink.classList.remove("border-bottom");
}

function showEvents() {
  feature.style.display = "none";
  featuredLink.classList.remove("border-bottom");
  topevent.style.display = "block";
  eventsLink.classList.add("border-bottom");
}

function tooglemenu() {
  navmenu.classList.toggle("smallmenu");
  navoverlay.classList.toggle("show");
}
