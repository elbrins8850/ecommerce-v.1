import React, { useState } from 'react'
import './Style/Login.css'
import { Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (res.ok) {
        // Save token, redirect, etc.
        localStorage.setItem('token', data.token)
        navigate('/')
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (err) {
      setError('Server error')
    }
  }

  return (
    <div className='background'>
      <Container>
        <div className='login'>
          <h1> Login</h1>
          <Form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button type='submit'>Login</button>
          </Form>
          {error && <div style={{color: 'red'}}>{error}</div>}
          <div className="content">
            <input type='checkbox' /> 
            <p className='end'> By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login
