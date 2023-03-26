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
        <img className='gallery-img' src={winter} alt='Winter dog walk congleton'/>
        <img className='gallery-img' src={tilly} alt='Westie'/>
        <img className='gallery-img' src={canal} alt='Canal dog walk congleton'/>
        <img className='gallery-img' src={two} alt='Two Dogs dog walk Congleton'/>

        <img className='gallery-img' src={field} alt='Field'/>
        <img className='gallery-img' src={cloud} alt='Cloud dog walk congleton'/>
        <img className='gallery-img' src={big} alt='large dog walks congleton'/>

        <img className='gallery-img' src={car} alt='westie dog walk congleton' style={{objectPosition:'top'}}/>

        <img className='gallery-img' src={bonnie} alt='Labrador dog walk Congleton'/>

      </div>
    </div>
  )
}
