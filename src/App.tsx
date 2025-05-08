import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;