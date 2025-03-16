document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('#signup-form');
  
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstname = document.querySelector('#firstname-input').value;
        const lastname = document.querySelector('#lastname-input').value;
        const email = document.querySelector('#email-input').value;
        const password = document.querySelector('#password-input').value;
        const repeatPassword = document.querySelector('#repeat-password-input').value;
  
        if (password !== repeatPassword) {
          alert('Passwords do not match!');
          return;
        }
  
        alert('Signup successful!');
      });
    }
  });