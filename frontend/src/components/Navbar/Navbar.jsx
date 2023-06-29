import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <h1 className='navbar-header'>TheKiet</h1>
        <div className='navbar-flex'>
          <div className='navbar-user'>
            <h5 className='navbar-user__heading'>Handicrafts by</h5>
            <p className='navbar-user__para'>Jim HLS</p>
          </div>
          <img className='navbar-image' src="https://images.pexels.com/photos/8608389/pexels-photo-8608389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar