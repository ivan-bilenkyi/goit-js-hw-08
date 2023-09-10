import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

const user = {};
form.addEventListener(
  'input',
  throttle(event => {
    user.email = input.value;
    user.message = textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, 500)
);

if (localStorage.getItem(STORAGE_KEY)) {
  input.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
  textarea.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.clear();
  form.reset();
}
