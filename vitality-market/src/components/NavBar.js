import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen, faComment, faCircleUser} from '@fortawesome/free-regular-svg-icons'
import { faPencil, faSpa, faBasketShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function NavBar(){
     return(
     <>     
        <section className='iconBar'>
            <Link to="/vitality-market/AboutUs" className='aboutUs'>
                <FontAwesomeIcon icon={faChessQueen} className='icon' />
                <br/>
                <p>About Us</p>
           </Link>
           
           <Link to="/vitality-market/Testimonial" className='test'>
                <FontAwesomeIcon icon={faPencil} className='icon'/>
                <br/>
                <p>Testimonial</p>
           </Link>

           <Link to="/vitality-market/Contact" className='contact'>
                <FontAwesomeIcon icon={faComment} className='icon'/>
                <br/>
                <p>Contact Us</p>
           </Link>

           <h1 className='title'>VITALITY <FontAwesomeIcon icon={faSpa}/> MARKETPLACE</h1>

           <Link to="" className='search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
                <br/>
                <p>Search</p>
           </Link>

           <Link to="/vitality-market/Cart.js" className='cart'>
                <FontAwesomeIcon icon={faBasketShopping} className='icon'/>
                <br/>
                <p>Cart</p>
           </Link>

           <Link to="/vitality-market/Account.js" className='account'>
                <FontAwesomeIcon icon={faCircleUser} className='icon'/>
                <br/>
                <p>Account</p>
           </Link>      
        </section>

        <div className='subContainer'>
          <h2 className='subtitle'>SHOP</h2>
          <h2 className='subtitle'>NEW ARRIVALS</h2>
          <h2 className='subtitle'>*SPECIALS*</h2>
          <h2 className='subtitle'>BESTSELLERS</h2>
        </div>
        </>
     )
} 

export default NavBar;

