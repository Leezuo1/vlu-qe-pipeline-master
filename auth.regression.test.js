const { login } = require('./auth');

// Regression Test: kiểm tra đầy đủ các trường hợp ngoại lệ để đảm bảo
// những thay đổi sau này không làm hỏng các luồng đã hoạt động đúng.
describe('Regression Test - login', () => {
  test('đăng nhập đúng (admin/123) vẫn trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('sai mật khẩu -> trả về false', () => {
    expect(login('admin', 'wrongpassword')).toBe(false);
  });

  test('username rỗng -> trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('password rỗng -> trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('username và password đều rỗng -> trả về false', () => {
    expect(login('', '')).toBe(false);
  });

  test('mật khẩu chứa ký tự đặc biệt (không khớp) -> trả về false', () => {
    expect(login('admin', '!@#$%^&*()')).toBe(false);
  });

  test('tài khoản không tồn tại -> trả về false', () => {
    expect(login('unknown_user', '123')).toBe(false);
  });

  test('tài khoản bị khóa (đúng mật khẩu) -> trả về false', () => {
    expect(login('locked_user', 'abc123')).toBe(false);
  });

  test('username hoặc password không phải string -> trả về false', () => {
    expect(login(null, '123')).toBe(false);
    expect(login('admin', null)).toBe(false);
    expect(login(undefined, undefined)).toBe(false);
  });
});
