import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../commoncomponents/Nav'

import Footer from '../commoncomponents/Footer'

const CommonLayout = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default CommonLayout