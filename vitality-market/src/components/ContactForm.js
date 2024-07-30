import React from 'react'
import '../styles/ContactForm.css'
import Swal from 'sweetalert2'

const ContactForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "70f44e2e-cbf3-4361-a7c9-aeb55712a710");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Hooray!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    }
  };

  return (
    <div className='contactForm'>
      <form onSubmit={onSubmit}>
        <h1>Contact Us</h1>
        <h3>We're Here For You!</h3>
        <p>Operating hours are 9:00am – 9:00pm ET, Monday- Friday and Saturday 9:00am- 6:00pm ET, excluding major U.S. holidays</p>

        <div className='input-box'>
          <input type='text' className='firstName' placeholder='First Name' name='name'required/>
        </div>

        <div className='input-box' >
          <input type='text' className='lastName' placeholder='Last Name' name='name'required/>
        </div>

        <div className='input-box'>
          <input type='text' className='email' placeholder='Email' name='email' required/>
        </div>

        <div className='input-box'>
          <input type='text' className='phone' placeholder='Phone Number' name='number'required/>
        </div>

        <div className='input-box'>
          <input type='text' className='order' placeholder='Order Number' name='order' required/>
        </div>

        <div className='input-box'>
          <textarea className='commentBox' name='message' placeholder='Comments (max 5,000 characters)'></textarea>
        </div>
        <button type='submit' className='contact-btn'>Contact Us</button>
      </form>
    </div>
  )
}

export default ContactForm