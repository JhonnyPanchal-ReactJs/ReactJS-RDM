import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../Components/common/Table/Table';
import DateRange from '../DateRangePicker/DateRange';

const Home = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name1', value: 'name' },
    { heading: 'Email1', value: 'email' },
    { heading: 'Phone1', value: 'phone' },
    { heading: 'City1', value: 'address.city' },
  ]

  return (
    <>
      <div className="App">
        <h1>Dynamic Table</h1>

        <DateRange />

        <Table data={dataTable} column={column} />
      </div>
    </>
  )
}

export default Home