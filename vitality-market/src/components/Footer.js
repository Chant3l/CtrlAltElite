import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faTiktok, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer-body'>
      <div className='footer-social'>
        <section>
          <h3>Follow Us @VitalityMarketPlace</h3>
          <br/>
          <p>Hear about the latest trends in self-care before everyone else.</p>
          <FontAwesomeIcon icon={faInstagram} className='footer-icon'/>
          <FontAwesomeIcon icon={faTwitter} className='footer-icon'/>
          <FontAwesomeIcon icon={faTiktok} className='footer-icon'/>
          <FontAwesomeIcon icon={faFacebook} className='footer-icon'/>
          <FontAwesomeIcon icon={faYoutube} className='footer-icon'/>
        </section>
      </div>

      <div className='footer-link'>
        
      </div>
    </div>
  )
}

export default Footer