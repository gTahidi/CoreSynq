import React from 'react';
import './Waitlist.css';

const Waitlist = () => {
    return (
        <footer className="waitlist">
            <div className="waitlist-container">
                <div className="waitlist-content">
                    <h2>Join the Green Revolution</h2>
                    <p>Be the first to access Coresynq and transform your ESG strategy.</p>

                    <form className="waitlist-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email address" required />
                        <button type="submit" className="btn-primary">Join Waitlist</button>
                    </form>

                    <div className="social-proof">
                        <p>Join 500+ forward-thinking investors and companies</p>
                        <div className="avatars">
                            {/* Placeholders for avatars */}
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                            <div className="avatar-count">+500</div>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="brand">Coresynq</div>
                    <div className="links">
                        <a href="#">Contact</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms</a>
                    </div>
                    <div className="copyright">© 2025 Coresynq. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
};

export default Waitlist;
