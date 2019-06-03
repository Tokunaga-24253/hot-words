import React from 'react';

import Nav from './Nav'
import Content from './Content'
import About from './About'

import './css/App.css';
import './css/Nav.css';
import './css/Content.css';
import './css/About.css';


function App() {
  return (
    <div className="page">
      <Nav />
      <Content />
      <About />
    </div>
  );
}

export default App;
