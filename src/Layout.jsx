import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Offer from './Components/Offer'

const Layout = () => {
  return (
    <>
    <Offer/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout