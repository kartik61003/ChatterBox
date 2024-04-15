import React from 'react'
import {Outlet } from 'react-router-dom'
import Header from '../components/Messenger'



const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout
