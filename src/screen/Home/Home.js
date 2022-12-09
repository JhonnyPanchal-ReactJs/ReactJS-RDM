import React from 'react';
import { useEffect, useState,useCallback } from 'react';
import axios from 'axios';
import Table from '../../Components/common/Table/Table';
// import DateRange from '../DateRangePicker/DateRange';
import $ from 'jquery';
import Card from '../../Components/common/Card/Card';
import MyPagination from '../../Components/common/Table/MyPagination';
import {Pagination} from 'react-bootstrap';


const Home = () => {
  $('nav').removeClass("tw-hidden");
  const [dataTable, setDataTable] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [page,setPage] = useState(1);

  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setDataTable(res.data))
  //     .catch(err => console.log(err))
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [page]);

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

   

  const column = [
    { heading: 'Id', value: 'id' },
    { heading: 'Title', value: 'title' },
    { heading: 'Body', value: 'body' },
  ]

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

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

        {/* <Table/> */}
        {/* <h1>Dynamic Table</h1>
        <Table data={dataTable} column={column} /> */}
         <Table currentPosts={currentPosts} currentData ={posts}column={column} current ={currentPage} onChangePage={paginate} page={page} />
         {/* <div className='tw-flex tw-justify-end tw-w-full'>
         
        <MyPagination 
          current={currentPage}
           total={currentPosts.length}
           onChangePage={paginate}
        />
      </div> */}
      </div>
    </>
  )
}

export default Home