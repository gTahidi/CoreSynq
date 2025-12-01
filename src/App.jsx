import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ImpactDemo from './components/ImpactDemo';
import Waitlist from './components/Waitlist';
import InteractiveBackground from './components/InteractiveBackground';
import './App.css';

function App() {
  return (
    <div className="app">
      <InteractiveBackground />
      <Hero />
      <Features />
      <ImpactDemo />
      <Waitlist />
    </div>
  );
}

export default App;
