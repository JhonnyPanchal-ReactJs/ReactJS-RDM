import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../Components/common/Table/Table';
// import DateRange from '../DateRangePicker/DateRange';
import $ from 'jquery';
import Card from '../../Components/common/Card/Card';

const Home = () => {
  $('nav').removeClass("tw-hidden");
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
        {/* Card Section Start */}
        <div>
          <h3 className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900 dark:tw-text-white">Last 30 days</h3>
          <dl className="tw-mt-5 tw-grid tw-grid-cols-1 tw-gap-5 sm:tw-grid-cols-2 lg:tw-grid-cols-4">
            <Card title={"New Red Alerts"} value={30} />
            <Card title={"Red Alerts"} value={41} />
            <Card title={"New Yellow Alerts"} value={19} />
            <Card title={"Yellow Alerts"} value={23} />
          </dl>
        </div>
        {/* Card Section End */}

        {/* <DateRange /> */}

        <Table/>
        {/* <h1>Dynamic Table</h1>
        <Table data={dataTable} column={column} /> */}
      </div>
    </>
  )
}

export default Home