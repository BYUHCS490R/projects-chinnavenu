
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

  
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('[name="fullname"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const age = form.querySelector('[name="age"]').value.trim();
      const passion = form.querySelector('[name="passion"]').value;
      const message = form.querySelector('[name="message"]').value.trim();
      
      const errors = [];
      if(name.length < 2) errors.push('Please enter your full name.');
      if(!/^\S+@\S+\.\S+$/.test(email)) errors.push('Please enter a valid email.');
      if(age && (isNaN(age) || age < 5 || age > 120)) errors.push('Please enter a valid age.');
      if(!passion) errors.push('Please choose a passion.');
      if(message.length < 5) errors.push('Please write a short message (≥5 characters).');

      const feedback = document.getElementById('formFeedback');
      feedback.innerHTML = '';
      if(errors.length){
        const ul = document.createElement('ul');
        ul.style.color = '#b91c1c';
        errors.forEach(err=>{
          const li = document.createElement('li'); li.textContent = err; ul.appendChild(li);
        });
        feedback.appendChild(ul);
        return;
      }
      
      feedback.style.color = '#064e3b';
      feedback.textContent = 'Thank you — your message has been received!';
      
      form.reset();
      
      setTimeout(()=> {
        form.style.display = 'none';
      }, 900);
    });
  }
});
