import React from 'react'
import jobs from '../../assets/mockdata/jobs.json'
import Job from './Job';

const JobLists = () => {
  console.log("jobs =>", jobs);
  return (
    <div>
        <h4>This is Job List Component</h4>       
        {jobs.map((item:any, index) => (
          <Job key={item.id} item={item} ></Job>
        ))}      
    </div>
  )
}

export default JobLists