const api = 'https://651be3e0194f77f2a5af0850.mockapi.io/api/v1/register';
const emailInput = document.querySelector('input[type="email"]');
const nameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const form = document.querySelector('.login-form');
const button = document.querySelector('.submit-button');

function registration(formData) {
  return fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
}

const clearForm = () => {
  form.reset();
  onInputChange();
};

const onError = error => {
  console.error(error);
  alert('Error occurred during registration');
};

const onSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(form));

  registration(formData)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Registration failed');
      }
    })
    .then(data => {
      alert(JSON.stringify(data));
      clearForm();
    })
    .catch(onError);
}

const onInputChange = () => {
  const isValidForm = form.checkValidity();
  if (isValidForm) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', true);
  }
};

emailInput.addEventListener('input', onInputChange);
passwordInput.addEventListener('input', onInputChange);
nameInput.addEventListener('input', onInputChange);
form.addEventListener('submit', onSubmit);
