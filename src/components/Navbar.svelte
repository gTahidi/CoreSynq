<script>
    let y = 0;
</script>

<nav class="navbar" class:scrolled={y > 20}>
    <div class="nav-container">
        <div class="logo">
            <span class="logo-icon">🌱</span> Coresynq
        </div>
        <div class="nav-links">
            <a href="#impact">Global Impact</a>
            <a href="#solutions">Our Solutions</a>
            <a href="#process">The Process</a>
            <a href="#advisory">Advisory</a>
            <a href="#contact" class="btn-nav-cta">Join Waitlist</a>
        </div>
    </div>
</nav>

<svelte:window bind:scrollY={y} />

<style>
    .navbar {
        position: fixed;
        top: 24px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 1000px;
        z-index: 1000;
        padding: 16px 32px;
        background: white;
        border-radius: 9999px; /* Pill shape */
        box-shadow: var(--shadow-float);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .navbar.scrolled {
        top: 16px; /* Slightly higher on scroll */
        padding: 12px 32px;
        box-shadow: 0 10px 30px rgba(15, 61, 62, 0.2); /* Deeper shadow on scroll */
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(8px);
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .logo {
        font-family: var(--font-display);
        font-size: 20px;
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -0.02em;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .logo-icon {
        font-size: 24px;
    }

    .nav-links {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    .nav-links a {
        color: var(--text-primary);
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        transition: color 0.3s ease;
    }

    .nav-links a:hover {
        color: var(--accent-dark);
    }

    .btn-nav-cta {
        padding: 8px 20px;
        background-color: var(--text-primary);
        color: white !important;
        border-radius: 999px;
        font-weight: 700;
        transition:
            transform 0.2s ease,
            background 0.2s ease;
    }

    .btn-nav-cta:hover {
        transform: translateY(-2px);
        background-color: black;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
        .navbar {
            width: 95%;
            padding: 12px 20px;
            top: 16px;
        }

        .nav-links {
            display: none; /* Mobile menu implementation needed later */
        }
    }
</style>
