import React from 'react'
import fire from '../images/canal.png'

export default function Booking() {
  return (
    <div id='bookings' className='white'>
      
      <div className='flexwrap-container'>
        <img className='img' src={fire} alt="Dog in front of fire"/>
        <div className='txt'>
            <h1>Bookings</h1>
            <p>To enquire about a booking please contact via
              Phone: 07759883947
              Email: uphillndowndale@gmail.com
              Facebook or Facebook Messenger Up Hill ‘n Down Dale
              I will check availability with your required date(s) and we’ll arrange a date for you and your dog to
              visit for a trial day before they arrive for their holiday or doggie day care at Up Hill ‘n’ Down Dale.
              To make a booking I will ask you to read and sign some important documents about your Dog. These
              include;
              Home Boarding/Doggie Day Care Terms and Conditions.
              Dog information sheet, owner’s details, emergency contact details, vet contact details and medical
              requirements and vaccinations.
              Written consent forms while your dog is staying at Up Hill ‘n’ Down Dale.
              I also request that a 50% deposit is paid on booking to secure a place for home boarding for a weekly
              stay and the rest in full on your dogs departure.
              Doggie Day Care is payable on the day either when you drop off or pick up. For regular bookings
              payment is kindly requested a month in advance.
            </p>
        </div>
      </div>
     
    </div>
  )
}
