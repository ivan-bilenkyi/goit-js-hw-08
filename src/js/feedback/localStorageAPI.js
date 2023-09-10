import { savigUser } from './savingUser';

const API_KEY = 'feedback-form-state';

export function userSetLocal() {
  const userSet = savigUser();
  localStorage.setItem(API_KEY, JSON.stringify(userSet));
}
export function userGetLocal() {
  if (!localStorage.length) {
    return;
  }
  return JSON.parse(localStorage.getItem(API_KEY));
}
