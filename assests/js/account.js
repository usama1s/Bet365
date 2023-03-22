// const contactdetail = document.getElementById("contactdetail");
// const password = document.getElementById("password");
// const verification = document.getElementById("verification");
// const residential = document.getElementById("verification");
// const contact_div = document.getElementById("contact_div");
// const password_div = document.getElementById("password_div");
// const verification_div = document.getElementById("verification_div");
// const residential_div = document.getElementById("residential_div");

// contactdetail.addEventListener("click", showContact);
// password.addEventListener("click", showpassword);
// verification.addEventListener("click", showverfication);

// function showContact() {
//   contactdetail.classList.add("border-start");
//   contact_div.style.display = "block";
//   password_div.style.display = "none";
//   password.classList.remove("border-start");
//   verification_div.style.display = "none";
//   verification.classList.remove("border-start");
// }

// function showpassword() {
//   contactdetail.classList.remove("border-start");
//   contact_div.style.display = "none";
//   password_div.style.display = "block";
//   password.classList.add("border-start");
//   verification_div.style.display = "none";
//   verification.classList.remove("border-start");
// }

// function showverfication() {
//   contactdetail.classList.remove("border-start");
//   contact_div.style.display = "none";
//   password_div.style.display = "none";
//   password.classList.remove("border-start");
//   verification_div.style.display = "block";
//   verification.classList.add("border-start");
// }

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
