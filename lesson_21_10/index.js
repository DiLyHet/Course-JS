export function finishForm() {
    const login = document.createElement('input');
    const form = document.querySelector('form');
    const password = document.querySelector('input[name="password"]')
    form.prepend(login);
    login.setAttribute('name', 'login');
    login.setAttribute('type', 'text');
    password.setAttribute('type', 'password');
}