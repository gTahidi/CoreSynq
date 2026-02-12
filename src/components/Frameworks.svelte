<script>
    const frameworks = [
        {
            name: "GRI (Impact Materiality)",
            role: "Double Materiality",
            desc: "Mapping detailed metrics across GRI 302 (Energy), 305 (Emissions), and 306 (Waste) to track total societal impact.",
        },
        {
            name: "SASB (Financial Risk)",
            role: "Investor-Focused",
            desc: "Sector-specific disclosure of ESG factors most likely to affect financial performance and valuation.",
        },
        {
            name: "MSCI (Relative Performance)",
            role: "Industry Benchmarking",
            desc: "Scoring companies against industry peers to identify leaders and laggards in environmental risk management.",
        },
        {
            name: "Sustainalytics (Absolute Risk)",
            role: "Unmanaged Risk Exposure",
            desc: "Focusing on unmanaged ESG risks, providing a 0–40+ scale where lower scores indicate lower environmental risk.",
        },
    ];
</script>

<section id="frameworks" class="frameworks-section">
    <div class="content-wrapper">
        <div class="frameworks-text">
            <span class="badge">Global Alignment</span>
            <h2>Integrated Standard Compliance</h2>
            <p>
                Our platform doesn't just collect data—it translates it into the
                languages of global finance and accountability.
            </p>

            <div class="framework-list">
                {#each frameworks as framework}
                    <div class="framework-item">
                        <div class="dot"></div>
                        <div class="item-content">
                            <strong>{framework.name}</strong>
                            <span>{framework.role}</span>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="frameworks-grid">
            {#each frameworks as framework}
                <div class="framework-card">
                    <h3>{framework.name}</h3>
                    <p>{framework.desc}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .frameworks-section {
        background: var(--page-bg);
        padding: 120px 24px;
    }

    .content-wrapper {
        max-width: 1100px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 80px;
        align-items: center;
    }

    .badge {
        display: inline-block;
        background: #f0f7ff;
        color: #0071e3;
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 16px;
    }

    .frameworks-text h2 {
        font-size: 36px;
        font-weight: 800;
        margin-bottom: 16px;
        letter-spacing: -0.02em;
        font-family: var(--font-display);
        color: var(--text-primary);
    }

    .frameworks-text p {
        font-size: 18px;
        color: var(--text-secondary);
        line-height: 1.5;
        margin-bottom: 40px;
        font-family: var(--font-body);
    }

    .framework-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .framework-item {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .dot {
        width: 8px;
        height: 8px;
        background: #0071e3;
        border-radius: 50%;
    }

    .item-content {
        display: flex;
        flex-direction: column;
    }

    .item-content strong {
        font-size: 15px;
        color: var(--text-primary);
    }

    .item-content span {
        font-size: 12px;
        color: var(--text-secondary);
        font-weight: 500;
    }

    .frameworks-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .framework-card {
        background: var(--card-bg);
        padding: 32px;
        border-radius: var(--border-radius-card);
        border: none;
        box-shadow: var(--shadow-extruded);
    }

    .framework-card h3 {
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 12px;
        color: var(--text-primary);
        font-family: var(--font-display);
    }

    .framework-card p {
        font-size: 13px;
        color: var(--text-secondary);
        line-height: 1.5;
        font-family: var(--font-body);
    }

    @media (max-width: 900px) {
        .content-wrapper {
            grid-template-columns: 1fr;
            gap: 60px;
        }
        .frameworks-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
