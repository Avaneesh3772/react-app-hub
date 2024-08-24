import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  return (
    <div>
        <Header></Header>
        <div className='mainLayout'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout