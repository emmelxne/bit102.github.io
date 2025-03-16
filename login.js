document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.querySelector('#username-input').value;
        const password = document.querySelector('#password-input').value;
  
        alert('Login successful!');
      });
    }
  });