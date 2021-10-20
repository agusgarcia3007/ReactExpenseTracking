import React, { useState, useEffect } from 'react';
import Budget from './Components/Budget';
import Form from './Components/Form';
import List from './Components/List';
import BudgetControl from './Components/BudgetControl';


const App = () => {

  let initialExpenses = JSON.parse(localStorage.getItem('expenses'));
    if(!initialExpenses){
      initialExpenses = [];
    }
  
  const [budgets, setBudgets] = useState({
    budget:0,
    remaining:0,
    showInput:true,
  })
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense]=useState(false)

  useEffect(() => {
    //save expense on localStorage
    initialExpenses ?
    localStorage.setItem('expenses', JSON.stringify(expenses)) :
    localStorage.setItem('expenses', JSON.stringify([]));
  },[expenses, initialExpenses]);

  const {budget, remaining, showInput} = budgets;

  //useEffect to update the remaining
  useEffect(() => {

    //set the new expense
      if(createExpense){
        setExpenses([
          ...expenses,
          expense
      ])

      //remaining budget
      const remainingBudget = remaining - expense.price;
      setBudgets({
        budget,
        remaining:(remainingBudget)
      });

      setCreateExpense(false)
      }

      
  }, [expense, remaining, createExpense, budget, expenses])

  return ( 
    <div className="container">
      <header>
        <div className="mainContent content">
        <h1>Weekly Expense Tracker</h1>

        {
          showInput ? 
          (
          <Budget 
            setBudgets={setBudgets}
            />
          )  :  (
          <div className="row">

            <div className="one-half column">
              <Form 
                setExpense={setExpense}
                setCreateExpense={setCreateExpense}
              />
            </div>

            <div className="one-half column">
              <List 
                expenses={expenses}
              />
              
              <BudgetControl 
                budget={budget}
                remaining={remaining}
              />
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