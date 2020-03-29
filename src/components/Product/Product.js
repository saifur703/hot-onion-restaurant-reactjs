import React from 'react';

import './Product.css';

const Product = props => {
  //console.log(props);
  const { title, price, image, brief } = props.product;
  return (
    <div className='col-md-4 text-center'>
      <div className='card'>
        <img className='card-img-top' src={image} alt='' />
        <div className='card-body'>
          <h5 className='card-title'>
            <a href='/'>{title}</a>
          </h5>
          <p className='card-text'>{brief}</p>
          <p className='card-price'>$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
