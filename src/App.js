import React from 'react';

import Nav from './Nav'
import Content from './Content'
import About from './About'

import './css/App.css';
import './css/Nav.css';
import './css/Content.css';
import './css/About.css';
import './css/chart.css';



function App() {
  return (
    <div className="page">
      <Nav />
      <Content contentType="en" />
      <Content contentType="cn" />
      <About />
    </div>
  );
}

export default App;
