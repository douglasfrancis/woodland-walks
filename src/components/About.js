import React from 'react'
import angelina from '../images/angelina.png'

export default function About() {
  return (
    <div id='about' className='white'>

      <div className='flexwrap-container'>
        <img style={{marginTop: '1rem'}} className='img' src={angelina} alt="Angelina" />

        <div className='txt'>
          <h1 style={{color:'#545139'}}>ABOUT</h1>
          <p >My name is Angelina and I’m the owner of Woodland Walks.<br/><br/>Based near Timbersbrook, Congleton, we are lucky enough to have Biddulph Valley Way and Bosley cloud on our door step.
          <br/><br/>Other than having a number of pets (Dogs, Cats & Chickens) I have worked in veterinary practices and doggy day care businesses.<br/><br/>
          We know how important it is for our precious pooches to get the attention and exercise they deserve.
          
           
          </p>
        </div>

          
      </div>
      
    </div>
  )
}
