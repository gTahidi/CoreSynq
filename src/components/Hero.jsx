import React from 'react';
import Countdown from './Countdown';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    The Future of <br />
                    <span className="text-gradient">Environmental Intelligence</span>
                </h1>
                <p className="hero-subtitle">
                    Real-time ESG scoring powered by advanced analytics and green energy data.
                </p>
                <Countdown />
                <button className="btn-primary">Request Early Access</button>
            </div>
        </section>
    );
};

export default Hero;
