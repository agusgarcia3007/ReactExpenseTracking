import React, { useReducer } from 'react';


const Form = () => {

    

    const initialState = {
        Expense : '',
        price:0
    }

    const formReducer = (state, {type, payload})=>{
        switch(type){
            case 'Expense' :
                return{...state, Expense: payload}
            case 'price':
                return{...state, price: payload}
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(formReducer, initialState);

    return(
    <form
        
    >
        <h2>Your Expenses Go Here</h2>
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
            // name='price'
            value={state.price}
            onChange={e => dispatch({type:'price', payload:e.target.value})}
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
