import authReducer from '../../reducers/auth';

test('should setup a uid property on login', () => {
  const action = {
    type: 'LOGIN',
    uid: '8893hud'
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toBe(action.uid);
});

test('should remove uid property on logout', () => {
  const action = {
    type: 'LOGOUT'
  };

  const currentState = {
    uid: '83093ujjdj'
  };

  const state = authReducer(currentState, action);
  expect(state.uid).toBeFalsy();
});