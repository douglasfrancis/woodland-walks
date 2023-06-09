import React, { useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'

export default function Contact() {

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const breedRef = useRef();
    const numberRef = useRef();
    const msgRef = useRef();

    const [ loading, setLoading ] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    if(!nameRef.current.value || !numberRef.current.value || !emailRef.current.value || !msgRef.current.value || !breedRef.current.value ){
      toast.error("Please fill in all required fields")
    } else {
      setLoading(true)
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          formRef.current.reset();
          toast.success("Sent Successfully")
          setLoading(false)
      }, (error) => {
          toast.error("Oops, something went wrong")
          setLoading(false)
      });
    }
  };

  return (
    <div id='contact' className='white'>
      <h1>Contact</h1>
      <p>For dog boarding and day care, I have partnered up with the lovely Laura at <a style={{fontWeight:'bold', color: '#545139', fontSize: '0.9rem', textDecoration:'underline'}} target='_blank' href='https://uphillndowndale.co.uk/'>Up Hill 'n' Down Dale</a> based in Buglawton, Congleton. </p>
      <p>Dog walking in Congleton, home visits or all other enquiries, please fill in the form below and we will get back to you as soon as possible.</p>

      <form ref={formRef} onSubmit={sendEmail}>
        <input placeholder='Name' ref={nameRef} name='Name'/>
        <input placeholder='Number' ref={numberRef} name='Number'/>
        <input placeholder='Email Address' ref={emailRef} name='Email'/>
        <input placeholder='Dog Breed' ref={breedRef} name='Breed'/>
        <textarea ref={msgRef} placeholder="Message" name='Msg'></textarea>
        <button id='submit-btn' type='submit' disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
      </form>
      <p id='consent'>By submitting this form, I consent to Woodland Walks storing the above information to contact me regarding any services offered by Woodland Walks.</p>
    </div>
  )
}
