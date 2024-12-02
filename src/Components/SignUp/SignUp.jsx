import './SignUp.css'
import olx from '../../assets/olx.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {auth} from '../../Components/Config/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const onSubmit = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password)
            navigate('/login');
            alert('Account created successfully!');
        } catch (error) {
            console.log(error)
            alert('Acount Already Exists')
        }
    }

    return (
        <div className='signup'>
            <img src={olx} alt="" />
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text" 
                    placeholder='Username'
                    {...register("username", { 
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username must be at least 3 characters"
                        }
                    })}
                />
                {errors.username && <p className="error">{errors.username.message}</p>}
                
                <input 
                    type="email" 
                    placeholder='Email'
                    {...register("email", { 
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
                
                <input 
                    type="password" 
                    placeholder='Password'
                    {...register("password", { 
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
                
                <button type='submit'>Sign Up</button>
            </form>
            <div className="notifier">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default SignUp
