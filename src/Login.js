import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import auth from './firebase'
function Login() {
    const history=useHistory();
    const [password, setPassword] = useState('') 
    const [email, setEmail] = useState('')
    const login=(event)=>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            history.push('/')
        })
        
        .catch((error)=>alert(error.message))
    }
    const register=(event)=>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            history.push('/')
        })
        
        .catch((error)=>alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia//commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>
            <div className='login__container'>
                <h1> Sign in</h1>
                <from>
                    <h5>
                        E-mail
                    </h5>
                    <input 
                    value={email}
                    onChange={event=>setEmail(event.target.value)}
                    type='text' />
                    <h5>
                        Password
                    </h5>
                    <input 
                    value={password}
                    onChange={event=>setPassword(event.target.value)}
                    type='password' />
                    <button onClick={login} type='submit' className='login__form_button'> Sign In</button>
                    
                </from>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button  onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
