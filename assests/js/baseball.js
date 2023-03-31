const elements = [
  {
    button: document.getElementById("mainprops"),
    div: document.getElementById("mainprops_div"),
  },
  {
    button: document.getElementById("teamprops"),
    div: document.getElementById("teamprops_div"),
  },
  {
    button: document.getElementById("playerprops"),
    div: document.getElementById("playerprops_div"),
  },
];

elements.forEach((element) => {
  element.button.addEventListener("click", () => {
    showDiv(element.div);
    setActiveButton(element.button);
  });
});

function showDiv(selectedDiv) {
  elements.forEach((element) => {
    if (element.div === selectedDiv) {
      element.div.style.display = "block";
    } else {
      element.div.style.display = "none";
    }
  });
}

function setActiveButton(selectedButton) {
  elements.forEach((element) => {
    if (element.button === selectedButton) {
      element.button.classList.add("border-bottom");
    } else {
      element.button.classList.remove("border-bottom");
    }
  });
}

const sportsbutton = document.getElementById("sports");
const sportsdiv = document.getElementById("midbodys");

const inplaybutton = document.getElementById("inplay");
const inplaydiv = document.getElementById("inplay_div");

sportsbutton.addEventListener("click", SportsDiv);
inplaybutton.addEventListener("click", InplayDiv);

function SportsDiv() {
  inplaybutton.classList.remove("border-bottom");
  sportsbutton.classList.add("border-bottom");

  inplaydiv.style.display = "none";
  sportsdiv.style.display = "block";
}

function InplayDiv() {
  inplaybutton.classList.add("border-bottom");
  sportsbutton.classList.remove("border-bottom");

  inplaydiv.style.display = "block";
  sportsdiv.style.display = "none";
}
