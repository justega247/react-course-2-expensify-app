import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';

// My version
// export const ExpensesSummary = (props) => (
//   <div>
//     {
//       props.expenseCount.length > 1 ? (
//         <h1>Viewing {props.expenseCount.length} expenses totalling {props.expensesTotal}</h1>
//     ) : (
//         <h1>Viewing {props.expenseCount.length} expense totalling {props.expensesTotal}</h1>
//       )
//   }
//   </div>
// );

// const mapStateToProps = (state) => {
//   return {
//     expenseCount: selectExpenses(state.expenses, state.filters),
//     expensesTotal: numeral(getTotalExpenses(selectExpenses(state.expenses, state.filters)) / 100).format('$0,0.00')
//   }
// };

// Andrew's version
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getTotalExpenses(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);

