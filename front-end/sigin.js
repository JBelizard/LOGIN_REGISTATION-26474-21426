window.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token-iusabndkjanbksd');
  if (token) {
    window.location.href = 'home.html';
  }
});

//Função Login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const url = 'http://localhost:4242/api/user/login';

  const requestBody = { username, password };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Invalid credentials');
      }
    })
    .then((data) => {
      localStorage.setItem('token-iusabndkjanbksd', data.token);
      window.location.href = 'home.html'; // Redireciona para o e-commerce
    })
    .catch((error) => {
      const errorMessage = document.getElementById('loginError');
      errorMessage.textContent =
        'Credenciais inválidas. Por favor, tente novamente.';
      console.error('Error:', error);
    });
}

//Função Registrar
function signup() {
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  const url = 'http://localhost:4242/api/user/register';

  const requestBody = { username, password };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Registration failed');
      }
    })
    .then((data) => {
      // Registration successful
      const signupResult = document.getElementById('signupResult');
      signupResult.textContent = 'Registo bem-sucedido';
      signupResult.classList.remove('error-message');
      signupResult.classList.add('success-message');

      // Login the user after successful registration
      const loginUrl = 'http://localhost:4242/api/user/login';
      const loginRequestBody = { username, password };

      fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequestBody),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Invalid credentials');
          }
        })
        .then((loginData) => {
          localStorage.setItem('token-iusabndkjanbksd', loginData.token);
          window.location.href = 'home.html'; // Redireciona para o e-commerce após o login automático
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    })
    .catch((error) => {
      console.error('Error:', error);
      const signupResult = document.getElementById('signupResult');
      signupResult.textContent =
        'O registo falhou. Por favor, tente novamente.';
      signupResult.classList.remove('success-message');
      signupResult.classList.add('error-message');
    });
}


