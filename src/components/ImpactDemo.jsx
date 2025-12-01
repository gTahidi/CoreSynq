import React, { useEffect, useState } from 'react';
import './ImpactDemo.css';

const ImpactDemo = () => {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScore(prev => (prev < 98 ? prev + 1 : 98));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="impact-demo">
            <div className="demo-container">
                <div className="demo-text">
                    <h2>Visualize Your Impact</h2>
                    <p>See how green energy adoption directly correlates with your ESG score.</p>
                </div>
                <div className="demo-visual">
                    <div className="score-circle">
                        <svg viewBox="0 0 36 36" className="circular-chart">
                            <path className="circle-bg"
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path className="circle"
                                strokeDasharray={`${score}, 100`}
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <div className="score-value">
                            <span>{score}</span>
                            <span className="score-label">ESG Score</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactDemo;
