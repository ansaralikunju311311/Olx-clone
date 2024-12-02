import React from 'react'
import './Login.css'
import olx from '../../assets/olx.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault()
        navigate('/home')
    }
  return (
    <div className='login'>
      <img src={olx} alt="" />
      <h1>Login</h1>
      <form action="">
        <input type="email" name='email' placeholder='Email' />
        <input type="password" name='password' placeholder='Password' />
        <button type='submit' onClick={handlesubmit}>Login</button>
      </form>
      <div className="notifier">
        <p>New to OLX? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
