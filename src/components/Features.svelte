<script>
    const features = [
        {
            title: "Multilingual Intelligence",
            description:
                "Process global financial and operational data in its native language. Our AI seamlessly handles local regulatory nuances across major languages to ensure precision and compliance.",
            icon: "🌍",
        },
        {
            title: "Audit-Ready Assurance",
            description:
                "Streamline collaboration with authoring tools, approval workflows, and permissioning. Export to Word with XBRL tagging to get to design and publication faster.",
            icon: "🛡️",
        },
        {
            title: "Real-World Impact",
            description:
                "Go beyond reporting. Easily repurpose data to model scenarios, set targets for CSDDD, and fund scientifically vetted carbon removal technologies from our industry-leading marketplace.",
            icon: "🌍",
        },
    ];
</script>

<section class="features">
    <div class="features-container">
        {#each features as feature}
            <div class="feature-card">
                <div class="feature-icon-wrapper">
                    <span class="feature-icon">{feature.icon}</span>
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
        padding-top: 60px; /* Reduced top padding as Hero has bottom margin */
        padding-bottom: 120px;
    }

    .features-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
    }

    .feature-card {
        background-color: white;
        padding: 40px 32px;
        border-radius: 32px; /* Soft rounding */
        /* Clean soft card shadow */
        box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.08);
        transition: transform 0.3s ease;
        border: 1px solid rgba(0, 0, 0, 0.03);
    }

    .feature-card:hover {
        transform: translateY(-8px);
    }

    .feature-icon-wrapper {
        width: 64px;
        height: 64px;
        background-color: rgba(15, 61, 62, 0.05); /* Very light green bg */
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
    }

    .feature-icon {
        font-size: 28px;
    }

    .feature-title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 12px;
        color: var(--text-primary);
    }

    .feature-description {
        font-size: 15px;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    @media (max-width: 900px) {
        .features-container {
            grid-template-columns: 1fr;
            max-width: 500px;
        }
    }
</style>
