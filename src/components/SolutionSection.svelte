<script>
    import { onMount } from "svelte";
    import SecurityVisual from "./SecurityVisual.svelte";

    export let title = "For Farmers";
    export let subtitle = "Our Complete Solution";
    export let description =
        "The Coresynq System features an innovative design enabling fast and scalable installations.";
    export let imageSrc = "/content-2.jpg";
    export let useVisualComponent = false;
    export let benefits = ["Benefit One", "Benefit Two", "Benefit Three"];

    let sectionEl;

    onMount(async () => {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const textContent = sectionEl.querySelector(".content");
        const mediaContent = sectionEl.querySelector(".visual");

        gsap.fromTo(
            textContent,
            { x: -60, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: { trigger: sectionEl, start: "top 75%" },
            },
        );

        gsap.fromTo(
            mediaContent,
            { x: 60, opacity: 0 },
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

<section class="solution-section" bind:this={sectionEl}>
    <div class="container">
        <!-- Text Side -->
        <div class="content">
            <span class="label">{subtitle}</span>
            <h2 class="title">{title}</h2>
            <p class="description">{description}</p>

            <ul class="benefits">
                {#each benefits as benefit}
                    <li class="benefit-item">
                        <span class="benefit-icon-well">✓</span>
                        <span class="text">{benefit}</span>
                    </li>
                {/each}
            </ul>

            <button class="btn-neumorphic">Read More</button>
        </div>

        <!-- Image Side -->
        <div class="visual">
            {#if useVisualComponent}
                <SecurityVisual />
            {:else}
                <div class="image-wrapper">
                    <img src={imageSrc} alt={title} loading="lazy" />
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    .solution-section {
        background-color: var(--page-bg);
        padding: var(--section-padding);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
    }

    .label {
        color: var(--accent-primary);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 0.1em;
        display: inline-block;
        margin-bottom: 16px;
        background: var(--card-bg);
        padding: 8px 16px;
        border-radius: 50px;
        box-shadow: var(--shadow-inset-small);
    }

    .title {
        font-family: var(--font-display);
        font-size: clamp(36px, 4vw, 48px);
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 24px;
        line-height: 1.08;
        letter-spacing: -0.03em;
    }

    .description {
        font-size: 18px;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 32px;
    }

    .benefits {
        list-style: none;
        padding: 0;
        margin-bottom: 40px;
    }

    .benefit-item {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
        font-weight: 600;
        color: var(--text-primary);
    }

    .benefit-icon-well {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--card-bg);
        box-shadow: var(--shadow-inset-small);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        color: var(--text-primary); /* Deep Green checkmarks */
        flex-shrink: 0;
    }

    .btn-neumorphic {
        background-color: var(--card-bg);
        color: var(--text-primary);
        border: none;
        padding: 14px 40px;
        border-radius: var(--border-radius-btn);
        font-weight: 700;
        cursor: pointer;
        box-shadow: var(--shadow-extruded);
        transition: all 0.3s ease-out;
        font-family: var(--font-body);
        font-size: 15px;
    }

    .btn-neumorphic:hover {
        transform: translateY(-1px);
        box-shadow: var(--shadow-extruded-hover);
        color: var(--text-secondary);
    }

    .btn-neumorphic:active {
        transform: translateY(0.5px);
        box-shadow: var(--shadow-inset-small);
    }

    .image-wrapper {
        border-radius: var(--border-radius-card);
        overflow: hidden;
        box-shadow: var(--shadow-extruded);
        transition:
            transform 0.3s ease-out,
            box-shadow 0.3s ease-out;
    }

    .image-wrapper:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-extruded-hover);
    }

    .image-wrapper img {
        width: 100%;
        height: auto;
        display: block;
    }

    @media (max-width: 900px) {
        .container {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .benefit-item {
            justify-content: center;
        }
    }
</style>
