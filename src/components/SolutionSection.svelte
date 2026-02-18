<script>
    import SecurityVisual from "./SecurityVisual.svelte";

    export let title = "For Farmers";
    export let subtitle = "Our Complete Solution";
    export let description =
        "The Coresynq System features an innovative design enabling fast and scalable installations.";
    export let imageSrc = "/content-2.jpg";
    export let useVisualComponent = false;
    export let benefits = ["Benefit One", "Benefit Two", "Benefit Three"];
</script>

<section class="solution-section">
    <div class="container">
        <!-- Text Side -->
        <div class="content">
            <span class="label">{subtitle}</span>
            <h2 class="title">{title}</h2>
            <p class="description">{description}</p>

            <ul class="benefits">
                {#each benefits as benefit}
                    <li class="benefit-item">
                        <span class="icon">✅</span>
                        <span class="text">{benefit}</span>
                    </li>
                {/each}
            </ul>

            <button class="btn-primary">Read More</button>
        </div>

        <!-- Image Side -->
        <div class="visuaĺ">
            {#if useVisualComponent}
                <SecurityVisual />
            {:else}
                <img src={imageSrc} alt={title} loading="lazy" />
            {/if}
        </div>
    </div>
</section>

<style>
    .solution-section {
        background-color: var(
            --bg-cream,
            #fdfbf7
        ); /* Default to cream if var not set */
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
        color: var(--text-secondary);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 0.05em;
        display: block;
        margin-bottom: 16px;
    }

    .title {
        font-family: var(--font-display);
        font-size: 48px;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 24px;
        line-height: 1.1;
    }

    .description {
        font-size: 18px;
        color: #4a5568;
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

    .icon {
        color: var(--accent-primary); /* Yellow Check? Or Green? */
        /* User generic icon for now, usually green in eco sites, but yellow in HomeBiogas */
    }

    .btn-primary {
        background-color: var(--accent-primary);
        color: var(--text-primary);
        border: none;
        padding: 14px 40px;
        border-radius: 999px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.2s;
    }

    .btn-primary:hover {
        background-color: var(--accent-dark);
        transform: translateY(-2px);
    }

    .visuaĺ img {
        width: 100%;
        height: auto;
        border-radius: 40px; /* Soft Organic */
        box-shadow: var(--shadow-card);
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
