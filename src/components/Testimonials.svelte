<script>
    import { onMount } from "svelte";

    export let testimonials = [
        {
            quote: "Coresynq has completely transformed how we track Scope 3 emissions. The granularity of the data is unmatched.",
            author: "Wanjiku Kimani",
            role: "Chief Sustainability Officer, AgriTech East Africa",
            initials: "WK",
        },
        {
            quote: "The automated ingestion features alone saved our team hundreds of hours. It's the audit-ready solution we needed.",
            author: "Juma Odhiambo",
            role: "Head of ESG, Regional Logistics",
            initials: "JO",
        },
        {
            quote: "Finally, a platform that bridges the gap between procurement data and scientific climate modeling.",
            author: "Fatuma Hassan",
            role: "Director of Operations, GreenBuild Kenya",
            initials: "FH",
        },
    ];

    let sectionEl;

    onMount(async () => {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const cards = sectionEl.querySelectorAll(".testimonial-card");
        gsap.fromTo(
            cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: { trigger: sectionEl, start: "top 80%" },
            },
        );
    });
</script>

<section class="testimonials-section" bind:this={sectionEl}>
    <div class="container">
        <div class="header">
            <h2 class="section-title">Trusted by Industry Leaders</h2>
        </div>

        <div class="grid">
            {#each testimonials as t, i}
                <div class="testimonial-card">
                    <div class="quote-icon">"</div>
                    <p class="quote-text">{t.quote}</p>
                    <div class="author-info">
                        <div class="avatar-well">
                            {t.initials}
                        </div>
                        <div class="meta">
                            <div class="author-name">{t.author}</div>
                            <div class="author-role">{t.role}</div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .testimonials-section {
        padding: 120px 24px;
        background-color: var(--page-bg);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .header {
        text-align: center;
        margin-bottom: 60px;
    }

    .section-title {
        font-family: var(--font-display);
        font-size: clamp(36px, 4vw, 48px);
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -0.03em;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }

    .testimonial-card {
        background: var(--card-bg);
        padding: 40px 32px;
        border-radius: var(--border-radius-card);
        box-shadow: var(--shadow-extruded);
        display: flex;
        flex-direction: column;
        transition:
            transform 0.3s ease-out,
            box-shadow 0.3s ease-out;
    }

    .testimonial-card:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-extruded-hover);
    }

    .quote-icon {
        font-size: 60px;
        line-height: 1;
        color: var(--accent-primary);
        font-family: serif;
        opacity: 0.4;
        margin-bottom: 16px;
    }

    .quote-text {
        font-family: var(--font-body);
        font-size: 17px;
        line-height: 1.65;
        color: var(--text-secondary);
        flex-grow: 1;
        margin-bottom: 32px;
    }

    .author-info {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    /* Neumorphic inset avatar well */
    .avatar-well {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--card-bg);
        box-shadow: var(--shadow-inset-deep);
        color: var(--accent-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-family: var(--font-display);
        font-size: 16px;
        flex-shrink: 0;
    }

    .meta {
        display: flex;
        flex-direction: column;
    }

    .author-name {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 16px;
        color: var(--text-primary);
    }

    .author-role {
        font-family: var(--font-body);
        font-size: 13px;
        color: var(--text-secondary);
    }

    @media (max-width: 900px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
