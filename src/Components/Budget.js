import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Budget= ({setBudgets}) => {

    const [initialBudget, setInitialBudget] = useState({
        budget:0,
        error:false
    })

    const {budget, error} = initialBudget;

    const addBudget = e => {
        e.preventDefault();


        //Validation
        if(budget < 1 || isNaN(budget)){
            setInitialBudget({error:true});
            return;
        }

        //if Validation is OK
        setInitialBudget({
            error:false
        });
        
        setBudgets({
            budget,
            remaining:budget,
            showError:false
        });
        
    }


    return ( 
        <>
            <h2>What's your Budget For This Week?</h2>
            {error ? <Error message='We Really Hope You Have More Than this'/> : null}

            <form
                
            >
                
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder="Write a Cool Number Please💸"
                    onChange={e => setInitialBudget({budget:parseInt(e.target.value)})}
                />

                <input type="button"
                    className='button-primary u-full-width'
                    value='Add Budget'
                    onClick={addBudget}
                />

            </form>
        </>
     );
}

Budget.propTypes={
    setBudgets:PropTypes.func.isRequired
}
 
export default Budget;