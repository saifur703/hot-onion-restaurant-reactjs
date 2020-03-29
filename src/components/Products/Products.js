import React, { useState } from 'react';
import './Products.css';
import fakeData from '../../assets/fakeData/fakeData';
import Product from '../Product/Product';

const Products = () => {
  let product6 = fakeData.slice(0, 6);
  const product = useState(product6);
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
      <div className='product-area'>
        <div className='row'>
          {product[0].map(pd => (
            <Product key={pd.id} product={pd}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
