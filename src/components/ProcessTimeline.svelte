<script>
    import { onMount } from "svelte";

    const steps = [
        {
            number: "01",
            title: "Ingest",
            desc: "Directly connect to ERPs and procurement systems to gather raw activity data automatically.",
        },
        {
            number: "02",
            title: "Compute",
            desc: "Apply vetted emission factors to calculate precise carbon footprints across all scopes.",
        },
        {
            number: "03",
            title: "Act",
            desc: "Identify hotspots, model reduction scenarios, and procure high-quality carbon credits.",
        },
        {
            number: "04",
            title: "Report",
            desc: "Generate audit-ready reports optimized for CSRD, ISSB, and stakeholder disclosure.",
        },
    ];

    let container;
    let visibleStepIndex = -1;
    let hasAnimated = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;
                        animateSteps();
                    }
                });
            },
            { threshold: 0.5 },
        );

        if (container) observer.observe(container);

        return () => observer.disconnect();
    });

    function animateSteps() {
        let current = 0;
        // Light up the first one immediately
        visibleStepIndex = current;

        const interval = setInterval(() => {
            current++;
            if (current < steps.length) {
                visibleStepIndex = current;
            } else {
                clearInterval(interval);
            }
        }, 800);
    }
</script>

<section class="timeline-section" bind:this={container}>
    <div class="content-wrapper">
        <div class="header">
            <h2 class="section-title">Your Path to Net-Zero</h2>
            <p class="section-subtitle">
                A streamlined, scientific approach to decarbonization. From raw
                data to regulatory compliance in four steps.
            </p>
        </div>

        <div class="timeline-container">
            <!-- Connecting Line -->
            <div class="timeline-line"></div>
            <!-- Active Line Overlay -->
            <div
                class="timeline-line active"
                style="width: {(visibleStepIndex / (steps.length - 1)) * 100}%"
            ></div>

            {#each steps as step, i}
                <div class="timeline-step" class:active={i <= visibleStepIndex}>
                    <div class="step-marker">{step.number}</div>
                    <div class="step-content">
                        <h3 class="step-title">{step.title}</h3>
                        <p class="step-desc">{step.desc}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .timeline-section {
        padding: 120px 24px;
        background-color: white;
    }

    .content-wrapper {
        max-width: 1200px;
        margin: 0 auto;
    }

    .header {
        text-align: center;
        margin-bottom: 100px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .section-title {
        font-family: var(--font-display, sans-serif);
        font-size: clamp(32px, 4vw, 48px);
        color: var(--text-primary, #0f3d3e);
        margin-bottom: 24px;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.1;
    }

    .section-subtitle {
        font-family: var(--font-body, sans-serif);
        font-size: 20px;
        line-height: 1.5;
        color: var(--text-secondary, #4a5568);
    }

    .timeline-container {
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-top: 20px;
    }

    /* The connecting horizontal line */
    .timeline-line {
        position: absolute;
        top: 50px; /* Aligned with center of markers (60px height -> 30px + padding top 20px = 50px) */
        left: 11%; /* Approximate center of first marker */
        right: 11%;
        height: 2px;
        background-color: #e2e8f0;
        z-index: 1;
    }

    .timeline-line.active {
        background-color: var(--accent-primary, #ffc700);
        z-index: 1;
        right: auto; /* Width controlled inline */
        transition: width 0.8s ease;
    }

    .timeline-step {
        position: relative;
        z-index: 2;
        width: 22%;
        text-align: center;
        opacity: 0.5;
        transform: translateY(10px);
        transition: all 0.5s ease;
    }

    .timeline-step.active {
        opacity: 1;
        transform: translateY(0);
    }

    .step-marker {
        width: 60px;
        height: 60px;
        background-color: white;
        border: 2px solid #e2e8f0;
        color: var(--text-secondary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-display, sans-serif);
        font-weight: 700;
        font-size: 18px;
        margin: 0 auto 32px auto;
        position: relative;
        transition: all 0.3s ease;
    }

    .timeline-step.active .step-marker {
        background-color: var(--accent-primary, #ffc700);
        border-color: var(--accent-primary, #ffc700);
        color: var(--text-primary);
        box-shadow: 0 0 20px rgba(255, 199, 0, 0.4);
        transform: scale(1.1);
    }

    .step-title {
        font-family: var(--font-display, sans-serif);
        font-size: 24px;
        font-weight: 700;
        color: var(--text-primary, #0f3d3e);
        margin-bottom: 16px;
    }

    .step-desc {
        font-family: var(--font-body, sans-serif);
        font-size: 16px;
        line-height: 1.5;
        color: var(--text-secondary, #4a5568);
    }

    @media (max-width: 768px) {
        .timeline-container {
            flex-direction: column;
            gap: 40px;
            padding-left: 20px;
        }

        .timeline-line {
            display: none;
        }

        .timeline-step {
            width: 100%;
            display: flex;
            text-align: left;
            align-items: flex-start;
            opacity: 1; /* Always visible on mobile */
            transform: none;
        }

        .step-marker {
            margin: 0 24px 0 0;
            flex-shrink: 0;
        }

        .step-content {
            padding-top: 8px;
        }
    }
</style>
