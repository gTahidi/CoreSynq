<section class="waitlist bg-grid">
    <div class="waitlist-container">
        <div class="waitlist-content">
            <h2>Join the Green Revolution</h2>
            <p>
                Be the first to access Coresynq and transform your ESG strategy.
            </p>

            <form class="waitlist-form" on:submit|preventDefault>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                />
                <button type="submit" class="btn-primary">Join Waitlist</button>
            </form>

            <div class="social-proof">
                <p>Join 500+ forward-thinking investors and companies</p>
                <div class="avatars">
                    <div class="avatar"></div>
                    <div class="avatar"></div>
                    <div class="avatar"></div>
                    <div class="avatar-count">+500</div>
                </div>
            </div>
        </div>

        <div class="footer-links">
            <div class="brand">Coresynq</div>
            <div class="links">
                <a href="/">Contact</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms</a>
            </div>
            <div class="copyright">© 2025 Coresynq. All rights reserved.</div>
        </div>
    </div>
</section>

<style>
    .waitlist {
        background-color: var(--page-bg);
        padding: 120px 24px 60px;
        max-width: none;
    }

    .waitlist-container {
        max-width: 900px;
        margin: 0 auto;
        background: #f0fdf4; /* Pastel Green / Mint 50 */
        /* Let's make the container a card for focus */
        padding: 80px 40px;
        border-radius: var(--border-radius-card);
        box-shadow: 0 20px 40px rgba(16, 185, 129, 0.1); /* Green-tinted shadow */
        border: 1px solid #bbf7d0; /* Mint 200 border */
    }

    .waitlist-content {
        text-align: center;
        margin-bottom: 80px;
    }

    .waitlist-content h2 {
        font-size: 32px;
        font-weight: 800;
        margin-bottom: 16px;
        letter-spacing: -0.03em;
        line-height: 1.1;
        font-family: var(--font-display);
        color: var(--text-primary);
    }

    .waitlist-content p {
        font-size: 15px;
        color: var(--text-secondary);
        margin-bottom: 32px;
        font-family: var(--font-body);
    }

    .waitlist-form {
        display: flex;
        gap: 12px;
        max-width: 480px;
        margin: 0 auto 32px;
    }

    .waitlist-form input {
        flex: 1;
        padding: 16px 24px;
        border-radius: var(--border-radius-btn);
        border: 1px solid #cbd5e1; /* Clear styling */
        font-size: 14px;
        outline: none;
        background: white; /* Clear white background */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); /* Subtle depth */
        color: var(--text-primary);
    }

    .waitlist-form input:focus {
        box-shadow:
            var(--shadow-inset-deep),
            0 0 0 2px var(--accent-light);
    }

    .social-proof {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .social-proof p {
        font-size: 14px;
        font-weight: 600;
        color: var(--text-secondary);
    }

    .avatars {
        display: flex;
        align-items: center;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid var(--card-bg);
        margin-left: -12px;
        background: #f5f5f7;
    }

    .avatar:first-child {
        margin-left: 0;
    }

    .avatar-count {
        margin-left: 12px;
        font-size: 14px;
        font-weight: 700;
        color: var(--text-primary);
    }

    .footer-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 48px;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
    }

    .brand {
        font-size: 22px;
        font-weight: 800;
        letter-spacing: -0.02em;
        font-family: var(--font-display);
        color: var(--text-primary);
    }

    .links a {
        color: var(--text-secondary);
        text-decoration: none;
        margin-left: 24px;
        font-size: 14px;
    }

    .copyright {
        font-size: 13px;
        color: var(--text-secondary);
    }

    @media (max-width: 700px) {
        .waitlist-form {
            flex-direction: column;
        }
        .footer-links {
            flex-direction: column;
            gap: 32px;
            text-align: center;
        }
    }
</style>
