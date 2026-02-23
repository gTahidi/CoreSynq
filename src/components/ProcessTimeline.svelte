<script>
    import { onMount } from "svelte";

    const steps = [
        {
            number: "01",
            title: "Ingest",
            desc: "Directly connect to ERPs and procurement systems to gather raw activity data automatically.",
            icon: "📥",
        },
        {
            number: "02",
            title: "Compute",
            desc: "Apply vetted emission factors to calculate precise carbon footprints across all scopes.",
            icon: "⚙️",
        },
        {
            number: "03",
            title: "Act",
            desc: "Identify hotspots, model reduction scenarios, and procure high-quality carbon credits.",
            icon: "🎯",
        },
        {
            number: "04",
            title: "Report",
            desc: "Generate audit-ready reports optimized for CSRD, ISSB, and stakeholder disclosure.",
            icon: "📋",
        },
    ];

    let container;
    let visibleStepIndex = -1;

    onMount(async () => {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Header animation
        const header = container.querySelector(".header");
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

        // Staggered step reveal via ScrollTrigger
        ScrollTrigger.create({
            trigger: container,
            start: "top 60%",
            onEnter: () => animateSteps(),
        });
    });

    function animateSteps() {
        if (visibleStepIndex >= 0) return; // already animated
        let current = 0;
        visibleStepIndex = current;

        const interval = setInterval(() => {
            current++;
            if (current < steps.length) {
                visibleStepIndex = current;
            } else {
                clearInterval(interval);
            }
        }, 600);
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
            <!-- Inset Track Line -->
            <div class="timeline-track">
                <div
                    class="timeline-track-fill"
                    style="width: {visibleStepIndex >= 0
                        ? (visibleStepIndex / (steps.length - 1)) * 100
                        : 0}%"
                ></div>
            </div>

            {#each steps as step, i}
                <div class="timeline-step" class:active={i <= visibleStepIndex}>
                    <div class="step-marker">
                        <span class="step-icon">{step.icon}</span>
                    </div>
                    <div class="step-content">
                        <span class="step-number">{step.number}</span>
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
        background-color: var(--page-bg);
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
    }

    .timeline-container {
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-top: 20px;
    }

    /* Neumorphic inset track */
    .timeline-track {
        position: absolute;
        top: 55px;
        left: 11%;
        right: 11%;
        height: 6px;
        background: var(--card-bg);
        box-shadow: var(--shadow-inset-small);
        border-radius: 9999px;
        z-index: 1;
        overflow: hidden;
    }

    .timeline-track-fill {
        height: 100%;
        background: var(--accent-primary);
        border-radius: 9999px;
        transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0 0 12px rgba(255, 199, 0, 0.4); /* Yellow glow */
    }

    .timeline-step {
        position: relative;
        z-index: 2;
        width: 22%;
        text-align: center;
        opacity: 0.4;
        transform: translateY(10px);
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .timeline-step.active {
        opacity: 1;
        transform: translateY(0);
    }

    .step-marker {
        width: 64px;
        height: 64px;
        background-color: var(--card-bg);
        box-shadow: var(--shadow-inset-deep);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 24px auto;
        position: relative;
        transition: all 0.4s ease-out;
    }

    .timeline-step.active .step-marker {
        box-shadow: var(--shadow-extruded);
        background: var(--card-bg);
        transform: scale(1.1);
    }

    .step-icon {
        font-size: 24px;
        transition: transform 0.4s ease-out;
    }

    .timeline-step.active .step-icon {
        transform: scale(1.15);
    }

    .step-number {
        font-family: "DM Sans", monospace;
        font-size: 12px;
        font-weight: 700;
        color: var(--accent-primary);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        display: block;
        margin-bottom: 8px;
    }

    .step-title {
        font-family: var(--font-display, sans-serif);
        font-size: 22px;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 12px;
    }

    .step-desc {
        font-family: var(--font-body, sans-serif);
        font-size: 15px;
        line-height: 1.5;
        color: var(--text-secondary);
    }

    @media (max-width: 768px) {
        .timeline-container {
            flex-direction: column;
            gap: 40px;
            padding-left: 20px;
        }

        .timeline-track {
            display: none;
        }

        .timeline-step {
            width: 100%;
            display: flex;
            text-align: left;
            align-items: flex-start;
            opacity: 1;
            transform: none;
        }

        .step-marker {
            margin: 0 24px 0 0;
            flex-shrink: 0;
        }

        .step-content {
            padding-top: 4px;
        }
    }
</style>
