import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({addNewExpense}) => {

    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('')
    const [error, setError] = useState(false);
   

    

   
    

    //when the user add an expense
    const addExpense = e => {
        e.preventDefault();

        //validation
        if(price <1 ||isNaN(price) || description.trim()===''){
            setError(true);
            return;
        }
        //add an expense
        const expense = {
            description,
            price,
            id:shortid.generate()
        }
        addNewExpense(expense);

        //reset the form
        setDescription('');
        setPrice('')
        

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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>

        <div className="field">
            <label>Price</label>
            <input type="number"
            className='u-full-width'
            placeholder='$10'
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
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
