import React from 'react'
import './App.css'
import Axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ResetPassword = () => {

    const [password, setPassword] = useState('');
    const {token} = useParams()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/reset-password/'+token, {
            password, 
        }).then(response => {
            if(response.data.status) {
                navigate('/')
            }
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    };

  return (
    <div className='reset-password-container'>
            <form className='reset-password-form' onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                

                <label htmlFor="password">New Password:</label>
                <input type="password" placeholder='******'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Reset</button>
            </form>
        </div>
  )
}

export default ResetPassword