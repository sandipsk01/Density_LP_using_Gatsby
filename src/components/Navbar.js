import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <img src='/navLogo.svg' alt='Density'/>
        <div className='links'>
            <Link to='/'>Career</Link>
            <Link to='/'>Blogs</Link>
            <Link to='/'>Leaderboard</Link>
            <Link to='/'>Fees</Link>
            <Link to='/' className='trade'>TRADE NOW</Link>
        </div>   
    </nav>
  )
}
