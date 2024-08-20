import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='flex min-h-screen flex-col font-code'>
    <Header/>
    <Outlet/>
    </div>
  )
}

export default Layout