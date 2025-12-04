
document.addEventListener('DOMContentLoaded', ()=> {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle){
    toggle.addEventListener('click', ()=> links.classList.toggle('show'));
  }


  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === current || (href === 'index.html' && current === '')){
      a.classList.add('active');
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", processForm);

function processForm(event) {
    event.preventDefault(); 

    
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const passion = document.getElementById("passion").value.trim();
    const message = document.getElementById("message").value.trim();

    const travelType = document.querySelector("input[name='type']:checked");

    
    if (!fullname) {
        alert("Please enter your full name.");
        return;
    }

    if (!email) {
        alert("Email field cannot be empty.");
        return;
    }

    if (age < 18) {
        alert("Your age need to over 17");
        return;
    }

    if (length.message < 10) {

    }
    


    
    const formData = {
        fullname,
        email,
        age,
        passion,
        message
    };

    
    console.log("Form Data:", formData);

    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const responseData = JSON.parse(xhr.responseText);

            
            document.getElementById("submit").innerHTML = `<h2>${responseData.message}</h2>`;

            
            document.getElementById("contactForm").reset();
            document.getElementById("contactForm").style.display = "none";
        }
    };

    xhr.send();
};