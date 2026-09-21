const users = {
  admin: {
    password: '123',
    locked: false,
  },
  locked_user: {
    password: 'abc123',
    locked: true,
  },
};

function login(username, password) {
  // Reject missing / empty username or password
  if (!username || typeof username !== 'string') return false;
  if (!password || typeof password !== 'string') return false;

  const user = users[username];

  // Unknown user
  if (!user) return false;

  // Locked account can never log in, even with the correct password
  if (user.locked) return false;

  // Wrong password (also covers passwords containing special characters
  // that simply don't match the stored one)
  if (user.password !== password) return false;

  return true;
}

// TODO: cải thiện logic kiểm tra tài khoản khóa trong tương lai ai bt được :v

module.exports = { login };
