import React from 'react';
import './Products.css';
import fakeData from '../../assets/fakeData/fakeData';

const Products = () => {
  const { image, title, brief, price } = fakeData[0];

  return (
    <div className='container section-padding'>
      <div className='row text-center'>
        <div className='col-md-12'>
          <div className='product-filter'>
            <ul>
              <li>Breakfast</li>
              <li className='active'>Launch</li>
              <li>Dinner</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-md-4'>
          <div className='card'>
            <img className='card-img-top' src={image} alt='' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{brief}</p>
              <p className='card-text'>$ {price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='card-img-top' src={image} alt='' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{brief}</p>
              <p className='card-text'>$ {price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='card-img-top' src={image} alt='' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{brief}</p>
              <p className='card-text'>$ {price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='card-img-top' src={image} alt='' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{brief}</p>
              <p className='card-text'>$ {price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='card-img-top' src={image} alt='' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{brief}</p>
              <p className='card-text'>$ {price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <img className='card-img-top' src={image} alt='' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{brief}</p>
              <p className='card-text'>$ {price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
