
import './Login.css'
import olx from '../../assets/olx.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import {auth} from '../../Config/Firebase'
import {auth} from '../../Components/Config/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
   
    const handlesubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='login'>
      <img src={olx} alt="" />
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit(handlesubmit)}>
        <input type="email" name='email' placeholder='Email' {...register("email", { required: true,message:"Email is required"})} />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <input type="password" name='password' placeholder='Password' {...register("password", { required: true,message:"Password is required"})} />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <button type='submit'>Login</button>
      </form>
      <div className="notifier">
        <p>New to OLX? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
