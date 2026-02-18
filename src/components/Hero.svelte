<script>
    import { onMount } from "svelte";
    import LogoWall from "./LogoWall.svelte";

    let videoElement;
    let videoLoaded = false;

    onMount(() => {
        if (videoElement) {
            if (videoElement.readyState >= 3) {
                videoLoaded = true;
            } else {
                videoElement.addEventListener("loadeddata", () => {
                    videoLoaded = true;
                });
            }
        }
    });
</script>

<section id="intelligence" class="hero">
    <div class="video-container">
        <video
            bind:this={videoElement}
            autoplay
            muted
            loop
            playsinline
            class:loaded={videoLoaded}
        >
            <source src="/bv.mp4" type="video/mp4" />
        </video>
        <div class="video-overlay"></div>
    </div>

    <!-- Content Container -->
    <div class="hero-content-wrapper">
        <div class="hero-text">
            <h1 class="hero-title">
                Bridging the gap between raw <br /> environmental data
                <span class="text-accent">and actionable ESG intelligence.</span
                >
            </h1>
            <p class="hero-subtitle">
                Comprehensive carbon computation and audit-ready data for global
                enterprise. Measure your impact, find your strategy, and achieve
                your goals with precision.
            </p>
            <div class="hero-actions">
                <button class="btn-primary">Schedule a Demo</button>
            </div>
        </div>
    </div>

    <!-- Integrated Partners Marquee in White Space -->
    <div class="partners-marquee-container">
        <LogoWall />
    </div>
</section>

<style>
    .hero {
        position: relative;
        height: 100vh; /* Stretch to fill entire page as requested */
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        background-color: white;
    }

    .video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 85%; /* Video takes 85%, leaving 15% white space */
        z-index: 1;
        border-bottom-left-radius: 80px;
        border-bottom-right-radius: 80px;
        overflow: hidden;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1s ease;
    }

    video.loaded {
        opacity: 0.9;
    }

    .video-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            rgba(15, 61, 62, 0.7) 0%,
            rgba(15, 61, 62, 0.3) 100%
        );
    }

    .hero-content-wrapper {
        position: relative;
        z-index: 2;
        width: 100%;
        padding: 0 64px;
        margin-top: -60px; /* Pull text up slightly for better centering in video area */
    }

    .hero-text {
        max-width: 850px;
        text-align: left;
    }

    .hero-title {
        font-family: var(--font-display);
        font-size: clamp(48px, 5vw, 68px); /* Spec: 60px/48px */
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.03em;
        color: white;
        margin-bottom: 24px;
        max-width: 900px;
    }

    .text-accent {
        color: var(--accent-primary); /* Solar Yellow */
    }

    .hero-subtitle {
        font-family: var(--font-body);
        font-size: 20px; /* Spec: 20px Body */
        line-height: 1.5;
        font-weight: 400; /* Regular weight */
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 40px;
        max-width: 600px; /* Limit width for readability */
    }

    .btn-primary {
        background-color: var(--accent-primary);
        color: var(--text-primary);
        border: none;
        padding: 18px 48px; /* Slightly larger button */
        border-radius: 12px;
        font-family: var(--font-body);
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(255, 199, 0, 0.3);
        transition: all 0.3s ease;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 40px rgba(255, 199, 0, 0.4);
        background-color: var(--accent-light);
    }

    /* Partners Marquee in White Space */
    .partners-marquee-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 15%; /* Targeted white space at bottom */
        background: white;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; /* CENTERED per request */
        text-align: center;
    }

    .marquee-label {
        font-family: var(--font-display);
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--text-secondary);
        opacity: 0.5;
        margin-bottom: 20px;
    }

    .marquee-content {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
    }

    .marquee-track {
        display: inline-flex;
        align-items: center;
        gap: 100px;
        animation: marquee 40s linear infinite;
    }

    .partner-logo-item {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .partner-logo-item img {
        height: 100%;
        width: auto;
        filter: grayscale(1);
        opacity: 0.4;
        transition: all 0.3s ease;
    }

    .partner-logo-item img:hover {
        opacity: 0.8;
        filter: grayscale(0);
    }

    @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    @media (max-width: 1024px) {
        .hero-content-wrapper {
            padding: 0 32px;
        }
    }

    @media (max-width: 768px) {
        .hero {
            height: auto;
            min-height: 700px;
            padding-bottom: 220px; /* Increased from 120px to clear 140px marquee + gap */
        }
        .hero-content-wrapper {
            margin-top: 0;
            padding-top: 100px;
        }
        .video-container {
            height: 80%;
        }
        .partners-marquee-container {
            height: 140px;
        }
        .marquee-track {
            gap: 60px;
        }
    }
</style>
