

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const msg = document.getElementById("confirmationMsg");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      msg.style.display = "block"; // Show confirmation message
    });
  });
  