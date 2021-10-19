import React, {useState} from 'react';
import Budget from './Components/Budget';
import Form from './Components/Form';


const App = () => {


  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [show, setShow] = useState(true);
  const [expenses, setExpenses] = useState([]);


  //add a new expense 
  const addNewExpense = expense => {
    setExpenses([
      ...expenses,
      expense
    ])
  }

  return ( 
    <div className="container">
      <header>
        <div className="mainContent content">
        <h1>Weekly Expense Tracker</h1>

        {
          show ? 
          (
          <Budget 
            setBudget={setBudget}
            setRemaining={setRemaining}
            setShow={setShow}
            />
          )  :  (
          <div className="row">

            <div className="one-half column">
              <Form 
                addNewExpense={addNewExpense}
              />
            </div>

            <div className="one-half column">
              2
            </div>

          </div>
          )
        } 
        </div>
        
      </header>
    </div>

   );
};
 
export default App;