<script>
    export let testimonials = [
        {
            quote: "Coresynq has completely transformed how we track Scope 3 emissions. The granularity of the data is unmatched.",
            author: "Sarah Jenkins",
            role: "Chief Sustainability Officer, TechFlow",
            avatar: "/avatars/avatar-1.png", // We'll just use a colored div fallback if image fails
        },
        {
            quote: "The automated ingestion features alone saved our team hundreds of hours. It's the audit-ready solution we needed.",
            author: "David Chen",
            role: "Head of ESG, Global Logistics",
            avatar: "/avatars/avatar-2.png",
        },
        {
            quote: "Finally, a platform that bridges the gap between procurement data and scientific climate modeling.",
            author: "Elena Rodriguez",
            role: "Director of Operations, GreenBuild",
            avatar: "/avatars/avatar-3.png",
        },
    ];
</script>

<section class="testimonials-section">
    <div class="container">
        <div class="header">
            <h2 class="section-title">Trusted by Industry Leaders</h2>
        </div>

        <div class="grid">
            {#each testimonials as t, i}
                <div class="testimonial-card">
                    <div class="quote-icon">“</div>
                    <p class="quote-text">{t.quote}</p>
                    <div class="author-info">
                        <div class="avatar-placeholder">
                            {t.author.charAt(0)}
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
        font-size: 48px;
        font-weight: 700;
        color: var(--text-primary);
        letter-spacing: -0.02em;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }

    .testimonial-card {
        background: white;
        padding: 40px 32px;
        border-radius: 20px;
        box-shadow: var(--shadow-card);
        border: 1px solid rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-float);
    }

    .quote-icon {
        font-size: 60px;
        line-height: 1;
        color: var(--accent-primary);
        font-family: serif;
        opacity: 0.3;
        margin-bottom: 16px;
    }

    .quote-text {
        font-family: var(--font-body);
        font-size: 18px;
        line-height: 1.6;
        color: var(--text-secondary);
        flex-grow: 1;
        margin-bottom: 32px;
    }

    .author-info {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .avatar-placeholder {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #f0fdf4; /* Mint 50 */
        color: var(--text-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-family: var(--font-display);
        font-size: 20px;
        border: 1px solid #bbf7d0;
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
        font-size: 14px;
        color: #94a3b8;
    }

    @media (max-width: 900px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
