import React from 'react';
import SingleExpense from './SingleExpense';
import PropTypes from 'prop-types';



const List = ({expenses}) => (
    <div className="expenses-done">
        <h2>List</h2>
        {expenses.map(expense=> (
           
            <SingleExpense 
            key={expense.id}
            expense={expense}
            />
            
        ))}
    </div>
)

List.propTypes={
    expenses:PropTypes.array.isRequired
}
export default List;