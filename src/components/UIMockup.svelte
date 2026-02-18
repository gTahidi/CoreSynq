<script>
    export let type = "dashboard"; // dashboard, graph, report
</script>

<div class="ui-mockup-container">
    <div class="window-chrome">
        <div class="dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
        </div>
        <div class="address-bar"></div>
    </div>
    <div class="window-content">
        {#if type === "dashboard"}
            <!-- Data Dashboard UI -->
            <div class="layout-sidebar">
                <div class="sidebar-item active"></div>
                <div class="sidebar-item"></div>
                <div class="sidebar-item"></div>
            </div>
            <div class="layout-main">
                <div class="header-row">
                    <div class="title-block"></div>
                    <div class="action-btn"></div>
                </div>
                <div class="stat-row">
                    <div class="stat-box"></div>
                    <div class="stat-box"></div>
                    <div class="stat-box"></div>
                </div>
                <div class="data-table">
                    <div class="table-header"></div>
                    {#each Array(5) as _, i}
                        <div class="table-row" style="opacity: {1 - i * 0.15}">
                            <div class="cell w-40"></div>
                            <div class="cell w-20"></div>
                            <div class="cell w-20"></div>
                        </div>
                    {/each}
                </div>
            </div>
        {:else if type === "graph"}
            <!-- Node Graph UI -->
            <div class="graph-container">
                <svg viewBox="0 0 400 300" class="graph-svg">
                    <!-- Grid Lines -->
                    {#each Array(6) as _, i}
                        <line
                            x1="0"
                            y1={i * 50}
                            x2="400"
                            y2={i * 50}
                            stroke="#f0f0f0"
                            stroke-width="1"
                        />
                    {/each}
                    <!-- Data Curve -->
                    <path
                        d="M0,250 C50,250 100,150 150,180 C200,210 250,50 300,80 C350,110 400,20 400,20"
                        fill="none"
                        stroke="#0F3D3E"
                        stroke-width="3"
                    />
                    <!-- Area under curve (fade) -->
                    <path
                        d="M0,250 C50,250 100,150 150,180 C200,210 250,50 300,80 C350,110 400,20 400,20 V300 H0 Z"
                        fill="url(#gradient)"
                        opacity="0.1"
                    />

                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                        >
                            <stop offset="0%" stop-color="#0F3D3E" />
                            <stop offset="100%" stop-color="white" />
                        </linearGradient>
                    </defs>

                    <!-- Nodes -->
                    <circle cx="150" cy="180" r="4" fill="#FFC700" />
                    <circle cx="300" cy="80" r="4" fill="#FFC700" />
                </svg>
                <div class="floating-stat" style="top: 20%; left: 60%">
                    <span class="label">Emission Reduction</span>
                    <span class="value">-42%</span>
                </div>
            </div>
        {:else if type === "report"}
            <!-- Document/Report UI -->
            <div class="report-page">
                <div class="report-header">
                    <div class="logo-mark"></div>
                    <div class="report-title-lines">
                        <div class="line w-60"></div>
                        <div class="line w-40"></div>
                    </div>
                </div>
                <div class="report-body">
                    <div class="text-block">
                        <div class="line w-full"></div>
                        <div class="line w-full"></div>
                        <div class="line w-80"></div>
                    </div>
                    <div class="chart-block">
                        <div class="bar h-60"></div>
                        <div class="bar h-80"></div>
                        <div class="bar h-40"></div>
                        <div class="bar h-90"></div>
                    </div>
                    <div class="text-block">
                        <div class="line w-full"></div>
                        <div class="line w-90"></div>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .ui-mockup-container {
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 12px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(0, 0, 0, 0.05);
        font-family: sans-serif;
    }

    .window-chrome {
        height: 32px;
        background: #f8f9fa;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
        padding: 0 16px;
        gap: 16px;
    }

    .dots {
        display: flex;
        gap: 6px;
    }
    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
    .dot.red {
        background: #ff5f56;
    }
    .dot.yellow {
        background: #ffbd2e;
    }
    .dot.green {
        background: #27c93f;
    }

    .address-bar {
        height: 20px;
        background: white;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        flex: 1;
        max-width: 300px;
    }

    .window-content {
        flex: 1;
        position: relative;
        background: #fff;
        overflow: hidden;
    }

    /* Dashboard Styles */
    .layout-sidebar {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 60px;
        background: #f8f9fa;
        border-right: 1px solid rgba(0, 0, 0, 0.05);
        padding: 16px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    .sidebar-item {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #e2e8f0;
    }
    .sidebar-item.active {
        background: #0f3d3e;
    }

    .layout-main {
        margin-left: 60px;
        padding: 24px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .header-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
    .title-block {
        width: 150px;
        height: 24px;
        background: #0f3d3e;
        border-radius: 4px;
        opacity: 0.8;
    }
    .action-btn {
        width: 80px;
        height: 24px;
        background: #ffc700;
        border-radius: 4px;
    }

    .stat-row {
        display: flex;
        gap: 16px;
    }
    .stat-box {
        flex: 1;
        height: 60px;
        background: #f8f9fa;
        border-radius: 8px;
        border: 1px solid #eee;
    }

    .data-table {
        flex: 1;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 12px;
    }
    .table-header {
        height: 24px;
        background: #f1f5f9;
        border-radius: 4px;
        margin-bottom: 12px;
    }
    .table-row {
        display: flex;
        gap: 12px;
        margin-bottom: 8px;
    }
    .cell {
        height: 12px;
        background: #e2e8f0;
        border-radius: 2px;
    }
    .w-40 {
        width: 40%;
    }
    .w-20 {
        width: 20%;
    }

    /* Graph Styles */
    .graph-container {
        width: 100%;
        height: 100%;
        position: relative;
        background: linear-gradient(to bottom, #fff, #f8f9fa);
    }
    .graph-svg {
        width: 100%;
        height: 100%;
    }
    .floating-stat {
        position: absolute;
        background: white;
        padding: 12px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid #eee;
        display: flex;
        flex-direction: column;
    }
    .floating-stat .label {
        font-size: 10px;
        color: #666;
        text-transform: uppercase;
    }
    .floating-stat .value {
        font-size: 18px;
        font-weight: bold;
        color: #0f3d3e;
    }

    /* Report Styles */
    .report-page {
        margin: 24px auto;
        width: 80%;
        height: 100%;
        background: white;
        border: 1px solid #eee;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        padding: 32px;
    }
    .report-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;
    }
    .logo-mark {
        width: 40px;
        height: 40px;
        background: #0f3d3e;
        border-radius: 50%;
    }
    .report-title-lines {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: flex-end;
    }

    .line {
        height: 8px;
        background: #e2e8f0;
        border-radius: 2px;
        margin-bottom: 8px;
    }
    .w-full {
        width: 100%;
    }
    .w-80 {
        width: 80%;
    }
    .w-60 {
        width: 60%;
    }
    .w-90 {
        width: 90%;
    }

    .chart-block {
        display: flex;
        align-items: flex-end;
        gap: 12px;
        height: 100px;
        margin: 24px 0;
        border-bottom: 1px solid #eee;
        padding-bottom: 4px;
    }
    .bar {
        flex: 1;
        background: #0f3d3e;
        border-radius: 4px 4px 0 0;
        opacity: 0.8;
    }
    .h-60 {
        height: 60%;
    }
    .h-80 {
        height: 80%;
    }
    .h-40 {
        height: 40%;
    }
    .h-90 {
        height: 90%;
        background: #ffc700;
        opacity: 1;
    }
</style>
