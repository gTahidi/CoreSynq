<script>
    export let logos = [
        "EABL",
        "KCB Group",
        "IESS",
        "JN Advocates",
        "Safaricom",
        "KenGen",
        "Strathmore",
    ];
    // Duplicate logos for seamless scrolling
    const seamlessLogos = [...logos, ...logos, ...logos, ...logos];
</script>

<div class="logo-wall">
    <p class="label">Partnering With Industry Leaders</p>
    <div class="marquee-container">
        <div class="marquee-track">
            {#each seamlessLogos as logo}
                <span class="logo-text">{logo}</span>
            {/each}
        </div>
        <div class="fade-overlay left"></div>
        <div class="fade-overlay right"></div>
    </div>
</div>

<style>
    .logo-wall {
        width: 100%;
        text-align: center;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%; /* Fill parent */
        padding: 0 40px; /* Add requested horizontal padding */
    }

    .label {
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #4a5568; /* Hardcoded dark gray for safety against var issues */
        margin-bottom: 24px;
        font-weight: 700;
        opacity: 0.8;
    }

    .marquee-container {
        position: relative;
        width: 100%;
        max-width: 1200px; /* Constrain width */
        margin: 0 auto; /* Center */
        overflow: hidden;
        /* Removed mask-image to ensure visibility */
        /* Re-adding a subtle mask for soft edges, but very minimal to avoid visibility issues */
        mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
        );
        -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
        );
    }

    .marquee-track {
        display: flex;
        gap: 80px;
        width: max-content;
        animation: scroll 60s linear infinite;
        align-items: center;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    .logo-text {
        font-family: var(--font-display);
        font-size: 24px;
        font-weight: 800;
        color: #0f3d3e; /* Hardcoded dark teal for safety */
        opacity: 0.8; /* Increased opacity */
        white-space: nowrap;
        user-select: none;
        transition: opacity 0.3s ease;
    }

    .logo-text:hover {
        opacity: 1;
    }
</style>
