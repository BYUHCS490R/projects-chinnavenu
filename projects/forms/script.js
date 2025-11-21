document.getElementById("bookingForm").addEventListener("submit", processForm);

function processForm(event) {
    event.preventDefault(); 

    
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value.trim();
    const destination = document.getElementById("destination").value;
    const special = document.getElementById("special").value.trim();
    const agree = document.getElementById("agree").checked;

    const travelType = document.querySelector("input[name='type']:checked");

    
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

    
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
        alert("Phone number must have at least 10 digits.");
        return;
    }

    if (!agree) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    
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

    
    console.log("Form Data:", formData);

    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const responseData = JSON.parse(xhr.responseText);

            
            document.getElementById("response").innerHTML = `
                <h2>${responseData.message}</h2>
            `;

            
            document.getElementById("bookingForm").reset();
            document.getElementById("bookingForm").style.display = "none";
        }
    };

    xhr.send();
}
