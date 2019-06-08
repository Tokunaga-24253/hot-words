import React from 'react';

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import About from './components/About/About'
import Footer from './components/Footer/Footer'




function App() {
  return (
    <div className="page">
      <Header />
      <Content contentType="en" />
      <Content contentType="cn" />
      <About />
      <Footer />
    </div>
  );
}

export default App;
