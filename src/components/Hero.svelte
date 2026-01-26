<script>
    import { onMount } from 'svelte';
    
    let videoElement;
    let videoLoaded = false;

    onMount(() => {
        if (videoElement) {
            if (videoElement.readyState >= 3) {
                videoLoaded = true;
            } else {
                videoElement.addEventListener('loadeddata', () => {
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

    <div class="hero-content">
        <h1 class="hero-title">
            Intelligence for the <br />
            <span class="text-gradient">Green Economy</span>
        </h1>
        <p class="hero-subtitle">
            Moving beyond self-reported ESG. We provide objective, satellite-verified environmental scores in real-time.
        </p>
        <button class="btn-primary">Request Early Access</button>
    </div>
</section>

<style>
    .hero {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 0;
        max-width: none;
        background-color: #000;
    }

    .video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1s ease;
    }

    video.loaded {
        opacity: 0.6;
    }

    .video-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%);
    }

    .hero-content {
        position: relative;
        z-index: 2;
        text-align: center;
        max-width: 900px;
        padding: 0 24px;
        color: white;
    }

    .hero-title {
        font-size: clamp(32px, 5vw, 48px);
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.03em;
        margin-bottom: 16px;
    }

    .hero-subtitle {
        font-size: clamp(14px, 1.8vw, 17px);
        line-height: 1.5;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 32px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    .text-gradient {
        background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .btn-primary {
        background-color: white;
        color: black;
    }
</style>
