import React, { useState, useEffect, useCallback } from 'react';
import './Table.css'
import axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
import {Pagination} from 'react-bootstrap';
import MyPagination from './MyPagination';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLayoutEffect } from 'react';
// import MyPagination from'./MyPagination';
const Table = ({ currentPosts, column,current,onChangePage,currentData}) => {

  let items = [];
 
  if (current > 1) {
      items.push(<Pagination.First key="first" onClick={() => onChangePage(1)} />)
      items.push(<Pagination.Prev key="prev" onClick={() => onChangePage(current - 1)} />)
  }

  for (let page = 1; page <= currentPosts.length; page++) {
      items.push(
          <Pagination.Item key={page} data-page={page} active={page === current} onClick={() => onChangePage(page)}>
              {page}
          </Pagination.Item>
      )
  }
  if (current < currentPosts.length) {
      items.push(<Pagination.Next key="next" onClick={() => onChangePage(current + 1)} />)
      items.push(<Pagination.Last key="last" onClick={() => onChangePage(current + 9)} />)

  }
 
  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
     
   
  
    </div>
  );

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [currentPage1,setCurrentPage] = useState(currentPage1);
  const [postsPerPage] = useState(10);

  useEffect(() => {

  });


  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setPosts(res.data);
  //     setLoading(false);
  //     console.log("Checking", posts)
  //   };

  //   fetchPosts();
  // }, [page]);

  const handleChangePage  = useCallback((currentPage) => {
    console.log("tablechangenewdata", currentPosts)
   // setCurrentPage(currentPage)
  },[])
  // // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
   //const paginate = pageNumber => currentPage1(pageNumber);


  return (
    <div>
      <ReactBootStrap.Table className='tw-bg-white tw-text-black dark:tw-bg-gray-800 dark:tw-text-white' bordered>
        <thead>
          <tr>
          {
            column.map((value, key) => {
              return (
                <th key={value.heading}> {value.heading} </th>
              )
            })
          }


            {/* <th>ID</th>
            <th>Title</th>
            <th>Body</th> */}
          </tr>
        </thead>
        <tbody>
          {
            currentPosts.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.id }</td>
                  <td>{value.title}</td>
                  <td>{value.body}</td>
                </tr>
              )
            })
          }
        </tbody>
      </ReactBootStrap.Table>
    
      <div className='tw-flex tw-justify-end tw-w-full'>
      
          {paginationBasic}
        {/* <MyPagination 
          current={currentPage}
           total={currentPosts.length}
        // // paginate={paginate}
           onChangePage={handleChangePage}
        /> */}
      </div>
    </div>
    // <table>
    //   <thead>
    //     <tr>
    //       {column.map((item, index) => <TableHeadItem item={item} />)}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((item, index) => <TableRow item={item} column={column} />)}
    //   </tbody>
    // </table>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {

      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
      }

      return <td>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)

export default Table