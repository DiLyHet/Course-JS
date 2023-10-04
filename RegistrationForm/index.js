const api = 'https://651be3e0194f77f2a5af0850.mockapi.io/api/v1/register';
const emailInput = document.querySelector('input[type="email"]');
const nameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const form = document.querySelector('.login-form');
const button = document.querySelector('.submit-button');



function registration() {
    checkValidation();
    const formElem = document.querySelector('.login-form');
    const formData = Object.fromEntries(new FormData(formElem));
    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }).then(res => {
        console.log(JSON.stringify(formData));
        if (res.ok) {
            res.json().then(result => alert(JSON.stringify(result)));
            form.reset();
            checkValidation();
        } else {
            throw new Error('Registration failed');
        }
    })
}

passwordInput.addEventListener('keyup', function () {
    checkValidation();
});

function checkValidation() {
    if (form.reportValidity()) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'disabled');
    }
}

onsubmit = function onFormSubmit(event) {
    event.preventDefault();
    registration();
}


