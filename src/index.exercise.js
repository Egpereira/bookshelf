import React from 'react'
import { createRoot } from 'react-dom/client'

import { Logo } from './components/logo'
import { Dialog } from '@reach/dialog'

import '@reach/dialog/styles.css'

const LoginForm = ({ onSubmit, buttonText }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' />
      </div>
      <div>
        <button type='submit'>{buttonText}</button>
      </div>
    </form>
  )
}

const App = () => {
  const [openModal, setOpenModal] = React.useState('none')
  const closeModal = () => setOpenModal('none')

  const handleLogin = (formData) => {
    console.log('login', formData)
  }

  const handleRegister = (formData) => {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width='80' height='80' />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label='Login form' isOpen={openModal === 'login'} onDismiss={closeModal}>
        <button className='close-button' onClick={closeModal}>
          Close
        </button>
        <h2>Login</h2>
        <LoginForm onSubmit={handleLogin} buttonText='Login' />
      </Dialog>
      <Dialog aria-label='Registration form' isOpen={openModal === 'register'} onDismiss={closeModal}>
        <button className='close-button' onClick={closeModal}>
          Close
        </button>
        <h2>Register</h2>
        <LoginForm onSubmit={handleRegister} buttonText='Register' />
      </Dialog>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export { root }
