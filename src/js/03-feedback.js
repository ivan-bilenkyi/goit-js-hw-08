import { refs } from './feedback/refs';
import { savigUser } from './feedback/savingUser';
import { userSetLocal } from './feedback/localStorageAPI';
import { userGetLocal } from './feedback/localStorageAPI';

refs.form.addEventListener('submit', formSubmit);
const API_KEY = 'feedback-form-state';
userGetLocal();
const saveUser = userGetLocal();
function formSubmit(event) {
  event.preventDefault();
  const user = savigUser();
  userSetLocal();
  refs.form.reset();
}

refs.input.value = `${saveUser.email}`;
refs.textarea.textContent = `${saveUser.message}`;
