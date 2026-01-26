<script>
    const metrics = [
        { 
            title: "Carbon Footprint (GHG)", 
            desc: "Scope 1, 2, and 3 emissions tracking using satellite-verified sensor data.",
            value: "CO₂e Tons",
            icon: "💨",
            color: "#fee2e2"
        },
        { 
            title: "Energy Intensity", 
            desc: "Real-time renewable vs. fossil fuel mix verification via grid API.",
            value: "% Renewable",
            icon: "⚡",
            color: "#fef3c7"
        },
        { 
            title: "Water Stewardship", 
            desc: "Freshwater withdrawal and recycling efficiency monitoring.",
            value: "m³ / Unit",
            icon: "💧",
            color: "#e0f2fe"
        },
        { 
            title: "Circular Waste", 
            desc: "Total waste generation and high-precision recycling rate audits.",
            value: "% Recycled",
            icon: "♻️",
            color: "#dcfce7"
        }
    ];
</script>

<section id="metrics" class="metrics-grid">
    <div class="metrics-header">
        <span class="badge">Environmental Pillar</span>
        <h2>Deep Intelligence Metrics</h2>
        <p>Moving beyond basic disclosure to rigorous, data-driven performance indicators.</p>
    </div>

    <div class="grid-container">
        {#each metrics as metric}
            <div class="metric-card">
                <div class="metric-icon" style="background: {metric.color}">{metric.icon}</div>
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
        background: #fafafa;
        padding: 100px 24px;
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
    }

    .metrics-header p {
        font-size: 16px;
        color: #86868b;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 24px;
        max-width: 1100px;
        margin: 0 auto;
    }

    .metric-card {
        background: white;
        padding: 32px;
        border-radius: 24px;
        border: 1px solid rgba(0,0,0,0.03);
        transition: all 0.3s ease;
    }

    .metric-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.03);
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
    }

    .metric-content p {
        font-size: 14px;
        color: #86868b;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    .metric-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 16px;
        border-top: 1px solid #f5f5f7;
    }

    .unit-label {
        font-size: 11px;
        font-weight: 600;
        color: #86868b;
        text-transform: uppercase;
    }

    .unit-value {
        font-size: 12px;
        font-weight: 700;
        color: #1d1d1f;
    }
</style>
