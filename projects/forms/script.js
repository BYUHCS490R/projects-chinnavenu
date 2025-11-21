document.getElementById("bookingForm").addEventListener("submit", processForm);

function processForm(event) {
    event.preventDefault(); // Prevent normal submit

    // Collecting values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value.trim();
    const destination = document.getElementById("destination").value;
    const special = document.getElementById("special").value.trim();
    const agree = document.getElementById("agree").checked;

    const travelType = document.querySelector("input[name='type']:checked");

    // ---- VALIDATION ----
    if (!fullname) {
        alert("Please enter your full name.");
        return;
    }

    if (!email) {
        alert("Email field cannot be empty.");
        return;
    }

    if (!destination) {
        alert("Please select a destination.");
        return;
    }

    // Number field rule: Phone number length must be at least 10 digits
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
        alert("Phone number must have at least 10 digits.");
        return;
    }

    if (!agree) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    // Build form object
    const formData = {
        fullname,
        email,
        password,
        phone,
        date,
        destination,
        travelType: travelType ? travelType.value : "",
        special,
        newsletter: document.querySelector("input[name='newsletter']").checked
    };

    // Print object to console
    console.log("Form Data:", formData);

    // ---- AJAX CALL (GET for GitHub Pages) ----
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const responseData = JSON.parse(xhr.responseText);

            // Display success message
            document.getElementById("response").innerHTML = `
                <h2>${responseData.message}</h2>
            `;

            // Modify submitted form
            document.getElementById("bookingForm").reset();
            document.getElementById("bookingForm").style.display = "none";
        }
    };

    xhr.send();
}
