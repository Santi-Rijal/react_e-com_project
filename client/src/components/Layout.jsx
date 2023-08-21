import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout