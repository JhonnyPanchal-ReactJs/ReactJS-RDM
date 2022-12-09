import React, { useState, useEffect, useCallback } from 'react';
import './Table.css'
import axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
import Pagination from './Pagination';
import MyPagination from './MyPagination';
import 'bootstrap/dist/css/bootstrap.min.css'
// import MyPagination from'./MyPagination';
const Table = ({ data, column }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [page,setPage] = useState(1);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
      console.log("Checking", posts)
    };

    fetchPosts();
  }, [page]);

  const handleChangePage  = useCallback((currentPage) => {
    setPage(currentPage)
  },[])
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
        {currentPosts.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
      <MyPagination
        current={currentPage}
        total={currentPosts.length}
       // paginate={paginate}
        onChangePage={paginate}
      />
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