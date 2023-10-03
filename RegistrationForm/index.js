const api = 'https://651be3e0194f77f2a5af0850.mockapi.io/api/v1/register';
const button = document.querySelector('.submit-button');
const emailInput = document.querySelector('input[type="email"]');
const nameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');



let userData = {
    email: "",
    name: "",
    password: "",
}

function registration(userData) {
    console.log("start ");
    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    }).then(res => {
        console.log(JSON.stringify(userData));
        if (res.ok) {
            res.json().then(result => alert(JSON.stringify(result)));
        } else {
            throw new Error('Registration failed');
        }
    })
}



button.addEventListener('click',function(){
registration(userData);
});

emailInput.addEventListener('change', function () {
    if (emailInput.value.trim() != '')
    userData.email = emailInput.value.trim();
});

nameInput.addEventListener('change', function () {
    if (emailInput.value.trim() != '')
    userData.name = nameInput.value.trim();
});

passwordInput.addEventListener('change', function () {
    if (emailInput.value.trim() != '')
    userData.password = passwordInput.value.trim();
});
