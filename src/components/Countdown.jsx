import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set launch date to 14 days from now for demo purposes
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 14);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = launchDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown">
            <div className="countdown-item">
                <span className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="countdown-label">Days</span>
            </div>
            <div className="separator">:</div>
            <div className="countdown-item">
                <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="countdown-label">Hours</span>
            </div>
            <div className="separator">:</div>
            <div className="countdown-item">
                <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="countdown-label">Minutes</span>
            </div>
            <div className="separator">:</div>
            <div className="countdown-item">
                <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="countdown-label">Seconds</span>
            </div>
        </div>
    );
};

export default Countdown;
