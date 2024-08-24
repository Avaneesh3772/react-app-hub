import React from 'react'
import PropTypes from 'prop-types'
import { JobType } from '../../models/models'
import './Job.css'

const Job = (props: { item: JobType }) => {
  console.log('Each job =>', props.item)
  return (
    <>
      <div className='jobContainer'>
          <div className='jobWrapper'>
            <p>{props.item.id} - {props.item.title}</p>           
            <p>{props.item.type} - {props.item.location}</p> 
            <p>{props.item.description}</p>
            <button>Read More</button>
          </div>
      </div>
    </>
  )
}



export default Job