import React from 'react'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'


const Header = () => {
  return (
    <>
    <header className='fixed-top bg-white shadow' id="header">
      <Topbar />
      <Navbar />
    </header>
    </>
  )
}

export default Header