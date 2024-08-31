import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

// Define a TypeScript interface for the user data
interface User {
    id: number;
    name: string;
    email: string;
}


const ApiCallDemo = () => { 

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorDisplay, setEerrorDisplay] = useState<string | null>(null);

 // Fetch data when the component mounts
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/userss');
        setUsers(response.data); // Set the data to state
        setLoading(false);       // Set loading to false
      } catch (error) {
        if (error instanceof Error) {
            setEerrorDisplay(error.message);    // Set error to state
            setLoading(false);       // Set loading to false
        }        
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  // Handle loading state
  if (loading) {
    return <div>Loading...<Spinner animation="border"/></div>;
  }

  // Handle error state
  if (errorDisplay) {
    return <div>Error: {errorDisplay}</div>;
  }

  return (
    <div>
        ApiCallDemo 
        <ul>
            {users.map(user => (
            <li key={user.id}>
                {user.name} - {user.email}
            </li>
            ))}
        </ul>      
    </div>
  )
}

export default ApiCallDemo