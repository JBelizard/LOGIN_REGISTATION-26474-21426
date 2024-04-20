//Função controlar botão login e logout
window.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token-iusabndkjanbksd');
  const loginButton = document.getElementById('loginButton');
  const logoutButton = document.getElementById('logoutButton');

  if (token) {
    loginButton.style.display = 'none';
    logoutButton.style.display = 'block';
  } else {
    loginButton.style.display = 'block';
    logoutButton.style.display = 'none';
  }
});

function logout() {
  localStorage.removeItem('token-iusabndkjanbksd');
  window.location.href = 'arquivo.html';
}

