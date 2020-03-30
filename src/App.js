import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import WelcomeArea from './components/WelcomeArea/WelcomeArea';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <Route path='/'>
            <Header></Header>
            <WelcomeArea></WelcomeArea>
            <Products></Products>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
          </Route>
          <Route path='*'>
            <h2>
              Not Found! Please Go <a href='/'>Home</a>
            </h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
