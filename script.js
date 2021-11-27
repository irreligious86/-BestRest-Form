const form = document.querySelector('.form-screen');
const formValues = form.querySelectorAll('.form-input')
const validBtn = form.querySelector('.form-button');

const firstName = form.querySelector('#first-name');
const secondName = form.querySelector('#second-name');
const country = form.querySelector('#country');
const phone = form.querySelector('#phone');
const password = form.querySelector('#password');
const confirmPassword = form.querySelector('#confirm-password');
const email = form.querySelector('#email');
const agreement = form.querySelector('#agreement');


form.addEventListener('submit', event => {
    event.preventDefault();

    const cleanErrors = () => {
        let errors = form.querySelectorAll('.error');
        for (var i = 0; i < errors.length; i++) {errors[i].remove()}
    }

    cleanErrors();

    const generateError = (element, message) => {
        let error = document.createElement('div');
        error.className = 'err-msg';
        error.innerHTML = message;
        element.parentElement.insertBefore(error, element);
    }

    for (let i = 0; i < formValues.length; i++) {
        if (!formValues[i].value) {
            generateError(formValues[i], 'Cannot be blank')
        }
    }

    if (password.value !== confirmPassword.value) {
        generateError(password, 'Passwords doesnt match')
    }

})