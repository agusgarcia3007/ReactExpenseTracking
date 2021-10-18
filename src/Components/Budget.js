import React, { useState } from 'react'
import Error from './Error';


const Budget= () => {

    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false)


    //add Budget
    const addBudget = e => {
        e.PreventDefault();


        //Validation
        if(amount < 1 || isNaN(amount)){
            setError(true);
            return;
        }

        //if Validation is OK
        setError(false);
    }


    return ( 
        <>
            <h2>What's your Budget For This Week?</h2>
            {error ? <Error/> : null}

            <form
                onSubmit={addBudget}
            >
                
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder="Write a Cool Number Please💸"
                    onChange={e => {setAmount(parseInt(e.target.value),10);}}
                />

                <input type="submit"
                    className='button-primary u-full-width'
                    value='Add Budget'
                />

            </form>
        </>
     );
}
 
export default Budget;