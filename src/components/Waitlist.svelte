<script>
    import { onMount } from "svelte";

    let sectionEl;

    onMount(async () => {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            sectionEl.querySelector(".waitlist-container"),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: { trigger: sectionEl, start: "top 80%" },
            },
        );
    });
</script>

<section class="waitlist" bind:this={sectionEl}>
    <div class="waitlist-container">
        <div class="waitlist-content">
            <h2>Join the Green Revolution</h2>
            <p>
                Be the first to access Coresynq and transform your ESG strategy.
            </p>

            <form
                class="waitlist-form"
                action="https://formsubmit.co/bryankechy@gmail.com"
                method="POST"
            >
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                />
                <button type="submit" class="btn-cta">Schedule a Demo</button>
            </form>

            <div class="social-proof">
                <p>Join 500+ forward-thinking investors and companies</p>
                <div class="avatars">
                    <div class="avatar-pip">C</div>
                    <div class="avatar-pip">E</div>
                    <div class="avatar-pip">S</div>
                    <div class="avatar-count">+500</div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-top">
                <div class="brand">
                    <span class="brand-icon">🌱</span> Coresynq
                </div>
                <div class="links">
                    <a href="mailto:brian@coresynq.org">Contact</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms</a>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="copyright">
                    © 2026 Coresynq. All rights reserved.
                </div>
                <div class="status-pill">
                    <span class="status-dot"></span>
                    <span class="status-text">Engine Operational</span>
                </div>
            </div>
        </footer>
    </div>
</section>

<style>
    .waitlist {
        background-color: var(--page-bg);
        padding: 120px 24px 60px;
    }

    .waitlist-container {
        max-width: 900px;
        margin: 0 auto;
        background: #f0fdf4; /* Restored pastel green background */
        padding: 80px 48px 48px;
        border-radius: var(--border-radius-card);
        box-shadow: var(--shadow-extruded);
    }

    .waitlist-content {
        text-align: center;
        margin-bottom: 64px;
    }

    .waitlist-content h2 {
        font-size: clamp(28px, 4vw, 40px);
        font-weight: 800;
        margin-bottom: 16px;
        letter-spacing: -0.03em;
        line-height: 1.1;
        font-family: var(--font-display);
        color: var(--text-primary);
    }

    .waitlist-content p {
        font-size: 17px;
        color: var(--text-secondary);
        margin-bottom: 32px;
        font-family: var(--font-body);
    }

    .waitlist-form {
        display: flex;
        gap: 12px;
        max-width: 500px;
        margin: 0 auto 32px;
    }

    /* Neumorphic inset input */
    .waitlist-form input {
        flex: 1;
        padding: 16px 24px;
        border-radius: var(--border-radius-btn);
        border: none;
        font-size: 15px;
        outline: none;
        background: var(--card-bg);
        box-shadow: var(--shadow-inset-deep);
        color: var(--text-primary);
        font-family: var(--font-body);
        transition: box-shadow 0.3s ease-out;
    }

    .waitlist-form input::placeholder {
        color: #a0aec0;
    }

    .waitlist-form input:focus {
        box-shadow:
            var(--shadow-inset-deep),
            0 0 0 2px var(--accent-primary);
    }

    /* Accent CTA button */
    .btn-cta {
        background: var(--accent-primary);
        color: var(--text-primary);
        border: none;
        padding: 16px 32px;
        border-radius: var(--border-radius-btn);
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        font-family: var(--font-body);
        box-shadow:
            6px 6px 12px rgba(255, 199, 0, 0.25),
            -6px -6px 12px rgba(255, 255, 255, 0.8);
        transition: all 0.3s ease-out;
        white-space: nowrap;
    }

    .btn-cta:hover {
        background: var(--accent-light);
        transform: translateY(-1px);
        box-shadow:
            8px 8px 16px rgba(255, 199, 0, 0.35),
            -8px -8px 16px rgba(255, 255, 255, 0.9);
    }

    .btn-cta:active {
        transform: translateY(0.5px);
        box-shadow:
            inset 4px 4px 8px rgba(230, 180, 0, 0.2),
            inset -4px -4px 8px rgba(255, 240, 180, 0.4);
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

    .avatar-pip {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--card-bg);
        box-shadow: var(--shadow-inset-small);
        margin-left: -8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
        color: var(--text-secondary); /* Less harsh than yellow here */
        font-family: var(--font-display);
    }

    .avatar-pip:first-child {
        margin-left: 0;
    }

    .avatar-count {
        margin-left: 12px;
        font-size: 14px;
        font-weight: 700;
        color: var(--text-primary);
    }

    /* Footer */
    .footer {
        border-top: none;
        padding-top: 32px;
    }

    .footer-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 0;
        /* Inset separator "track" */
        border-top: none;
        box-shadow: 0 -1px 0 rgba(163, 177, 198, 0.3);
    }

    .brand {
        font-size: 22px;
        font-weight: 800;
        letter-spacing: -0.02em;
        font-family: var(--font-display);
        color: var(--text-primary);
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .brand-icon {
        font-size: 24px;
    }

    .links a {
        color: var(--text-secondary);
        text-decoration: none;
        margin-left: 24px;
        font-size: 14px;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    .links a:hover {
        color: var(--accent-primary);
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 16px;
    }

    .copyright {
        font-size: 13px;
        color: var(--text-secondary);
    }

    /* Status pill with pulsing teal dot */
    .status-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--card-bg);
        box-shadow: var(--shadow-inset-small);
        border-radius: 9999px;
        padding: 8px 16px;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent-secondary);
        animation: pulse-dot 2s ease-in-out infinite;
    }

    @keyframes pulse-dot {
        0%,
        100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(56, 178, 172, 0.4);
        }
        50% {
            opacity: 0.7;
            box-shadow: 0 0 0 6px rgba(56, 178, 172, 0);
        }
    }

    .status-text {
        font-family: "DM Sans", monospace;
        font-size: 12px;
        font-weight: 600;
        color: var(--text-secondary);
        letter-spacing: 0.05em;
    }

    @media (max-width: 700px) {
        .waitlist-container {
            padding: 48px 24px 32px;
        }
        .waitlist-form {
            flex-direction: column;
        }
        .footer-top {
            flex-direction: column;
            gap: 24px;
            text-align: center;
        }
        .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
        }
        .links a {
            margin-left: 0;
            margin-right: 16px;
        }
    }
</style>
