import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import WelcomeArea from './components/WelcomeArea/WelcomeArea';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div className='App'>
      <Header></Header>

      <WelcomeArea></WelcomeArea>

      <Products></Products>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
