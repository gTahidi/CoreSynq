<script>
    import { onMount } from "svelte";
    import UIMockup from "./UIMockup.svelte";

    export let title = "Strategic Capability";
    export let description = "Description text goes here.";
    export let imageSrc = "/assets/placeholder-ui.png";
    export let mockupType = null;
    export let reverse = false;
    export let badge = "Feature";
    let className = "";
    export { className as class };

    let sectionEl;

    onMount(async () => {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const textEl = sectionEl.querySelector(".text-content");
        const mediaEl = sectionEl.querySelector(".media-content");

        const textDir = reverse ? 60 : -60;
        const mediaDir = reverse ? -60 : 60;

        gsap.fromTo(
            textEl,
            { x: textDir, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: { trigger: sectionEl, start: "top 75%" },
            },
        );

        gsap.fromTo(
            mediaEl,
            { x: mediaDir, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: { trigger: sectionEl, start: "top 75%" },
            },
        );
    });
</script>

<section
    class="feature-split-section {className}"
    class:reverse
    bind:this={sectionEl}
>
    <div class="content-wrapper">
        <div class="text-content">
            <span class="feature-badge">{badge}</span>
            <h2 class="feature-title">{title}</h2>
            <p class="feature-description">{description}</p>
            <button class="btn-text">
                Learn more <span class="arrow">→</span>
            </button>
        </div>

        <div class="media-content">
            <div
                class="image-container"
                class:has-mockup={!!mockupType && !imageSrc}
            >
                {#if imageSrc && imageSrc !== "/assets/placeholder-ui.png"}
                    <img src={imageSrc} alt={title} />
                {:else if mockupType}
                    <UIMockup type={mockupType} />
                {:else}
                    <div class="ui-placeholder">
                        <span class="placeholder-label">UI Mockup: {title}</span
                        >
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .feature-split-section {
        padding: 100px 24px;
        background-color: var(--page-bg);
        overflow: hidden;
    }

    .content-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 80px;
    }

    /* Reverse Modifier */
    .feature-split-section.reverse .content-wrapper {
        flex-direction: row-reverse;
    }

    .text-content {
        flex: 1;
        max-width: 500px;
    }

    .media-content {
        flex: 1;
        position: relative;
    }

    /* Neumorphic inset badge */
    .feature-badge {
        display: inline-block;
        font-family: var(--font-display, sans-serif);
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--accent-primary);
        margin-bottom: 24px;
        background: var(--card-bg);
        padding: 8px 20px;
        border-radius: 50px;
        box-shadow: var(--shadow-inset-small);
    }

    .feature-title {
        font-family: var(--font-display, sans-serif);
        font-size: clamp(36px, 3.5vw, 48px);
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 24px;
        line-height: 1.08;
        letter-spacing: -0.03em;
    }

    .feature-description {
        font-family: var(--font-body, sans-serif);
        font-size: 18px;
        line-height: 1.6;
        color: var(--text-secondary);
        margin-bottom: 32px;
    }

    .btn-text {
        background: none;
        border: none;
        padding: 0;
        font-family: var(--font-body, sans-serif);
        font-size: 16px;
        font-weight: 700;
        color: var(--text-primary); /* Use deep green instead of purple */
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease-out;
    }

    .btn-text:hover {
        color: var(--text-secondary);
        transform: translateX(4px);
    }

    .arrow {
        transition: transform 0.3s ease-out;
    }

    .btn-text:hover .arrow {
        transform: translateX(4px);
    }

    /* Neumorphic image container */
    .image-container {
        width: 100%;
        aspect-ratio: 16/10;
        border-radius: var(--border-radius-card);
        background: var(--card-bg);
        box-shadow: var(--shadow-extruded);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        transition:
            transform 0.3s ease-out,
            box-shadow 0.3s ease-out;
    }

    .image-container:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-extruded-hover);
    }

    .image-container.has-mockup {
        background: transparent;
        box-shadow: none;
        overflow: visible;
    }

    .image-container.has-mockup:hover {
        transform: none;
        box-shadow: none;
    }

    .ui-placeholder {
        width: 100%;
        height: 100%;
        background: var(--card-bg);
        box-shadow: var(--shadow-inset);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--border-radius-card);
    }

    .placeholder-label {
        color: var(--text-secondary);
        font-weight: 600;
        font-family: var(--font-display, sans-serif);
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 900px) {
        .content-wrapper {
            flex-direction: column;
            gap: 48px;
        }

        .feature-split-section.reverse .content-wrapper {
            flex-direction: column;
        }

        .text-content {
            max-width: 100%;
            text-align: left;
        }
    }
</style>
