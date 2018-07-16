import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '12abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('12abc', { note: 'new Note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12abc',
    updates: { note: 'new Note' }
  });
});

test('should setup add expense object with provided value', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was for last rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData,
    }
  })
});

test('should setup add expense object with default value', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
});