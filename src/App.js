import { useState } from 'react';
import './App.css';
import CustomerPopup from './CustomerPopup'
import OutputData from './OutputData';
function App() {
  const [outputName,setOutputName]=useState('')
  const handleCustomerSelect = (customer) => {
    console.log('Selected customer:', customer);
    setOutputName(customer);
    // Do something with the selected customer
  };
  return (
    <div className="App">
    <h1>User Name Searching</h1>
    <div className="output">
    {outputName !=='' ? <OutputData outputName={outputName}/> :''}
    </div>
      <CustomerPopup onSelect={handleCustomerSelect} />
    </div>
  );
}

export default App;
