import React, { Component } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Resume from './components/Resume.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import resumeData from './resumeData.js';

function App() {
  
    return(
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  
}

export default App;
