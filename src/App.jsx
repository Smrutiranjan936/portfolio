import React from 'react';
import Header from './conmponent/Header';
import Home from './conmponent/Home';
import About from './conmponent/About';
import Technology from './conmponent/Technology';
import Project from './conmponent/Project';
import Degree from './conmponent/Degree';
import Contact from './conmponent/Contact';
import Footer from './conmponent/Footer';
// import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Technology />
        <Project />
        <Degree />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;