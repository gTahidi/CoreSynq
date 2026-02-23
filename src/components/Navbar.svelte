<script>
    let y = 0;
    let menuOpen = false;
</script>

<nav class="navbar" class:scrolled={y > 20}>
    <div class="nav-container">
        <div class="logo">
            <span class="logo-icon">🌱</span> Coresynq
        </div>
        <div class="nav-links" class:open={menuOpen}>
            <a href="#impact">Global Impact</a>
            <a href="#solutions">Our Solutions</a>
            <a href="#process">The Process</a>
            <a href="#advisory">Advisory</a>
            <a href="#contact" class="btn-nav-cta">Schedule a Demo</a>
        </div>
        <button
            class="mobile-toggle"
            on:click={() => (menuOpen = !menuOpen)}
            aria-label="Toggle menu"
        >
            {#if menuOpen}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    ><line x1="18" y1="6" x2="6" y2="18" /><line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                    /></svg
                >
            {:else}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    ><line x1="3" y1="12" x2="21" y2="12" /><line
                        x1="3"
                        y1="6"
                        x2="21"
                        y2="6"
                    /><line x1="3" y1="18" x2="21" y2="18" /></svg
                >
            {/if}
        </button>
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
        background: var(--page-bg);
        border-radius: 9999px;
        box-shadow:
            4px 4px 10px rgba(210, 215, 220, 0.4),
            -4px -4px 10px rgba(255, 255, 255, 0.8);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .navbar.scrolled {
        top: 16px;
        padding: 12px 32px;
        box-shadow: var(--shadow-extruded-small);
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
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
        transition: all 0.3s ease-out;
        position: relative;
    }

    .nav-links a:hover {
        color: var(--accent-primary);
        transform: translateY(-1px);
    }

    .btn-nav-cta {
        padding: 10px 24px !important;
        background-color: var(--accent-primary) !important;
        color: var(--text-primary) !important;
        border-radius: 999px;
        font-weight: 700 !important;
        box-shadow:
            4px 4px 8px rgba(255, 199, 0, 0.2),
            -4px -4px 8px rgba(255, 255, 255, 0.8);
        transition: all 0.3s ease-out !important;
    }

    .btn-nav-cta:hover {
        transform: translateY(-1px) !important;
        background-color: var(--accent-light) !important;
        box-shadow:
            6px 6px 12px rgba(255, 199, 0, 0.3),
            -6px -6px 12px rgba(255, 255, 255, 0.9) !important;
    }

    .btn-nav-cta:active {
        transform: translateY(0.5px) !important;
        box-shadow:
            inset 3px 3px 6px rgba(230, 180, 0, 0.2),
            inset -3px -3px 6px rgba(255, 240, 180, 0.4) !important;
    }

    .mobile-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-primary);
        padding: 8px;
    }

    @media (max-width: 768px) {
        .navbar {
            width: 95%;
            padding: 12px 20px;
            top: 16px;
            border-radius: 24px;
        }

        .mobile-toggle {
            display: block;
        }

        .nav-links {
            display: none;
            position: absolute;
            top: calc(100% + 12px);
            left: 0;
            right: 0;
            background: var(--page-bg);
            border-radius: 24px;
            box-shadow: var(--shadow-extruded);
            flex-direction: column;
            padding: 24px;
            gap: 16px;
        }

        .nav-links.open {
            display: flex;
        }
    }
</style>
