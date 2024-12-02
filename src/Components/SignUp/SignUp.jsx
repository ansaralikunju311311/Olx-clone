import React from 'react'
import './SignUp.css'
import olx from '../../assets/olx.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault()
        navigate('/login')
    }
  return (
    <div className='signup'>
    <img src={olx} alt="" />
    <h1>Sign Up</h1>
        <form action="">
            <input type="text" name='username' placeholder='Username' />
            <input type="email" name='email' placeholder='Email' />
            <input type="password" name='password' placeholder='Password' />
            <button type='submit' onClick={handlesubmit}>Sign Up</button>
        </form>
        <div className="notifier">
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default SignUp
