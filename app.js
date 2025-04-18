

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const msg = document.getElementById("confirmationMsg");
  
    form.addEventListener("submit", function (e) {
        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
        const question = document.getElementById("subject").value;
        const email = document.getElementById("email").value;

        if (!firstName || !lastName || !question || !email) {
            e.preventDefault();
            msg.style.display = "block";
            msg.style.color = "red";
            msg.textContent = "Fields incomplete!"
        }
        else {
            e.preventDefault();
            msg.style.display = "block";
            msg.style.color = "green";
            msg.textContent = "Form Submitted";

            alert("Form submitted successfully.");
            form.reset();
        }
    });
  });
  