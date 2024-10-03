import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='headerContainer'>
      <h4>This is Header Component</h4>
      <div className="flex-container">
        <div>
           <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/account-information">Account Information</NavLink></li>
            <li><NavLink to="/term-deposit">Term Deposit</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
           
          </ul>
        </div> 
        <div>
            <ul>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/job-lists">Job Lists</NavLink></li>
              <li><NavLink to="/mobile-toggle">Mobile Toggle</NavLink></li>
              <li><NavLink to="/currency">Currency</NavLink></li>
              <li><NavLink to="/date">Date</NavLink></li>
            </ul>
        </div>   
      </div>
    </div>
  )
}

export default Header