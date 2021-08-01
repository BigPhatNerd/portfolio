
import React from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import WebApps from './components/WebApps';
import Tools from './components/Tools';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <>
    <Navigation />
   
  <About />
  <WebApps />
  <Tools />
  <Contact />
  </>
  );
}

export default App;
