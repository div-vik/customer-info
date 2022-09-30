import React, { useState, useEffect } from 'react';
import "./components/Search.css"
import "./components/Table.css";
import axios from 'axios';
import Customers from './components/Customers';

function App() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get("http://localhost:5000/customers-info")
    .then(res => {
      setCustomers(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
}, []);

  const handleChange = e => {
    const searchTerm = e.currentTarget.value;
    axios.get("/customers-info")
  };

  const filteredCustomers = customers.filter(customer =>
    customer.firstName.includes(search)||customer.date.includes(search)
  );

  return (
    <div className="App">
      <div class="wrap">
          <div class="search">
                <input type="text" className="searchTerm" placeholder="Search" onChange={handleChange} />
                <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
          </div>
      </div>
      {filteredCustomers.map(customer => {
        return (
          <Customers
            key={customer._id}
            customerId={customer.customerId}
            firstName={customer.firstName}
            lastName={customer.lastName}
            orderId={customer.D}
            amount={customer.amount}
            date={customer.date}
          />
        );
      })}
    </div>
  );
}

export default App;
