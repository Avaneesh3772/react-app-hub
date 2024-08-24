import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const AccountBalance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []); */

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
   */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); */

  return (
    <div>
      <h4>This is AccountBalance Component</h4>
      {/* <ul>
        {data.map((item:any, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul> */}
      <Table responsive>
         <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
          </thead> 
          <tbody>
          {data.map((item:any, index) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
          ))}
          </tbody>
      </Table>
    </div>
  )
}

export default AccountBalance