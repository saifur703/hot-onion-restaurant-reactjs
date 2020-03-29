import React from 'react';
import './WelcomeArea.css';
const WelcomeArea = () => {
  return (
    <section className='welcome-area d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <div className='welcome-text'>
              <h1>Best food waiting for your belly!</h1>

              <div className='welcome-search'>
                <input
                  type='search'
                  name='search'
                  id='search'
                  placeholder='Search food items'
                />

                <input type='submit' value='Search' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeArea;
