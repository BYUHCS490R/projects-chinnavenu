document.getElementById('form').addEventListener ('submit',function(event) {
event.preventDefault();
alert("From Submitted");
const fullname = document.getElementById('fname').value;
const email = document.getElementById('fname').value;
const password = document.getElementById('pass')
const age = document.getElementById('state').value;

if (!fullname || !email) {
    alert("you need a name and email.")
    return;
}

if (! password || email) {
    alert("you need password and email")
    return;
}
const formData = {
    name: fullname,
    email: email,
    password: password,
    State: state,
};
console.log(formData);


const xhr = new XMLHttpRequest();
xhr.open("GET", "submit.json", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //document.getElementById('myForm').reset();
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
                alert("Error submitting form.");
        }
     };
     xhr.send(JSON.stringify(formData));
});