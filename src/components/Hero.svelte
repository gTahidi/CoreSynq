<script>
    import { onMount } from "svelte";
    import LogoWall from "./LogoWall.svelte";

    let videoElement;
    let videoLoaded = false;
    let heroTitle;
    let heroSubtitle;
    let heroCta;

    onMount(async () => {
        // Video loading
        if (videoElement) {
            if (videoElement.readyState >= 3) {
                videoLoaded = true;
            } else {
                videoElement.addEventListener("loadeddata", () => {
                    videoLoaded = true;
                });
            }
        }

        // GSAP Entry Animation
        const { gsap } = await import("gsap");

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            heroTitle,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
        )
            .fromTo(
                heroSubtitle,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5",
            )
            .fromTo(
                heroCta,
                { y: 30, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.6 },
                "-=0.4",
            );
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
            <h1 class="hero-title" bind:this={heroTitle}>
                Bridging the gap between raw <br /> environmental data
                <span class="text-accent">and actionable ESG intelligence.</span
                >
            </h1>
            <p class="hero-subtitle" bind:this={heroSubtitle}>
                Comprehensive carbon computation and audit-ready data for global
                enterprise. Measure your impact, find your strategy, and achieve
                your goals with precision.
            </p>
            <div class="hero-actions" bind:this={heroCta}>
                <button class="btn-hero">Schedule a Demo</button>
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
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        background-color: #e0e5ec;
    }

    .video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 85%;
        z-index: 1;
        border-bottom-left-radius: 80px;
        border-bottom-right-radius: 80px;
        overflow: hidden;
        /* Neumorphic inset feel on the video container */
        box-shadow: inset 0 -8px 20px rgba(163, 177, 198, 0.3);
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1.2s ease;
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
            rgba(15, 61, 62, 0.75) 0%,
            rgba(15, 61, 62, 0.3) 100%
        );
    }

    .hero-content-wrapper {
        position: relative;
        z-index: 2;
        width: 100%;
        padding: 0 64px;
        margin-top: -60px;
    }

    .hero-text {
        max-width: 850px;
        text-align: left;
    }

    .hero-title {
        font-family: var(--font-display);
        font-size: clamp(48px, 5vw, 68px);
        font-weight: 800;
        line-height: 1.08;
        letter-spacing: -0.03em;
        color: white;
        margin-bottom: 24px;
        max-width: 900px;
        opacity: 0; /* GSAP will animate this */
    }

    .text-accent {
        color: #ffd54f; /* Solar Yellow accent on dark video */
    }

    .hero-subtitle {
        font-family: var(--font-body);
        font-size: 20px;
        line-height: 1.5;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 40px;
        max-width: 600px;
        opacity: 0; /* GSAP will animate this */
    }

    .hero-actions {
        opacity: 0; /* GSAP will animate this */
    }

    .btn-hero {
        background-color: var(--accent-primary);
        color: var(--text-primary);
        border: none;
        padding: 18px 48px;
        border-radius: 16px;
        font-family: var(--font-body);
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        box-shadow:
            6px 6px 12px rgba(255, 199, 0, 0.25),
            -6px -6px 12px rgba(255, 255, 255, 0.1);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        position: relative;
        overflow: hidden;
    }

    .btn-hero:hover {
        transform: translateY(-2px) scale(1.03);
        box-shadow:
            8px 8px 16px rgba(255, 199, 0, 0.35),
            -8px -8px 16px rgba(255, 255, 255, 0.15);
        background-color: var(--accent-light);
    }

    .btn-hero:active {
        transform: translateY(0.5px) scale(0.98);
        box-shadow:
            inset 4px 4px 8px rgba(230, 180, 0, 0.3),
            inset -4px -4px 8px rgba(255, 240, 180, 0.2);
    }

    /* Partners Marquee in Neumorphic Space */
    .partners-marquee-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 15%;
        background: var(--page-bg);
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* Subtle top inset to blend with video area */
        box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.05);
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
            padding-bottom: 220px;
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
        .hero-title {
            font-size: clamp(36px, 8vw, 48px);
        }
    }
</style>
