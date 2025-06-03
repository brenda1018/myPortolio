
// Prevents errors later
function validateInput(input) {
  if (!input || !input.id) return; // check

  const errorDiv = document.getElementById(`${input.id}-error`);
  if (!errorDiv) return; //  check

  let errorMessage = "";

  if (!input.value.trim()) {
    
    const fieldName = input.name ? input.name.charAt(0).toUpperCase() + input.name.slice(1) : "This field";
    errorMessage = `${fieldName} is required.`;
  } else if (input.name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value.trim())) {
      errorMessage = "Please enter a valid email address.";
    }
  }

  errorDiv.textContent = errorMessage;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  if (!form) return; // Defensive check

  const msg = document.getElementById("confirmationMsg");
  const inputs = form.querySelectorAll("input, textarea");

  // Real-time validation
  inputs.forEach(input => {
    input.addEventListener("input", () => validateInput(input));
  });

  // Form submission validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    inputs.forEach(input => {
      const errorDiv = document.getElementById(`${input.id}-error`);
      if (!errorDiv) return;

      let errorMessage = "";

      if (!input.value.trim()) {
        const fieldName = input.name ? input.name.charAt(0).toUpperCase() + input.name.slice(1) : "This field";
        errorMessage = `${fieldName} is required.`;
        valid = false;
      } else if (input.name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          errorMessage = "Please enter a valid email address.";
          valid = false;
        }
      }

      errorDiv.textContent = errorMessage;
    });

    if (valid) {
      const formData = {
        firstname: document.getElementById("fname")?.value.trim() || "",
        lastname: document.getElementById("lname")?.value.trim() || "",
        email: document.getElementById("email")?.value.trim() || "",
        subject: document.getElementById("subject")?.value.trim() || "",
      };

      fetch('/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok.');
        return response.text();
      })
      .then(data => {
        if (msg) {
          msg.style.display = "block";
          msg.style.color = "green";
          msg.textContent = data;
        }
        alert(data);
        form.reset();
      })
      .catch(error => {
        if (msg) {
          msg.style.display = "block";
          msg.style.color = "red";
          msg.textContent = "Submission failed. Please try again.";
        }
        console.error("Error:", error);
      });
    } else {
      if (msg) {
        msg.style.display = "block";
        msg.style.color = "red";
        msg.textContent = "Please fill in all the required fields!";
      }
    }
  });
});
// controller routes, use mongodb, store form in db, 