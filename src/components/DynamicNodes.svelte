<script>
    import { onMount, onDestroy } from "svelte";

    let sectionContainer;
    let progress = 0;
    let innerHeight = 0;
    let scrollY = 0;

    // Animation state
    let time = 0;
    let animationFrame;
    let mouse = { x: 0, y: 0 };
    let targetMouse = { x: 0, y: 0 };

    let nodes = [
        {
            id: "satellite",
            label: "Satellite Data",
            icon: "🛰️",
            x: 20,
            y: 20,
            speed: 0.02,
            offset: 0,
        },
        {
            id: "grid",
            label: "Energy Grid",
            icon: "⚡",
            x: 80,
            y: 20,
            speed: 0.03,
            offset: 2,
        },
        {
            id: "gri",
            label: "GRI Framework",
            icon: "📋",
            x: 80,
            y: 80,
            speed: 0.025,
            offset: 4,
        },
        {
            id: "sasb",
            label: "SASB Standards",
            icon: "🛡️",
            x: 20,
            y: 80,
            speed: 0.015,
            offset: 1,
        },
    ];

    function handleScroll() {
        if (!sectionContainer) return;
        const rect = sectionContainer.getBoundingClientRect();
        const distance = rect.height - innerHeight;
        const rawProgress = -rect.top / distance;
        progress = Math.max(0, Math.min(1, rawProgress));
    }

    function handleMouseMove(e) {
        targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    }

    function animate() {
        time += 0.02;
        mouse.x += (targetMouse.x - mouse.x) * 0.1;
        mouse.y += (targetMouse.y - mouse.y) * 0.1;
        nodes = nodes;
        animationFrame = requestAnimationFrame(animate);
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        handleScroll();
        animate();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    });
</script>

<svelte:window bind:innerHeight bind:scrollY />

<section class="scroll-section" bind:this={sectionContainer}>
    <div class="sticky-container">
        <div class="content-wrapper">
            <div
                class="header"
                style="opacity: {1 -
                    progress * 3}; transform: translateY({-progress * 100}px)"
            >
                <h2>Interconnected Intelligence</h2>
                <p>
                    Bridging the gap between raw environmental data and
                    actionable ESG insights.
                </p>
            </div>

            <div
                class="visualization"
                style="transform: perspective(1000px) rotateX({mouse.y *
                    2}deg) rotateY({mouse.x * 2}deg)"
            >
                <!-- SVG Connections -->
                <svg
                    class="connections"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    {#each nodes as node, i}
                        <line
                            x1="50"
                            y1="50"
                            x2={node.x +
                                Math.sin(time * node.speed + node.offset) * 2 +
                                mouse.x * 5}
                            y2={node.y +
                                Math.cos(time * node.speed + node.offset) * 2 +
                                mouse.y * 5}
                            vector-effect="non-scaling-stroke"
                            stroke="rgba(44, 93, 94, 0.4)"
                            stroke-width="2"
                            stroke-dasharray="4 4"
                            stroke-linecap="round"
                        />
                    {/each}
                </svg>

                <!-- Central Node -->
                <div class="center-node-wrapper">
                    <div
                        class="center-node"
                        style="transform: scale({1 + progress * 0.8});"
                    >
                        <div class="icon-box">
                            <span class="brain-icon">🌱</span>
                        </div>
                        <div class="node-label center-label">Coresynq AI</div>
                    </div>
                </div>

                <!-- Surrounding Nodes -->
                {#each nodes as node, i}
                    <div
                        class="node-wrapper"
                        style="
                            left: {node.x +
                            Math.sin(time * node.speed + node.offset) * 2 +
                            mouse.x * 5}%; 
                            top: {node.y +
                            Math.cos(time * node.speed + node.offset) * 2 +
                            mouse.y * 5}%; 
                            opacity: {Math.max(0, (progress - 0.3) * 2)}; 
                            transform: translate(-50%, -50%) scale({0.5 +
                            Math.min(0.5, progress - 0.3)})
                        "
                    >
                        <div class="node-card">
                            <div class="node-icon-well">
                                <span class="node-icon">{node.icon}</span>
                            </div>
                            <div class="node-label">
                                {node.label}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>

            <div
                class="completion-msg"
                style="opacity: {Math.max(
                    0,
                    (progress - 0.8) * 5,
                )}; transform: translateY({(1 - progress) * 20}px)"
            ></div>
        </div>
    </div>
</section>

<style>
    .scroll-section {
        height: 300vh;
        position: relative;
        background-color: var(--page-bg);
        margin-top: -1px;
    }

    .sticky-container {
        position: sticky;
        top: 0;
        height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content-wrapper {
        position: relative;
        width: 100%;
        max-width: 1000px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
        perspective: 1000px;
    }

    .header {
        position: absolute;
        top: 100px;
        text-align: center;
        z-index: 10;
        transition: opacity 0.1s;
        padding: 0 20px;
    }

    .header h2 {
        font-family: var(--font-display);
        font-size: clamp(2rem, 4vw, 3rem);
        margin-bottom: 1rem;
        color: var(--text-primary);
        font-weight: 800;
        letter-spacing: -0.03em;
    }

    .header p {
        font-family: var(--font-body);
        color: var(--text-secondary);
        font-size: 1.1rem;
    }

    .visualization {
        position: relative;
        width: 100%;
        max-width: 600px;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.1s ease-out;
    }

    .connections {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: 0;
    }

    .center-node-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
    }

    /* Neumorphic center node */
    .center-node {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--card-bg);
        box-shadow: var(--shadow-extruded);
        transition: box-shadow 0.3s ease-out;
    }

    .center-node:hover {
        box-shadow: var(--shadow-extruded-hover);
    }

    /* Neumorphic inset icon well */
    .icon-box {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        margin-bottom: 10px;
        background-color: var(--card-bg);
        box-shadow: var(--shadow-inset-deep);
    }

    .node-label {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 14px;
        color: var(--text-primary);
    }

    .center-label {
        font-size: 16px;
        margin-top: 5px;
    }

    .node-wrapper {
        position: absolute;
        z-index: 4;
        transition:
            transform 0.1s linear,
            opacity 0.1s;
        will-change: transform, left, top;
    }

    /* Neumorphic outer node cards */
    .node-card {
        padding: 16px 24px;
        display: flex;
        align-items: center;
        gap: 12px;
        background-color: var(--card-bg);
        border-radius: 20px;
        white-space: nowrap;
        box-shadow: var(--shadow-extruded-small);
        transition: box-shadow 0.3s ease-out;
    }

    .node-card:hover {
        box-shadow: var(--shadow-extruded);
    }

    .node-icon-well {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--card-bg);
        box-shadow: var(--shadow-inset-small);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .node-icon {
        font-size: 20px;
    }

    .completion-msg {
        position: absolute;
        bottom: 100px;
        font-family: var(--font-display);
        font-size: 1.5rem;
        color: var(--text-primary);
        opacity: 0;
    }

    @media (max-width: 768px) {
        .scroll-section {
            height: 250vh;
        }
        .center-node {
            width: 120px;
            height: 120px;
        }
        .icon-box {
            width: 60px;
            height: 60px;
            font-size: 30px;
        }
        .node-card {
            padding: 10px 16px;
        }
        .visualization {
            max-width: 90%;
        }
    }
</style>
