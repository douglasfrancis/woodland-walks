import React from 'react'
import './Gallery.css'
import winter from '../images/winter.png'
import tilly from '../images/tilly.png'
import canal from '../images/canal.png'
import field from '../images/field.png'
import cloud from '../images/cloud.png'
import bonnie from '../images/bonnie.png'
import two from '../images/two-dogs.jpg'
import car from '../images/tilly-car.jpg'
import big from '../images/big-dog.jpg'

export default function Gallery() {
  return (
    <div className='blue' id='gallery'>
      <h1>Gallery</h1>

      <div id='gallery-container'>
        <img className='gallery-img' src={winter} alt='Winter'/>
        <img className='gallery-img' src={tilly} alt='Friends'/>
        <img className='gallery-img' src={canal} alt='Canal'/>
        <img className='gallery-img' src={two} alt='Two Dogs'/>

        <img className='gallery-img' src={field} alt='Field'/>
        <img className='gallery-img' src={cloud} alt='Cloud'/>
        <img className='gallery-img' src={big} alt='Big dogs'/>

        <img className='gallery-img' src={car} alt='Tilly in car' style={{objectPosition:'top'}}/>

        <img className='gallery-img' src={bonnie} alt='Bonnie'/>

      </div>
    </div>
  )
}
