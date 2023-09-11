const getElement = (selector) => document.querySelector(selector);

const singin = getElement("#singin");
const singup = getElement("#singup");
const forms = getElement("#forms");

const sinpInForm = `
<div class="input">
  <div>
    <img src="email-svgrepo-com.svg" alt="" />
    <input type="text" placeholder="Email" />
  </div>
</div>
`;
const singUpForm = `
<div class="input">
  <div>
    <img src="email-svgrepo-com.svg" alt="" />  
    <input type="email" placeholder="Email" />
  </div>
</div>
<div class="input">
  <div>
    <img src="lock-svgrepo-com.svg" alt="" />  
    <input type="password" placeholder="Password" />
  </div>
</div>
`;

const toggleSelected = (selectedElem, notSelectedElem) => {
  if (selectedElem.id === "singin") {
    forms.innerHTML = sinpInForm;
  } else {
    forms.innerHTML = singUpForm;
  }

  selectedElem.className = "selected";
  notSelectedElem.className = "notSelected";
};

singin.addEventListener("click", () => {
  toggleSelected(singin, singup);
});

singup.addEventListener("click", () => {
  toggleSelected(singup, singin);
});

(() => {
  toggleSelected(singin, singup);
})();
