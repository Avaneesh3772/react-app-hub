import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

const MobileToggle = () => {
  return (
    <div>MobileToggle
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor 
         sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <Dropdown>
            <Dropdown.Menu>
                <Dropdown.Item ><NavLink to="/term-deposit">Term Deposit</NavLink></Dropdown.Item>
                <Dropdown.Item><NavLink to="/about">About</NavLink></Dropdown.Item>
                <Dropdown.Item><NavLink to="/contact">Contact</NavLink></Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>
        </Dropdown>
    </div>
  )
}

export default MobileToggle