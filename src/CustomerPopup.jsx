import React, { useEffect, useState } from 'react'
import customersData from './name.json'
import { lightColors } from './color';

const CustomerPopup = ({onSelect}) => {
  //   console.log(onSelect);

  const [searchText, setSearchText] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const handleSearch = (event) => {
    const inputText = event.target.value;
  
 if (inputText.startsWith("@")) {
  // console.log('@' +inputText);
  setSearchText(inputText);
  // if (inputText.trim() === '') {
  //   setFilteredCustomers([]);
  //   return;
  // }

  const searchResults = customersData.data.filter((customer) => {
    const fullName = '@' + customer.name.split(" ").join("").toLowerCase();
    return fullName.split("").slice(1).join("").includes(inputText.split("").slice(1).join("").toLowerCase());
  });
  setFilteredCustomers(searchResults);
}
else {
  setSearchText(inputText);
 
}
  };

  const handleSelectCustomer = (customer) => {
      onSelect(customer.name);
    setSearchText("@ " + customer.name);
    setFilteredCustomers([]);
  };
useEffect(()=>{
  if(searchText===""){
    setFilteredCustomers([])
  }
},[searchText])
  return (
    <div className="customer-popup">
     
      <div className="mapData">
      {filteredCustomers.length !== 0 &&  filteredCustomers.map((customer) => (
            
            <ul>
            <li key={customer.id} onClick={() => handleSelectCustomer(customer)}>
              <div className='nameList'>
                <h1 style={{backgroundColor:`${lightColors[customer.name.split("").shift().toLowerCase().charCodeAt(0) - 96]}`}}>{customer.name.split("").shift().toUpperCase()}</h1>
                <h2>{customer.name}</h2>
              <p>{'@' + customer.name}</p>
              </div>
            </li>
            </ul>
          )) 
      }
      </div>
       <input
        type="text"
        placeholder="Type @ to see all customers"
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
}

export default CustomerPopup







// setSearchText(inputText);

// // if (inputText.trim() === '') {
// //   setFilteredCustomers([]);
// //   return;
// // }
//   console.log(inputText.trim());
// const searchResults = customersData.data.filter((customer) => {
//   const fullName = customer.name.toLowerCase();
//   console.log(fullName,'+',inputText);
//   // console.log(fullName.includes(inputText.toLowerCase()));
//   return fullName.includes(inputText.toLowerCase());
// });

// setFilteredCustomers(searchResults);