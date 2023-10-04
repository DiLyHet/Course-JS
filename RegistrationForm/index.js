const api = 'https://651be3e0194f77f2a5af0850.mockapi.io/api/v1/register';
const emailInput = document.querySelector('input[type="email"]');
const nameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const form = document.querySelector('.login-form');
const button = document.querySelector('.submit-button');



let userData = {
    email: "",
    name: "",
    password: "",
}

function registration(userData) {
    if (form.reportValidity() === true) {

        fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }).then(res => {
            console.log(JSON.stringify(userData));
            if (res.ok) {
                res.json().then(result => alert(JSON.stringify(result)));
                form.reset();
            } else {
                throw new Error('Registration failed');
            }
        })
    } else {
        console.log(ghj);
    }

}

emailInput.addEventListener('change', function () {
    if (emailInput.value.trim() != '')
        userData.email = emailInput.value.trim();
    checkValidation();
});

nameInput.addEventListener('change', function () {
    if (emailInput.value.trim() != '')
        userData.name = nameInput.value.trim();
    checkValidation();
});

passwordInput.addEventListener('change', function () {
    if (emailInput.value.trim() != '')
        userData.password = passwordInput.value.trim();
    checkValidation();
});

// function checkValidation() {
//     if (form.reportValidity()) {
//         button.removeAttribute('disabled');
//     } else {
//         button.setAttribute('disabled', 'disabled');
//     }
// }

onsubmit = function onFormSubmit(event) {
    event.preventDefault();
    registration(userData);
}