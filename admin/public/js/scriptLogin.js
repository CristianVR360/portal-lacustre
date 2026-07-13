const form = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const showPasswordButton = document.getElementById('show-password');
const checkbox = document.querySelector('#myCheckbox');
const inputSecretKey = document.querySelector('#secret_key');
const inputEmail = document.querySelector('#email');

const button = document.querySelector('#buttonFuncionality');

let canUpdateUser = false;

const responseAlertCreate = (message, error = false) => {
  const responseAlert = document.createElement('div');
  responseAlert.className = `alert ${error ? 'alert-danger' : 'alert-primary'}`;
  responseAlert.innerHTML = message;
  form.prepend(responseAlert);

  setTimeout(() => {
    responseAlert.remove();
  }, 2300);
};

checkbox.addEventListener('change', function () {
  if (this.checked) {
    inputSecretKey.removeAttribute('disabled');
    inputEmail.setAttribute('disabled', '');
    button.textContent = 'Update';
    canUpdateUser = true;
  } else {
    inputSecretKey.setAttribute('disabled', '');
    inputEmail.removeAttribute('disabled');
    button.textContent = 'Login';
    canUpdateUser = false;
  }
});

showPasswordButton.addEventListener('click', () => {
  const type =
    passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  showPasswordButton.querySelector('i').classList.toggle('bi-eye');
  showPasswordButton.querySelector('i').classList.toggle('bi-eye-slash');
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  let url = `${window.location.origin}${
    canUpdateUser ? '/api/users' : '/api/login'
  }`;

  console.log(canUpdateUser);

  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  if (canUpdateUser) {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const dataJSON = await response.json();

      if (response.status === 200) {
        responseAlertCreate('Usuario actualizado correctamente');
      } else {
        responseAlertCreate(
          'Error al crear usuario por favor, intentelo de nuevo',
          true
        );
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const dataJSON = await response.json();

      if (response.status === 200) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 2 * 60 * 60 * 1000);

        document.cookie = `jwt=${
          dataJSON.token
        }; expires=${expirationDate.toUTCString()}; path=/`;

        window.location.href = `${window.location.origin}/adminForm.html`;
      } else {
        const errorElement = document.createElement('div');
        errorElement.className = 'alert alert-danger';
        errorElement.innerHTML = 'Credenciales Erroneas';
        form.prepend(errorElement);
      }
    } catch (error) {
      console.error(error);
    }
  }
});
