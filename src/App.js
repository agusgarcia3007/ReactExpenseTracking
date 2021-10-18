import React, {useState} from 'react';
import Budget from './Components/Budget';
import Form from './Components/Form';


const App = () => {


  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return ( 
    <div className="container">
      <header>
        
        

        <div className="contenido-principal contenido">
        <h1>Weekly Expense Tracker</h1>
          <Budget 
          setBudget={setBudget}
          setRemaining={setRemaining}

          />


          <div className="row">
            <div className="one-half column">
              <Form />
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
        
      </header>
    </div>

   );
};
 
export default App;