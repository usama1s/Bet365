const elements = [
  {
    button: document.getElementById("contactdetail"),
    div: document.getElementById("contact_div"),
  },
  {
    button: document.getElementById("password"),
    div: document.getElementById("password_div"),
  },
  {
    button: document.getElementById("verification"),
    div: document.getElementById("verification_div"),
  },
  {
    button: document.getElementById("residential"),
    div: document.getElementById("residential_div"),
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
      element.button.classList.add("border-start");
    } else {
      element.button.classList.remove("border-start");
    }
  });
}
