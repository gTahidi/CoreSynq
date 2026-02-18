<section class="stat-cards-section">
    <div class="content-wrapper">
        <div class="header">
            <h2 class="section-title">The Hidden Risk in Your Supply Chain</h2>
            <p class="section-subtitle">
                Scope 3 emissions often account for the vast majority of an
                enterprise's carbon footprint, yet they remain the hardest to
                measure and manage.
            </p>
        </div>

        <div class="cards-grid">
            <div class="stat-card">
                <div class="stat-value">90<span class="symbol">%</span></div>
                <div class="stat-label">of Enterprise Emissions</div>
                <p class="stat-description">
                    Are typically Scope 3, hidden deep within the supply chain
                    and outside direct operational control.
                </p>
            </div>

            <div class="stat-card">
                <div class="stat-value">100<span class="symbol">%</span></div>
                <div class="stat-label">Audit-Ready Lineage</div>
                <p class="stat-description">
                    Every calculation is traceable back to the source data,
                    ensuring full compliance with CSRD and ISSB.
                </p>
            </div>

            <div class="stat-card">
                <div class="stat-value">24/7</div>
                <div class="stat-label">Automated Monitoring</div>
                <p class="stat-description">
                    Continuous data ingestion means your ESG intelligence is
                    always up-to-date, not just a yearly snapshot.
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .stat-cards-section {
        padding: 120px 24px;
        background-color: #f8f9fa; /* Light Mist */
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .content-wrapper {
        max-width: 1200px;
        margin: 0 auto;
    }

    .header {
        text-align: center;
        margin-bottom: 80px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .section-title {
        font-family: var(--font-display, sans-serif);
        font-size: clamp(36px, 4vw, 48px); /* Spec: 48px H2 */
        color: var(--text-primary, #0f3d3e);
        margin-bottom: 24px;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.1;
    }

    .section-subtitle {
        font-family: var(--font-body, sans-serif);
        font-size: 20px; /* Spec: 20px Body */
        line-height: 1.5;
        color: var(--text-secondary, #4a5568);
        max-width: 650px;
        margin: 0 auto;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }

    .stat-card {
        background: white;
        padding: 48px 32px;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(0, 0, 0, 0.03);
        text-align: center;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
    }

    .stat-value {
        font-family: var(--font-display, sans-serif);
        font-size: clamp(56px, 6vw, 80px);
        font-weight: 800;
        color: var(--text-primary, #0f3d3e);
        line-height: 1;
        margin-bottom: 16px;
        letter-spacing: -0.03em;
    }

    .symbol {
        font-size: 0.5em;
        vertical-align: super;
        color: var(--accent-primary, #ffc700);
        margin-left: 4px;
    }

    .stat-label {
        font-family: var(--font-display, sans-serif);
        font-size: 20px;
        font-weight: 700;
        color: var(--text-primary, #0f3d3e);
        margin-bottom: 16px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .stat-description {
        font-family: var(--font-body, sans-serif);
        font-size: 16px;
        line-height: 1.6;
        color: var(--text-secondary, #4a5568);
    }

    @media (max-width: 1024px) {
        .cards-grid {
            gap: 24px;
        }
    }

    @media (max-width: 768px) {
        .stat-cards-section {
            padding: 80px 24px;
        }

        .cards-grid {
            grid-template-columns: 1fr;
            gap: 32px;
        }

        .stat-card {
            padding: 32px 24px;
        }
    }
</style>
