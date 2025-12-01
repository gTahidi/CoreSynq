import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            title: "Precision Scoring",
            description: "Beyond self-reporting. We use satellite-verified data to provide the most accurate ESG scores in the market.",
            icon: "🎯"
        },
        {
            title: "Green Energy Tracking",
            description: "Real-time monitoring of renewable energy usage, ensuring transparency and accountability.",
            icon: "⚡"
        },
        {
            title: "Compliance Ready",
            description: "Fully aligned with global frameworks including GRI, SASB, and TCFD for seamless reporting.",
            icon: "shield" // Using text/emoji for now, can replace with SVG
        }
    ];

    return (
        <section className="features">
            <div className="features-container">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">{feature.icon === "shield" ? "🛡️" : feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
