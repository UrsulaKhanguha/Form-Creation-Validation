document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById('registration-form')
   

    form.addEventListener('submit', function(event){
        event.preventDefault();
    });

    // retrieve user inputs
    const usernameInput = document.getElementById('username').value.trim();

    // email
    const emailInput = document.getElementById('email').value.trim();

    //passowrd
    const passwordInput = document.getElementById('password').value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3 ){
       isValid = false;
       messages.push(' Username must be 3 characters long');
    }
    if(!email.includes('@')|| !email.includes('.')){
        isValid = false;
        messages.push('Email must be a valid email address');
    }
    if(password.length > 8){
        isValid = false;
        messages.push('Password must be 8 characters long');
    }


    const feedbackDiv = document.getElementById('form-feedback');
    feedbackDiv.style.display = "block";

    if(isValid){
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join('br');
        feedbackDiv.style.color = '#dc3545';
    }
});
