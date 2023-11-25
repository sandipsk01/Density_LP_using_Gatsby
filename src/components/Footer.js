import React from 'react'
import { Link } from 'gatsby'
export default function Footer() {
  return (
    <footer>
        <img src='/footer.svg' alt='Density'/>
        <div className='links'>
        <Link to='/'>Blog</Link>
            <Link to='/'>Fees</Link>
            
            <Link to='/'>Leaderboard</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Privacy Policy</Link>
        </div>
        <div>
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. 
        </div>
        <div className='social'>
            <img src='/Facebook.svg'/>
            <img src='/Twitter.svg'/>
            <img src='/Linkedin.svg'/>
            <img src='/Instagram.svg'/>
        </div>
    </footer>
  )
}
