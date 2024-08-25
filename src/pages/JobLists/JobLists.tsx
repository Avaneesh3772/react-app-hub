import React, { useEffect, useState } from 'react'
import jobs from '../../assets/mockdata/jobs.json'
import Spinner from 'react-bootstrap/Spinner';
import Job from './Job';
import { JobType } from '../../models/models'


const JobLists = () => {
  const [jobInfo, setjobInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("jobs =>", jobs);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setjobInfo(jobInfo);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
        <h4>This is Job List Component</h4> 

        {loading ? (
          <Spinner animation="border"/>         
        ) : (
          <div className='jobListings'>
            {jobs.map((item:any, index) => (
              <Job key={item.id} item={item} ></Job>
             ))}  
          </div>
        )}            
    </div>
  )
}

export default JobLists