import React, {useState} from 'react';

const Form = () => {
    return(
    <form>
        <h2>Your Expenses Go Here</h2>
        <div className="field">
            <label>Expense</label>
            <input type="text"
            className='u-full-width'
            placeholder='e.g Food'
            />
        </div>

        <div className="field">
            <label>Price</label>
            <input type="number"
            className='u-full-width'
            placeholder='$10'
            />
        </div>

        <input 
        type="submit" 
        value="Add Your Expense" 
        className="button-primary u-full-width" />
    </form>
    )
}
 
export default Form;
