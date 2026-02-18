<script>
    export let title = "Title";
    export let subtitle = "Subtitle";
    export let imageSrc = "/content-1.jpg";
    export let imageAlt = "Content Image";
    export let reverse = false; // If true, image is on the right
    export let yellowShape = true; // Toggle the specific yellow border shape
</script>

<section class="section-shape {reverse ? 'reverse' : ''}">
    <div class="container">
        <div class="grid">
            <!-- Image Side -->
            <div class="image-wrapper">
                <div class="image-container {yellowShape ? 'with-shape' : ''}">
                    <img src={imageSrc} alt={imageAlt} loading="lazy" />
                </div>
            </div>

            <!-- Content Side -->
            <div class="content-wrapper">
                <h2 class="section-title">{title}</h2>
                <div class="section-subtitle">
                    <slot />
                </div>
                <!-- Optional Button Slot -->
                <div class="actions">
                    <button class="btn-accent">Read More</button>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .section-shape {
        padding: var(--section-padding);
        background-color: var(--page-bg);
        overflow: hidden;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
    }

    /* Reverse Layout */
    .reverse .grid {
        direction: rtl; /* Quick way to swap columns visually */
    }

    .reverse .image-wrapper,
    .reverse .content-wrapper {
        direction: ltr; /* Reset text direction */
    }

    /* Image Styling */
    .image-wrapper {
        position: relative;
        padding: 20px;
    }

    .image-container {
        position: relative;
        border-radius: var(--radius-organic);
        overflow: hidden;
        box-shadow: var(--shadow-card);
        aspect-ratio: 4/3;
    }

    /* The Yellow Shape Feature */
    .with-shape::before {
        content: "";
        position: absolute;
        top: -20px;
        left: -20px;
        width: 100%;
        height: 100%;
        background-color: var(--accent-primary); /* Yellow */
        border-radius: 60px 20px 60px 20px; /* Asymmetric organic shape */
        z-index: -1;
        opacity: 0.2; /* Subtle yellow backing */
    }

    .with-shape::after {
        content: "";
        position: absolute;
        bottom: -20px;
        right: -20px;
        width: 60%;
        height: 60%;
        border: 4px solid var(--accent-primary);
        border-radius: 50%;
        z-index: 10;
        pointer-events: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--radius-organic);
        display: block;
    }

    /* Content Styling */
    .content-wrapper {
        text-align: left;
    }

    .section-title {
        font-family: var(--font-display);
        font-size: clamp(36px, 4vw, 48px); /* Spec: 48px H2 */
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 24px;
        line-height: 1.1;
        letter-spacing: -0.02em;
    }

    .section-subtitle {
        font-family: var(--font-body);
        font-size: 20px; /* Spec: 20px Body */
        color: var(--text-secondary);
        line-height: 1.5;
        margin-bottom: 32px;
    }

    .btn-accent {
        background-color: var(--accent-primary);
        color: var(--text-primary);
        font-weight: 700;
        padding: 12px 32px;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        transition: transform 0.2s;
    }

    .btn-accent:hover {
        transform: translateY(-2px);
        background-color: var(--accent-light);
    }

    @media (max-width: 900px) {
        .grid {
            grid-template-columns: 1fr;
            gap: 40px;
        }

        .reverse .grid {
            direction: ltr;
        }

        /* On mobile, reset standard stacking order usually: Image top or bottom? 
           Often Image Top is better. */
        .reverse .image-wrapper {
            order: -1;
        }
    }
</style>
