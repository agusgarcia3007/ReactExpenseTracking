import React, { useState, useReducer } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = () => {

     
    const [error, setError] = useState(false);

    const formReducer = (state, {type, payload})=>{
        switch(type){
            case 'Expense' :
                return{...state, Expense: payload}
            case 'price':
                return{...state, price: payload}
            case 'id':
                return{...state, id : payload}
            default:
                throw new Error();
        }
    }

    
    const [state, dispatch] = useReducer(formReducer, {
        Expense : '',
        price:0,
        id:shortid.generate()
    });
    
   
    

    //when the user add an expense
    const addExpense = e => {
        e.preventDefault();

        //validation
        if(state.price < 1 || isNaN(state.price) || state.Expense.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //add an expense
        
        console.log(state);

    }

    return(
    <form
        onSubmit={addExpense}
    >
        <h2>Did you spend some money?</h2>

        {error ? <Error message ='Both fields are Required'/> : null}

        <div className="field">
            <label>Expense</label>
            <input type="text"
            className='u-full-width'
            placeholder='e.g Food'
            // name='expense'
            value={state.Expense}
            onChange={e=> dispatch({type: 'Expense', payload:e.target.value})}
            />
        </div>

        <div className="field">
            <label>Price</label>
            <input type="number"
            className='u-full-width'
            placeholder='$10'
            onChange={e => dispatch({type:'price', payload:parseInt(e.target.value)})}
            />
        </div>

        <button
        type="submit" 
        className="button-primary u-full-width" 
        >Add Your Expense</button>
    </form>
    )
}
 
export default Form;
