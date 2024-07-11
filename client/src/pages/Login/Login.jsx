import React, { useState } from 'react'
import './login.css'
import PhoneNumberInput from '../../utils/PhoneNumberInput';
import axios from 'axios'


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [showOtpBox, setShowOtpBox] = useState(false)
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [otpFromServer, setOtpFromServer] = useState('')

  const handleregisterSubmit = (e) => {
    e.preventDefault();
    console.log('Phone number submitted:', phoneNumber);
  }

  const handleRegisterForm = async (event) => {
    event.preventDefault();
    setLoading(true)
    const otpUrl = 'http://localhost:5000/sendotp'

    await axios.post(otpUrl, { phoneNumber })
      .then((res) => {
        setLoading(false)
        setOtpFromServer(res.data.otp)
        setShowOtpBox(true)
      }).catch((error) => {
        setLoading(false)
        console.log(error)
      })

  }

  const handlePhoneNumberChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const handleOtpSubmit = async (event) => {
    setLoading(true)
    const createUserUrl = 'http://localhost:5000/login'
    event.preventDefault();

    if (otpFromServer === otp) {

      await axios.post(createUserUrl, { phoneNumber }, { withCredentials: true })
        .then((res) => {
          setLoading(false)
          console.log(res)
        }).catch((error) => {
          setLoading(false)
          setMessage(error.message)
          console.log(error)
        })

    } else {
      console.log('user creation error')
      setLoading(false)

    }
  }




  return (
    <div className='login'>
      {

        <div className='registerPage'>
          <h1>Login page</h1>
          <br />
          <form className='registerForm' onSubmit={handleRegisterForm}>
            <PhoneNumberInput onPhoneNumberChange={handlePhoneNumberChange} />
            <br />
            <button type='submit'>{loading ? 'please wait' : 'Login'}</button>
          </form>
          <br />
          {message && <b>{message}</b>}
          <br />

          {
            showOtpBox &&
            <form onSubmit={handleOtpSubmit}>
              <div className='otpBox'>
                <input type="text" onChange={(e) => setOtp(e.target.value)} value={otp} placeholder='type your OTP code here' />
                <button type='submit'>Login</button>
              </div>
            </form>
          }



        </div>

      }
    </div>
  )
}

export default Login;