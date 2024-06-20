import React from 'react'
import './App.css'
import Axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/forgot-password', {
            email, 
        }).then(response => {
            if(response.data.status) {
                alert("Check your email for reset password link")
                navigate('/')
            }
            
        }).catch(err => {
            console.log(err)
        })
    };

  return (
    <div className='forgot-password-container'>
            <form className='forgot-password-form' onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>
                

                <label htmlFor="email">Email:</label>
                <input type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                

                <button type='submit'>Send</button>
            </form>
        </div>
  )
}

export default ForgotPassword