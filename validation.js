function validateInput(input) {
  const errorDiv = document.getElementById(`${input.id}-error`);

  if (!input.value.trim()) {
    errorDiv.textContent = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.`;
  } else {
    errorDiv.textContent = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const msg = document.getElementById("confirmationMsg");
  const inputs = document.querySelectorAll("#myForm input, #myForm textarea");

  //this would be the real time validation
  inputs.forEach(input => {
    input.addEventListener("input", () => validateInput(input));
  });

  // the form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        const errorDiv = document.getElementById(`${input.id}-error`);
        errorDiv.textContent = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.`;
        valid = false;
      }
    });

    if (valid) {
      msg.style.display = "block";
      msg.style.color = "green";
      msg.textContent = "Form Submitted Successfully!";
      alert("Form submitted successfully.");
      form.reset();
    } else {
      msg.style.display = "block";
      msg.style.color = "red";
      msg.textContent = "Please fill in all the required fields!";
    }
  });
});

