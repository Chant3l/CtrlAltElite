import {useRef} from "react";


function NavBar(){
    return (
        <header>
            <nav>
                <a href="/#">About Us</a>
                <a href="/#">Testimonials</a>
                <a href="/#">Contact</a>
            </nav>
            <h1>VITALITY MARKETPLACE</h1>
            <nav>
            <a href="/#">Search</a>
            <a href="/#">Cart</a>
            <a href="/#">Account</a>
            </nav>
        </header>
    );
}

export default NavBar;