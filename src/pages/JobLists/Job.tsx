import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { JobType } from '../../models/models'
import './Job.css'
import { FaCircleUser } from "react-icons/fa6";

const Job = (props: { item: JobType }) => {
  console.log('Each job =>', props.item)
  let description = props.item.description;
  const [showFullDescription, setShowFullDescription] = useState(false);
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }
  const clickMe = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const element = event.target as HTMLButtonElement;
    console.log("Button Clicked", element.value)
  }
  return (
    <>
      <div className='jobContainer'>
          <div className='jobWrapper'>
            <p>{props.item.id} - {props.item.title} <FaCircleUser color='blue' size='20px'/></p>           
            <p>{props.item.type} - {props.item.location}</p> 
            <p>{description}</p>
            <button onClick={() => setShowFullDescription((prevState) => !prevState)}>
              {showFullDescription ? 'Read Less' : 'Read More'}
            </button>&nbsp;&nbsp;
            <button onClick={clickMe}>
              Click Me
            </button>
          </div>
      </div>
    </>
  )
}



export default Job