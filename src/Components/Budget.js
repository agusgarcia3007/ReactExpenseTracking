import React, { useState, useReducer } from 'react'
import Error from './Error';


const Budget= ({ setBudget, setRemaining, setShow}) => {

    const initialState = {
        amount:0,
        error:false
    }

    // const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false)

    const formReducer = (state, {type, payload})=>{
        switch(type){
            case 'amount' :
                return{...state, amount: payload}
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(formReducer, initialState);

    //add Budget
    const addBudget = e => {
        // e.PreventDefault();


        //Validation
        if(state.amount < 1 || isNaN(state.amount)){
            setError(true);
            return;
        }

        //if Validation is OK
        setError(false);
        setBudget(state.amount);
        setRemaining(state.amount);
        setShow(false);
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
                    value={state.amount}
                    onChange={e => dispatch({type:'amount', payload:e.target.value})}
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