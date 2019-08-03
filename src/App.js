import React from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <title>Bilal Ahmed</title>
      <Header className="appHeader"/>
      <div className="Body">

      <MainBody/>
      
      </div>

      <Footer className="appFooter"/>
    </div>
  );
}

export default App;
