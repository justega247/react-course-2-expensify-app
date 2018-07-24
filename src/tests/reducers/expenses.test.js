import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expenses value', () => {
  // action.type in this case is '@@INIT' which only returns the default
  // initial state
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove an expense if id is invalid', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '4'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'Water bill',
      note: '',
      amount: 0,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'Water bill',
      note: 'Money for water bill',
      amount: 0,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('Money for water bill');
});

test('should not edit an expense that is not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '99',
    updates: {
      description: 'Water bill',
      note: 'Money for water bill',
      amount: 0,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});