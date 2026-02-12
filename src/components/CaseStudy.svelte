<script>
    import { onMount } from "svelte";

    let activeNode = "satellite";

    const nodes = [
        {
            id: "satellite",
            title: "Satellite Verification",
            desc: "Real-time spectral analysis confirms on-site renewable installations.",
            icon: "🛰️",
            color: "#e3f2fd",
        },
        {
            id: "grid",
            title: "Grid Monitoring",
            desc: "Direct API connection to regional grids verifies energy mix source.",
            icon: "⚡",
            color: "#e8f5e9",
        },
        {
            id: "analysis",
            title: "AI Analysis",
            desc: "Proprietary models calculate net impact vs. industry peers.",
            icon: "🧠",
            color: "#f3e5f5",
        },
    ];

    onMount(() => {
        const interval = setInterval(() => {
            const currentIndex = nodes.findIndex((n) => n.id === activeNode);
            activeNode = nodes[(currentIndex + 1) % nodes.length].id;
        }, 4000);
        return () => clearInterval(interval);
    });

    function setActive(id) {
        activeNode = id;
    }

    function handleKey(e, id) {
        if (e.key === "Enter") setActive(id);
    }
</script>

<section class="case-study">
    <div class="case-header">
        <span class="badge">Live Example</span>
        <h2>How we track EcoSteel Corp</h2>
        <p>A transparent journey from raw data to a verified ESG score.</p>
    </div>

    <div class="tracking-demo">
        <div class="steps">
            {#each nodes as node}
                <div
                    role="button"
                    tabindex="0"
                    class="step-card"
                    class:active={activeNode === node.id}
                    on:click={() => setActive(node.id)}
                    on:keydown={(e) => handleKey(e, node.id)}
                >
                    <div class="step-icon neumorphic-inset">{node.icon}</div>
                    <div class="step-content">
                        <h3>{node.title}</h3>
                        <p>{node.desc}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="visualizer">
            <div class="company-profile">
                <div class="logo">🏭</div>
                <div class="info">
                    <strong>EcoSteel Corp</strong>
                    <span>Steel Manufacturing</span>
                </div>
                <div class="live-score">
                    <span class="label">Current Score</span>
                    <span class="value">88.4</span>
                </div>
            </div>

            <div class="node-map">
                <div class="central-hub">
                    <div class="pulse"></div>
                    🧠
                </div>
                <div
                    class="satellite-node"
                    class:active={activeNode === "satellite"}
                >
                    🛰️
                </div>
                <div class="grid-node" class:active={activeNode === "grid"}>
                    ⚡
                </div>
                <div
                    class="analysis-node"
                    class:active={activeNode === "analysis"}
                >
                    📊
                </div>

                <svg class="connections">
                    <line
                        x1="50%"
                        y1="50%"
                        x2="20%"
                        y2="30%"
                        class:active={activeNode === "satellite"}
                    />
                    <line
                        x1="50%"
                        y1="50%"
                        x2="80%"
                        y2="30%"
                        class:active={activeNode === "grid"}
                    />
                    <line
                        x1="50%"
                        y1="50%"
                        x2="50%"
                        y2="80%"
                        class:active={activeNode === "analysis"}
                    />
                </svg>
            </div>
        </div>
    </div>
</section>

<style>
    .case-study {
        background: var(--page-bg);
        padding: 120px 24px;
    }

    .case-header {
        text-align: center;
        margin-bottom: 60px;
    }

    .badge {
        display: inline-block;
        background: var(--bg-color);
        color: var(--accent-primary);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 700;
        margin-bottom: 16px;
        box-shadow: var(--shadow-extruded);
    }

    .case-header h2 {
        font-family: var(--font-display);
        color: var(--text-primary);
        font-size: 32px;
        font-weight: 800;
        margin-bottom: 10px;
        letter-spacing: -0.02em;
    }

    .case-header p {
        font-size: 16px;
        color: #86868b;
    }

    .tracking-demo {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 60px;
        align-items: center;
        max-width: 1100px;
        margin: 0 auto;
    }

    .steps {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .step-card {
        display: flex;
        gap: 20px;
        padding: 24px;
        border-radius: var(--border-radius-card);
        background: var(--bg-color);
        box-shadow: var(--shadow-extruded);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .step-card.active {
        box-shadow: var(--shadow-inset);
        transform: translateY(2px);
    }

    .step-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        flex-shrink: 0;
        background-color: var(--bg-color);
    }

    .step-content h3 {
        color: var(--text-primary);
        font-family: var(--font-display);
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    .step-content p {
        font-family: var(--font-body);
        font-size: 13px;
        color: #86868b;
        line-height: 1.4;
    }

    .visualizer {
        background: var(--bg-color);
        box-shadow: var(--shadow-inset-deep);
        border-radius: var(--border-radius-card);
        padding: 40px;
        height: 500px;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
    }

    .company-profile {
        background: var(--bg-color);
        padding: 16px 24px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
        box-shadow: var(--shadow-extruded);
        z-index: 2;
    }

    .logo {
        font-size: 32px;
    }
    .info {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .info strong {
        font-size: 16px;
    }
    .info span {
        font-size: 12px;
        color: #86868b;
    }

    .live-score {
        text-align: right;
    }
    .live-score .label {
        display: block;
        font-size: 10px;
        color: #86868b;
        font-weight: 700;
    }
    .live-score .value {
        font-size: 24px;
        font-weight: 800;
        color: #2e7d32;
    }

    .node-map {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .central-hub {
        width: 80px;
        height: 80px;
        background: var(--bg-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        z-index: 2;
        box-shadow: var(--shadow-extruded);
        position: relative;
    }

    .pulse {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #7b1fa2;
        opacity: 0.2;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 0.2;
        }
        100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    .satellite-node,
    .grid-node,
    .analysis-node {
        position: absolute;
        width: 50px;
        height: 50px;
        background: var(--bg-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        box-shadow: var(--shadow-extruded);
        transition: all 0.5s ease;
        z-index: 2;
    }

    .satellite-node {
        top: 15%;
        left: 15%;
    }
    .grid-node {
        top: 15%;
        right: 15%;
    }
    .analysis-node {
        bottom: 15%;
        left: 45%;
    }

    .active {
        transform: scale(1.1);
        box-shadow: var(--shadow-inset);
        color: var(--accent-primary);
        border: none;
    }

    .connections {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    line {
        stroke: #e0e0e0;
        stroke-width: 2;
        stroke-dasharray: 5, 5;
    }

    line.active {
        stroke: #0071e3;
        stroke-width: 3;
        stroke-dasharray: none;
        animation: flow 1s linear infinite;
    }

    @keyframes flow {
        to {
            stroke-dashoffset: -10;
        }
    }

    @media (max-width: 900px) {
        .tracking-demo {
            grid-template-columns: 1fr;
        }
        .visualizer {
            height: 400px;
        }
    }
</style>
