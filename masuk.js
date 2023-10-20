const passwordInput = document.getElementById('password');
const toggleCheckbox = document.getElementById('toggle');

  toggleCheckbox.addEventListener('change', function () {
    passwordInput.type = toggleCheckbox.checked ? 'text' : 'password';
  });

const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    fetch(`https://forum-api.dicoding.dev/v1/login`, {
      method: 'POST',
       headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({ email: emailInput, password: passwordInput })
      
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.status == "success") { 
            const successNotification = document.getElementById('success-notification');
            successNotification.style.display = 'block';

          
          localStorage.setItem("token", data.data.token)
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {

        }
            
        })
        .catch(error => {
            console.error('Error:', error);
            const errorNotification = document.getElementById('error-notification');
            errorNotification.style.display = 'block';
        });
});