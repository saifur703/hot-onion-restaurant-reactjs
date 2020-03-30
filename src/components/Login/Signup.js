import React from 'react';
import useAuth from './useAuth';
import logo from '../../assets/logo2.png';
import './Login.css';
const Signup = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <div className='login-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2 text-center'>
            <a href='/'>
              <img src={logo} alt='' />
            </a>
            <form onSubmit={auth.signInWithEmailPass}>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
              />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Your Email'
              />
              <input
                type='password'
                name='password'
                placeholder='Your Password'
              />
              <input
                type='password'
                name='password'
                placeholder='Confirm your Password'
              />
              <input type='submit' value='Sign Up' />
            </form>
            <a href='/login'>Already have an account?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
