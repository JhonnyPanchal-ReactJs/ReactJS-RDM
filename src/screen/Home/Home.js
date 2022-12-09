import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../Components/common/Table/Table';

const Home = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]

  return (

    <>
      
      <div className="App">
        <Table/>
        {/* <h1>Dynamic Table</h1>
        <Table data={dataTable} column={column} /> */}
      </div>
    </>
  )
}

export default Home