const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';

const data = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

email.value = data.email ? data.email.trim() : '';
message.value = data.message ? data.message.trim() : '';

form.addEventListener('input', (event) => {
    event.preventDefault();
    data.email = email.value.trim();
    data.message = message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(data));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!(email.value.trim() && message.value.trim())) {
        alert('Both fields are required!')
        return
    };
    console.log(data);
    localStorage.removeItem(localStorageKey);
    form.reset();
});