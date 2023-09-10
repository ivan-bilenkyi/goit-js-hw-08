export function savigUser() {
  const user = {};
  new FormData(event.currentTarget).forEach((value, name) => {
    user[name] = value;
  });

  return user;
}
