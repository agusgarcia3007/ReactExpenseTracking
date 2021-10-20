import React from 'react';
import { CheckBudget } from '../helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({budget, remaining}) => {
    return ( 
        <>
        <div className="alert alert-primary" >
            Budget: ${budget}
        </div>
        <div className={CheckBudget(budget, remaining)}>
            Remaining: ${remaining}
        </div>
        </>
     );
}

BudgetControl.propTypes={
    budget:PropTypes.number.isRequired,
    remaining:PropTypes.number.isRequired
}
 
export default BudgetControl;