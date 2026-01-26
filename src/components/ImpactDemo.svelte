<script>
    import { onMount } from 'svelte';
    
    let score = 0;
    let observer;
    let element;

    onMount(() => {
        observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const interval = setInterval(() => {
                    score = (score < 94 ? score + 1 : 94);
                    if (score >= 94) clearInterval(interval);
                }, 20);
                observer.disconnect();
            }
        });

        observer.observe(element);
        return () => observer.disconnect();
    });
</script>

<section class="impact-demo" bind:this={element}>
    <div class="demo-container">
        <div class="demo-text">
            <h2>Visualize Your Impact</h2>
            <p>See how real-time green energy adoption directly correlates with your objective ESG score.</p>
        </div>
        <div class="demo-visual">
            <div class="score-circle">
                <svg viewBox="0 0 36 36" class="circular-chart">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        stroke-dasharray={`${score}, 100`}
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                </svg>
                <div class="score-value">
                    <span>{score}</span>
                    <span class="score-label">ESG Score</span>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .impact-demo {
        background-color: #ffffff;
    }

    .demo-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1000px;
        margin: 0 auto;
        gap: 60px;
        background: #fafafa;
        padding: 80px;
        border-radius: 32px;
    }

    .demo-text {
        flex: 1;
    }

    .demo-text h2 {
        font-size: 32px;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 16px;
        letter-spacing: -0.02em;
    }

    .demo-text p {
        font-size: 16px;
        color: #86868b;
        line-height: 1.5;
    }

    .demo-visual {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .score-circle {
        position: relative;
        width: 280px;
        height: 280px;
        background: #ffffff;
        border-radius: 50%;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.02);
    }

    .circular-chart {
        width: 100%;
        height: 100%;
    }

    .circle-bg {
        fill: none;
        stroke: #f5f5f7;
        stroke-width: 2.5;
    }

    .circle {
        fill: none;
        stroke: #2e7d32;
        stroke-width: 2.5;
        stroke-linecap: round;
        transition: stroke-dasharray 0.1s ease;
    }

    .score-value {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .score-value span:first-child {
        display: block;
        font-size: 48px;
        font-weight: 800;
        line-height: 1;
        color: #1d1d1f;
        letter-spacing: -0.04em;
    }

    .score-label {
        font-size: 10px;
        font-weight: 600;
        color: #86868b;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    @media (max-width: 800px) {
        .demo-container {
            flex-direction: column;
            padding: 40px;
            text-align: center;
        }
    }
</style>
