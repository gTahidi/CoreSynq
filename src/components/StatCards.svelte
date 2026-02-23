<script>
    import { onMount } from "svelte";

    let sectionEl;

    onMount(async () => {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const cards = sectionEl.querySelectorAll(".stat-card");
        const header = sectionEl.querySelector(".header");

        gsap.fromTo(
            header,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: { trigger: header, start: "top 85%" },
            },
        );

        gsap.fromTo(
            cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: { trigger: cards[0], start: "top 85%" },
            },
        );
    });
</script>

<section class="stat-cards-section" bind:this={sectionEl}>
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
                <div class="stat-icon-well">
                    <span class="stat-icon">📊</span>
                </div>
                <div class="stat-value">90<span class="symbol">%</span></div>
                <div class="stat-label">of Enterprise Emissions</div>
                <p class="stat-description">
                    Are typically Scope 3, hidden deep within the supply chain
                    and outside direct operational control.
                </p>
            </div>

            <div class="stat-card">
                <div class="stat-icon-well">
                    <span class="stat-icon">✅</span>
                </div>
                <div class="stat-value">100<span class="symbol">%</span></div>
                <div class="stat-label">Audit-Ready Lineage</div>
                <p class="stat-description">
                    Every calculation is traceable back to the source data,
                    ensuring full compliance with CSRD and ISSB.
                </p>
            </div>

            <div class="stat-card">
                <div class="stat-icon-well">
                    <span class="stat-icon">⚡</span>
                </div>
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
        background-color: var(--page-bg);
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
        font-size: clamp(36px, 4vw, 48px);
        color: var(--text-primary);
        margin-bottom: 24px;
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 1.08;
    }

    .section-subtitle {
        font-family: var(--font-body, sans-serif);
        font-size: 20px;
        line-height: 1.5;
        color: var(--text-secondary);
        max-width: 650px;
        margin: 0 auto;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }

    .stat-card {
        background: var(--card-bg);
        padding: 48px 32px;
        border-radius: var(--border-radius-card);
        box-shadow: var(--shadow-extruded);
        text-align: center;
        transition:
            transform 0.3s ease-out,
            box-shadow 0.3s ease-out;
    }

    .stat-card:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-extruded-hover);
    }

    /* Neumorphic icon well */
    .stat-icon-well {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: var(--card-bg);
        box-shadow: var(--shadow-inset-deep);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 24px;
    }

    .stat-icon {
        font-size: 28px;
        color: var(--accent-primary); /* Use Solar Yellow for icons */
    }

    .stat-value {
        font-family: var(--font-display, sans-serif);
        font-size: clamp(56px, 6vw, 80px);
        font-weight: 800;
        color: var(--text-primary);
        line-height: 1;
        margin-bottom: 16px;
        letter-spacing: -0.03em;
    }

    .symbol {
        font-size: 0.5em;
        vertical-align: super;
        color: var(--accent-primary);
        margin-left: 4px;
    }

    .stat-label {
        font-family: var(--font-display, sans-serif);
        font-size: 18px;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 16px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .stat-description {
        font-family: var(--font-body, sans-serif);
        font-size: 16px;
        line-height: 1.6;
        color: var(--text-secondary);
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
