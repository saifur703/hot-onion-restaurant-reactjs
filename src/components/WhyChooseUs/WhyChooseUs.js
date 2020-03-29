import React from 'react';
import img1 from '../../assets/Image/adult-blur-blurred-background-687824.png';
import img2 from '../../assets/Image/chef-cook-food-33614.png';
import img3 from '../../assets/Image/architecture-building-city-2047397.png';
import icon from '../../assets/ICON/Group 204.png';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='section-title'>
              <h2>Why Choose Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                expedita, officiis nemo minus
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='single-card'>
              <img className='card-img' src={img1} alt='' />
              <div className='single-card-text'>
                <h5 className='card-title'>
                  <img src={icon} alt='' /> Fast Delivery
                </h5>
                <p className='card-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus
                </p>
                <p className='card-text'>
                  <a href='/'>See More</a>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='single-card'>
              <img className='card-img' src={img2} alt='' />
              <div className='single-card-text'>
                <h5 className='card-title'>
                  <img src={icon} alt='' /> Fast Delivery
                </h5>
                <p className='card-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <p className='card-text'>
                  <a href='/'>See More</a>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='single-card'>
              <img className='card-img' src={img3} alt='' />
              <div className='single-card-text'>
                <h5 className='card-title'>
                  <img src={icon} alt='' />
                  Fast Delivery
                </h5>
                <p className='card-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus
                </p>
                <p className='card-text'>
                  <a href='/'>See More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
