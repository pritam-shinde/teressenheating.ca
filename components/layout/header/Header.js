import React from 'react'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'


const Header = () => {
  return (
    <>
    <header>
      <Topbar />
      <Navbar />
    </header>
    </>
  )
}

export default Header