// src/auth.js
const dummyUser = {
  username: 'testuser',
  password: 'testpassword',
};

export const authenticate = (username, password) => {
  return (
    username === dummyUser.username && password === dummyUser.password
  );
};
