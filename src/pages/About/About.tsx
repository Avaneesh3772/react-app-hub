import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableData from './TableData';

const About = () => {
  const [data, setData] = useState([]);  

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h4>This is About Component</h4>      
      <Table responsive>
         <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Text</th>
          </tr>
          </thead> 
          <tbody>
           <TableData data ={data}></TableData>
          </tbody>
      </Table>
    </div>
  )
}

export default About