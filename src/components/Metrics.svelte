<script>
    const metrics = [
        {
            title: "Carbon Footprint (GHG)",
            desc: "Scope 1, 2, and 3 emissions tracking using satellite-verified sensor data.",
            value: "CO₂e Tons",
            icon: "💨",
            color: "#fee2e2",
        },
        {
            title: "Energy Intensity",
            desc: "Real-time renewable vs. fossil fuel mix verification via grid API.",
            value: "% Renewable",
            icon: "⚡",
            color: "#fef3c7",
        },
        {
            title: "Water Stewardship",
            desc: "Freshwater withdrawal and recycling efficiency monitoring.",
            value: "m³ / Unit",
            icon: "💧",
            color: "#e0f2fe",
        },
        {
            title: "Circular Waste",
            desc: "Total waste generation and high-precision recycling rate audits.",
            value: "% Recycled",
            icon: "♻️",
            color: "#dcfce7",
        },
    ];
</script>

<section id="metrics" class="metrics-grid">
    <div class="metrics-header">
        <span class="badge">Environmental Pillar</span>
        <h2>Deep Intelligence Metrics</h2>
        <p>
            Moving beyond basic disclosure to rigorous, data-driven performance
            indicators.
        </p>
    </div>

    <div class="grid-container">
        {#each metrics as metric}
            <div class="metric-card">
                <div
                    class="metric-icon neumorphic-inset"
                    style="background: {metric.color}"
                >
                    {metric.icon}
                </div>
                <div class="metric-content">
                    <h3>{metric.title}</h3>
                    <p>{metric.desc}</p>
                    <div class="metric-meta">
                        <span class="unit-label">Unit of Measure:</span>
                        <span class="unit-value">{metric.value}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .metrics-grid {
        background: var(--page-bg);
        padding: 120px 24px;
    }

    .metrics-header {
        text-align: center;
        margin-bottom: 60px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .badge {
        display: inline-block;
        background: #f1f8f1;
        color: #2e7d32;
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 16px;
    }

    .metrics-header h2 {
        font-size: 32px;
        font-weight: 800;
        margin-bottom: 12px;
        letter-spacing: -0.02em;
        font-family: var(--font-display);
        color: var(--text-primary);
    }

    .metrics-header p {
        font-size: 16px;
        color: var(--text-secondary);
        font-family: var(--font-body);
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 24px;
        max-width: 1100px;
        margin: 0 auto;
    }

    .metric-card {
        background: var(--card-bg);
        padding: 32px;
        border-radius: var(--border-radius-card);
        border: none;
        box-shadow: var(--shadow-extruded);
        transition: all 0.3s ease;
    }

    .metric-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-extruded-hover);
    }

    .metric-icon {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        margin-bottom: 24px;
    }

    .metric-content h3 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 8px;
        color: var(--text-primary);
        font-family: var(--font-display);
    }

    .metric-content p {
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.5;
        margin-bottom: 20px;
        font-family: var(--font-body);
    }

    .metric-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 16px;
        border-top: 1px solid rgba(0, 0, 0, 0.05); /* Subtle border */
    }

    .unit-label {
        font-size: 11px;
        font-weight: 600;
        color: var(--text-secondary);
        text-transform: uppercase;
    }

    .unit-value {
        font-size: 12px;
        font-weight: 700;
        color: var(--text-primary);
    }
</style>
