import React from 'react'

function Navigation() {
  return (
    <div>
     <nav className='container'>
        <div className="logo">
          <img src="/Images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className='nav-btn'>
        <button >Login</button>
        </div>
      </nav>
   
    </div>
  )
}

export default Navigation
