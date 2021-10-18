import React from 'react';
import Budget from './Components/Budget';


const App = () => {
  return ( 
    <div className="container">
      <header>
        
        

        <div className="contenido-principal contenido">
        <h1>Weekly Expense Tracker</h1>
          <Budget />
        </div>
        
      </header>
    </div>

   );
};
 
export default App;