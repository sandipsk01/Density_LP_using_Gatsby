import React from 'react'
import Navbar from './Navbar'
import '../styles/test.css';
export default function Layout({children}) {
  return (
    <div className='layout'>
      <Navbar/>
      <div className='content'>
        {children}
      </div>
      <footer>
        <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </p>
      </footer>
    </div>
  )
}
