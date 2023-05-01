import React from 'react'
import angelina from '../images/angelina.png'

export default function About() {
  return (
    <div id='about' className='white'>

      <div className='flexwrap-container'>
        <img style={{marginTop: '1rem'}} className='img' src={angelina} alt="Angelina" />

        <div className='txt'>
          <h1 style={{color:'#545139'}}>ABOUT</h1>
      <p>
        I’m Angelina and I live in Congleton with my husband and two young children - and our Labrador, Bonnie, of course! 

        <br/><br/>

        We live right on Biddulph Valley Way, close to wonderful pastures, brooks, and of course woodland. Each season brings something new and beautiful to discover, so every outing is an adventure! 

        <br/><br/>

        I have experience in veterinary practices, and have previously worked in kennels that provided day care, extended stays and dog walking services. Building on those acquired skills, I am now providing fully insured dog walking and pet sitting services in Congleton and surrounding areas. 

        <br/><br/>

        One of my favourite local walks is Bosley Cloud, which offers amazing views surrounded by heathland once you reach the top!

        <br/><br/>

        I am grateful to combine my love for animals with my love of the outdoors and walking, and sure your dog will have the best time with Woodland Walks Congleton 🐾 </p>
                  
       
        </div>

          
      </div>
      
    </div>
  )
}
