document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const msg = document.getElementById("confirmationMsg");

   
    function validateInput(input) {
        const errorDiv = document.getElementById(`${input.id}-error`);

        // .trim is for whitespace 
        if (!input.value.trim()) {
            // if its empty, display the requirement. i added to capitilizae it as well
            errorDiv.textContent = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.`;
        } else {
            // no message if its good
            errorDiv.textContent = ""; 
        }
    }

    // everything will be stored in inputs
    const inputs = document.querySelectorAll("#myForm input, #myForm textarea");

    // this is the real time validation 
    // when i type this is wokring 
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            validateInput(input);
        });
    });

    // add here
    // prevents the refreshing of page
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        // check the input validation
        let valid = true;
        inputs.forEach(input => {
            const errorDiv = document.getElementById(`${input.id}-error`);
            if (!input.value.trim()) {
                // shows message 
                errorDiv.textContent = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.`;
                valid = false;
            } else {
                errorDiv.textContent = ""; 
            }
        });

        // if everything is good this will display
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
