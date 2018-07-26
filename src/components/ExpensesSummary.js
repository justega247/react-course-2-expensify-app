import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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

