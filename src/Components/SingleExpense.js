import React from 'react'
import PropTypes from 'prop-types';

const SingleExpense = ({expense}) => (
    <li className="expenses">
        <p>
            {expense.description}
            
            <span className="expense">
                $ {expense.price}
            </span>
        </p>
    </li>
)

SingleExpense.propTypes={
    expense: PropTypes.object.isRequired
}

export default SingleExpense;