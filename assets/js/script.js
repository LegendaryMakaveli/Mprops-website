document.addEventListener("DOMContentLoaded", function () {
    console.log("Mprops website loaded!");
});



function selectPayment(method) {
    document.getElementById("payment-method").value = method;
    
   
   
   
    let cryptoOptions = document.getElementById("crypto-options");
    let bankOptions = document.getElementById("bank-options");
    let currencyLabel = document.getElementById("currency-label");
    let amountInput = document.getElementById("amount");

    // Reset all
    cryptoOptions.classList.add("hidden");
    bankOptions.classList.add("hidden");
    currencyLabel.innerText = "USD";
    amountInput.placeholder = "Enter the amount in USD";

    if (method === "crypto") {
        cryptoOptions.classList.remove("hidden");
    } else if (method === "nigeria-bank") {
        bankOptions.classList.remove("hidden");
        currencyLabel.innerText = "NGN";
        amountInput.placeholder = "Enter the amount in NGN";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("apply-form");
    const submitBtn = document.getElementById("submit-btn");
    const termsCheckbox = document.getElementById("terms");
    const requiredFields = document.querySelectorAll(
      "input[required], select[required], textarea[required]"
    );

    function validateForm() {
      let allFieldsFilled = true;

      requiredFields.forEach((field) => {
        if (field.value.trim() === "") {
          allFieldsFilled = false;
        }
      });

      submitBtn.disabled = !(allFieldsFilled && termsCheckbox.checked);
    }

    requiredFields.forEach((field) => {
      field.addEventListener("input", validateForm);
    });

    termsCheckbox.addEventListener("change", validateForm);

    form.addEventListener("submit", function (event) {
      if (submitBtn.disabled) {
        event.preventDefault();
        alert(
          "Please fill all fields and agree to the Terms & Conditions before submitting."
        );
      }
    });

    validateForm();
  });


  //email velidation
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const email1 = "example@gmail.com";
  const email2 = "example@gmail.com";
  
  console.log(validateEmail(email1)); // true
  console.log(validateEmail(email2)); // false


  //toggle navigation menu

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", ()  => {
      navLinks.classList.toggle("show");
});



//smooth scrolling
document.querySelectorAll("nav ul li a").forEach(link =>  {
      link.addEventListener("click", (e) =>  {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
             behaviour: "smooth"
        });
      });
});