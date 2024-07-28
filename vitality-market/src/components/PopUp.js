import React, { useState }from 'react'
import '../styles/PopUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'


const PopUp = () => {

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if(!isVisible) return null;

  return (
    <div className='popup'>
        <div className='popupSheet'>
          <button className='close' onClick={handleClose}>X</button>
          <h3>VITALITY <FontAwesomeIcon icon={faSpa}/> MARKETPLACE</h3>
          <h1>15% OFF</h1>
          <p>Your Order</p>
          <p>Discount offer cannot be combined with other offers. Cannot be applied to sales, *specials*, exclusive drop </p>

          <div className='email-input'>
            <input type='text' className='emailBox' placeholder='Email'/>
          </div>
          <button className='popup-btn' type='submit'>Continue</button>
        </div>
    </div>
  )
}

export default PopUp