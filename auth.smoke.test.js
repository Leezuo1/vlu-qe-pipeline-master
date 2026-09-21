const { login } = require('./auth');

describe('Smoke Test - login', () => {
  test('đăng nhập đúng (admin/123) trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
