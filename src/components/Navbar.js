import React from 'react'
import '../App.css'
import facebook from '../fb.png'
import insta from '../insta.png'

export default function Navbar() {
  return (
    <nav>   
        <div style={{display:'flex', flexWrap:'wrap'}}>
            <a href='#about'>About</a>
            <a href='#prices'>Prices</a>
            <a href='#gallery'>Gallery</a>
            <a href='#contact'>Contact</a>
  
        </div>



        <div id='socials'>
          <a href='https://www.facebook.com' target='_blank'><img className='social-icon' src={facebook} alt='facebook'/></a>
          <a href='https://www.instagram.com' target='_blank'><img className='social-icon' src={insta} alt='instagram'/></a>

        </div>
    </nav>
  )
}
