import React, { useState } from 'react'
import Error from './Error';


const Budget= ({ setBudget, setRemaining, setShow}) => {

    const [initialBudget, setInitialBudget] = useState({
        budget:0,
        error:false
    })

    const addBudget = e => {
        e.preventDefault();


        //Validation
        if(initialBudget.budget < 1 || isNaN(initialBudget.budget)){
            setInitialBudget({error:true});
            return;
        }

        //if Validation is OK
        setInitialBudget({
            
            error:false
        });

        setRemaining(initialBudget.budget);
        setShow(false);
    }


    return ( 
        <>
            <h2>What's your Budget For This Week?</h2>
            {initialBudget.error ? <Error message='We Really Hope You Have More Than this'/> : null}

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
 
export default Budget;