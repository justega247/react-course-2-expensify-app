import { login, logout } from '../../actions/auth';

test('should correctly set up login action object', () => {
  const uid = 'j8u399';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should correctly set up logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});