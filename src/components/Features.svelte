<script>
    const features = [
        {
            title: "Satellite-Verified ESG",
            description:
                "We use geospatial imagery and remote sensing to validate corporate environmental claims, eliminating greenwashing risk.",
            icon: "🛰️",
            bg: "#f0f7ff",
        },
        {
            title: "GRI & SASB Alignment",
            description:
                "Our scores are mapped directly to global reporting standards, ensuring your data is ready for institutional scrutiny.",
            icon: "📋",
            bg: "#f1f8f1",
        },
        {
            title: "Real-time Transition Tracking",
            description:
                "Monitor the shift from fossil fuels to renewables with live grid-level energy data and carbon intensity metrics.",
            icon: "🌱",
            bg: "#fff8f0",
        },
    ];
</script>

<section class="features">
    <div class="features-container">
        {#each features as feature}
            <div class="feature-card neumorphic-card">
                <div class="feature-icon neumorphic-inset">
                    {feature.icon}
                </div>
                <h3 class="feature-title">{feature.title}</h3>
                <p class="feature-description">{feature.description}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    .features {
        background-color: var(--page-bg);
        max-width: none;
        padding-top: 120px;
        padding-bottom: 120px;
    }

    .features-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .feature-card {
        background-color: var(--bg-color);
        padding: 48px 32px;
        border-radius: var(--border-radius-card);
        border: none;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .feature-card:hover {
        transform: translateY(-5px);
        /* Shadow hover state handled by neumorphic-card class if present, otherwise add here */
    }

    .feature-icon {
        font-size: 32px;
        margin-bottom: 24px;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(
            --bg-color
        ); /* Ensure it matches bg for inset effect */
    }

    .feature-title {
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 10px;
        color: #1d1d1f;
        letter-spacing: -0.01em;
    }

    .feature-description {
        font-size: 13px;
        color: #86868b;
        line-height: 1.5;
    }

    @media (max-width: 900px) {
        .features-container {
            grid-template-columns: 1fr;
            max-width: 500px;
        }
    }
</style>
