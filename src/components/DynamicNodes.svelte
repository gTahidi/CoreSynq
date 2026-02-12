<script>
    import { onMount } from "svelte";

    export let title = "Interconnected Intelligence";
    export let subtitle =
        "Coresynq bridges the gap between raw environmental data and actionable ESG insights.";

    let canvas;
    let container;
    let mouseX = 0;
    let mouseY = 0;
    let angle = 0;

    const nodes = [
        {
            id: "satellite",
            label: "Satellite Data",
            x: 0,
            y: 0,
            color: "#e3f2fd",
            textColor: "#0071e3",
            icon: "🛰️",
            baseAngle: 0,
        },
        {
            id: "grid",
            label: "Energy Grid",
            x: 0,
            y: 0,
            color: "#e8f5e9",
            textColor: "#2e7d32",
            icon: "⚡",
            baseAngle: (Math.PI * 2) / 4,
        },
        {
            id: "core",
            label: "Coresynq AI",
            x: 0,
            y: 0,
            color: "#f3e5f5",
            textColor: "#7b1fa2",
            isCenter: true,
            icon: "🧠",
            baseAngle: 0,
        },
        {
            id: "gri",
            label: "GRI Framework",
            x: 0,
            y: 0,
            color: "#fff3e0",
            textColor: "#ef6c00",
            icon: "📋",
            baseAngle: (Math.PI * 2) / 2,
        },
        {
            id: "sasb",
            label: "SASB Standards",
            x: 0,
            y: 0,
            color: "#fce4ec",
            textColor: "#c2185b",
            icon: "🛡️",
            baseAngle: (Math.PI * 3 * 2) / 4,
        },
    ];

    onMount(() => {
        const ctx = canvas.getContext("2d");
        let frame;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = 800 * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = "800px";
            ctx.scale(dpr, dpr);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        resize();

        const animate = () => {
            ctx.clearRect(0, 0, window.innerWidth, 800);
            const centerX = window.innerWidth / 2;
            const centerY = 400;
            const radius = Math.min(window.innerWidth * 0.25, 240); // Responsive radius

            const core = nodes.find((n) => n.isCenter);
            core.x = centerX + (mouseX - centerX) * 0.05;
            core.y = centerY + (mouseY - centerY) * 0.05;

            ctx.beginPath();
            ctx.strokeStyle = "#f0f0f2";
            ctx.lineWidth = 1.5;

            nodes.forEach((node) => {
                if (!node.isCenter) {
                    const currentAngle = angle + node.baseAngle;
                    const targetX = centerX + Math.cos(currentAngle) * radius;
                    const targetY = centerY + Math.sin(currentAngle) * radius;

                    node.x = targetX + (mouseX - targetX) * 0.03;
                    node.y = targetY + (mouseY - targetY) * 0.03;

                    ctx.moveTo(core.x, core.y);
                    ctx.lineTo(node.x, node.y);
                }
            });
            ctx.stroke();

            nodes.forEach((node) => {
                const nodeSize = node.isCenter ? 60 : 50;
                const dist = Math.sqrt(
                    (mouseX - node.x) ** 2 + (mouseY - node.y) ** 2,
                );
                const scale = dist < nodeSize ? 1.1 : 1;

                ctx.save();
                ctx.translate(node.x, node.y);
                ctx.scale(scale, scale);

                ctx.shadowBlur = 20;
                ctx.shadowColor = "rgba(0,0,0,0.06)";

                ctx.beginPath();
                ctx.arc(0, 0, nodeSize, 0, Math.PI * 2);
                ctx.fillStyle = node.color;
                ctx.fill();

                ctx.shadowBlur = 0;
                ctx.font = `${node.isCenter ? "28px" : "22px"} Inter`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(node.icon, 0, -10);

                ctx.fillStyle = node.textColor;
                ctx.font = `600 ${node.isCenter ? "13px" : "11px"} Inter`;
                ctx.fillText(node.label, 0, 22);

                ctx.restore();
            });

            // Neumorphic Connection Lines
            ctx.shadowBlur = 0;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"; // Light edge
            ctx.stroke();
            ctx.strokeStyle = "rgba(163, 177, 198, 0.4)"; // Dark edge
            ctx.lineWidth = 1;
            ctx.stroke();

            angle += 0.003;
            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });
</script>

<div class="dynamic-nodes-wrapper" bind:this={container}>
    <canvas bind:this={canvas} class="nodes-canvas"></canvas>
    <div class="nodes-overlay">
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </div>
</div>

<style>
    .dynamic-nodes-wrapper {
        position: relative;
        width: 100%;
        height: 800px;
        background-color: var(--page-bg);
        overflow: hidden;
        margin-top: 0;
        padding-top: 60px; /* Add some internal breathing room */
    }

    .nodes-canvas {
        width: 100%;
        height: 800px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .nodes-overlay {
        position: absolute;
        top: 120px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        pointer-events: none;
        z-index: 10;
        width: 100%;
        max-width: 800px;
        padding: 0 24px;
    }

    .nodes-overlay h2 {
        font-size: 24px;
        font-weight: 800;
        margin-bottom: 8px;
        letter-spacing: -0.02em;
        color: var(--text-primary);
        font-family: var(--font-display);
    }

    .nodes-overlay p {
        font-family: var(--font-body);
        font-size: 14px;
        color: #86868b;
        line-height: 1.4;
    }
</style>
