const elements = [
  {
    button: document.getElementById("activity"),
    div: document.getElementById("activity_div"),
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
