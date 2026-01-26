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

<script>
    let y = 0;
</script>

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
        padding: 16px 0;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 18px;
        font-weight: 800;
        color: white;
        letter-spacing: -0.02em;
        transition: color 0.4s ease;
    }

    .scrolled .logo {
        color: #1d1d1f;
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
        background: #1d1d1f;
        color: white;
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
