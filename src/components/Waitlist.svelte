<section class="waitlist">
    <div class="waitlist-container">
        <div class="waitlist-content">
            <h2>Join the Green Revolution</h2>
            <p>Be the first to access Coresynq and transform your ESG strategy.</p>

            <form class="waitlist-form" on:submit|preventDefault>
                <input type="email" placeholder="Enter your email address" required />
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
        background-color: #ffffff;
        padding: 100px 24px 60px;
        max-width: none;
    }

    .waitlist-container {
        max-width: 900px;
        margin: 0 auto;
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
    }

    .waitlist-content p {
        font-size: 15px;
        color: #86868b;
        margin-bottom: 32px;
    }

    .waitlist-form {
        display: flex;
        gap: 12px;
        max-width: 400px;
        margin: 0 auto 32px;
    }

    .waitlist-form input {
        flex: 1;
        padding: 12px 16px;
        border-radius: 40px;
        border: 1px solid #d2d2d7;
        font-size: 14px;
        outline: none;
    }

    .waitlist-form input:focus {
        border-color: #0071e3;
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
        color: #86868b;
    }

    .avatars {
        display: flex;
        align-items: center;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #ffffff;
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
    }

    .footer-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 48px;
        border-top: 1px solid #f5f5f7;
    }

    .brand {
        font-size: 22px;
        font-weight: 800;
        letter-spacing: -0.02em;
    }

    .links a {
        color: #86868b;
        text-decoration: none;
        margin-left: 24px;
        font-size: 14px;
    }

    .copyright {
        font-size: 13px;
        color: #86868b;
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
