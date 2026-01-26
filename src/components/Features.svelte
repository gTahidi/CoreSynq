<script>
    const features = [
        {
            title: "Satellite-Verified ESG",
            description: "We use geospatial imagery and remote sensing to validate corporate environmental claims, eliminating greenwashing risk.",
            icon: "🛰️",
            bg: "#f0f7ff"
        },
        {
            title: "GRI & SASB Alignment",
            description: "Our scores are mapped directly to global reporting standards, ensuring your data is ready for institutional scrutiny.",
            icon: "📋",
            bg: "#f1f8f1"
        },
        {
            title: "Real-time Transition Tracking",
            description: "Monitor the shift from fossil fuels to renewables with live grid-level energy data and carbon intensity metrics.",
            icon: "🌱",
            bg: "#fff8f0"
        }
    ];
</script>

<section class="features">
    <div class="features-container">
        {#each features as feature}
            <div class="feature-card">
                <div class="feature-icon" style="background: {feature.bg}">
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
        background-color: #fafafa;
        max-width: none;
    }

    .features-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
        max-width: 1100px;
        margin: 0 auto;
    }

    .feature-card {
        background: #ffffff;
        padding: 48px 32px;
        border-radius: 24px;
        border: 1px solid rgba(0,0,0,0.02);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .feature-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.03);
    }

    .feature-icon {
        font-size: 40px;
        margin-bottom: 24px;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
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
