import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Table from './components/Table/Table';

function App() {
  const [customers, setCustomers ] = useState("");
  const [query, setQuery] = useState("");

  const search = (data)=>{
    return data?.filter((item)=>item.firstName.toLowerCase().includes(query) || item.orders.date?.includes(query));
    console.log(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/customers-info");
      setCustomers(data);
      console.log("customers info", data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <input
        type='text'
        placeholder='Search'
        className='search'
        onChange={e=> setQuery(e.target.value)} />
        <Table customer={search(customers.data)} />
      
    </div>
  );
}

export default App;
