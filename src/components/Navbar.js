import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>Density</h1>
        <div className='links'>
            <Link to='/'>Career</Link>
            <Link to='/'>Blogs</Link>
            <Link to='/'>Leaderboard</Link>
            <Link to='/'>Fess</Link>
            <Link to='/'>TRADE NOW</Link>
        </div>
    </nav>
  )
}
