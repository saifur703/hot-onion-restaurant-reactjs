import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='logo'>
              <h1>
                <a href='/'>
                  <img src={logo} alt='' />
                </a>
              </h1>
            </div>
          </div>
          <div className='col-md-8 text-right'>
            <div className='header-right'>
              <a href='/login'>Login</a>
              <a className='boxed-btn' href='/signup'>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
