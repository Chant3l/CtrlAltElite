import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

const LoginForm = () => {
  return (
    <div className='wrap'>
        <form action=''>
            <h1>Login</h1>
            <div className='inputBox'>
                <input type='text' placeholder='Username' required />
                <FontAwesomeIcon icon={faUser} className='icon' />
            </div>
            <div className='inputBox'>
                <input type='password' placeholder='Password' required />
                <FontAwesomeIcon icon={faLock} className='icon' />
            </div>

            <div className='rememberForgot'>
                <label><input type='checkbox'/>Remember Me</label>
                <br/>
                <a href='#'>Forget Password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className='register'>
                <p>Don't have a account?<a href='#'>Register Here</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm