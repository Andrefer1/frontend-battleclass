import React from 'react';
import './App.css';

import Routes from './routes';

import github from './assets/github.png'

function App() {
  return (
    <div className="App">

      <Routes/>
{/*
      <footer>
        <p className="text-footer"> Powered by </p> <a href="https://github.com/andrefer1">
          <img src={github} alt='André Fernandes, Software Engineer' id='github-image' /></a>
      </footer>
*/}
    </div>
  );
}

export default App;
