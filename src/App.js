import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import WelcomeArea from './components/WelcomeArea/WelcomeArea';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <WelcomeArea></WelcomeArea>
    </div>
  );
}

export default App;
