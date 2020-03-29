import React from 'react';
import logo from '../../assets/logo2.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='logo'>
              <a href='/'>
                <img src={logo} alt='' />
              </a>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='single-footer'>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href='/'>Our Services</a>
                </li>
                <li>
                  <a href='/'>Our Pricing</a>
                </li>
                <li>
                  <a href='/'>Our Gallery</a>
                </li>
                <li>
                  <a href='/'>Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='single-footer'>
              <h3>Quick Help</h3>
              <ul>
                <li>
                  <a href='/'>Get help</a>
                </li>
                <li>
                  <a href='/'>Our FAQ</a>
                </li>
                <li>
                  <a href='/'>View All Cities.</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='single-footer'>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href='/'>Get help</a>
                </li>
                <li>
                  <a href='/'>Our FAQ</a>
                </li>
                <li>
                  <a href='/'>View All Cities.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row' style={{ marginTop: '15px' }}>
          <div className='col-md-6'>
            <div className='copyright'>&copy; 2020 | All Rights Reserved.</div>
          </div>
          <div className='col-md-6'>
            <div className='copyright footer-bottom-right'>
              <ul>
                <li>
                  <a href='/'>Privacy Policy</a>
                </li>
                <li>
                  <a href='/'>Terms and Conditions</a>
                </li>
                <li>
                  <a href='/'>Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
