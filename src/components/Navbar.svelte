<script>
    let y = 0;
</script>

<nav class="navbar" class:scrolled={y > 50}>
    <div class="nav-container">
        <div class="logo">Coresynq</div>
        <div class="nav-links">
            <a href="#intelligence">Intelligence</a>
            <a href="#metrics">Metrics</a>
            <a href="#frameworks">Frameworks</a>
            <button class="btn-nav">Early Access</button>
        </div>
    </div>
</nav>

<svelte:window bind:scrollY={y} />

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        padding: 24px 0;
        background: transparent;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .navbar.scrolled {
        padding: 20px 0;
        background: rgba(
            226,
            230,
            228,
            0.85
        ); /* Match new var(--bg-color) #E2E6E4 */
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
        border-bottom: none;
    }

    .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .logo {
        font-family: var(--font-display);
        font-size: 20px;
        font-weight: 800;
        color: white;
        letter-spacing: -0.02em;
        transition: color 0.4s ease;
    }

    .scrolled .logo {
        color: var(--text-primary);
    }

    .nav-links {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    .nav-links a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        transition: all 0.4s ease;
    }

    .scrolled .nav-links a {
        color: #86868b;
    }

    .scrolled .nav-links a:hover {
        color: #1d1d1f;
    }

    .nav-links a:hover {
        color: white;
    }

    .btn-nav {
        background: white;
        color: black;
        border: none;
        padding: 8px 18px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.4s ease;
    }

    .scrolled .btn-nav {
        background: var(--text-primary);
        color: #e0e5ec;
    }

    .btn-nav:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
    }
</style>
