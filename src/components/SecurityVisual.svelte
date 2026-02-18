<script>
    import { onMount } from "svelte";

    let logs = [
        { status: "secure", msg: "End-to-end encryption verified" },
        { status: "sync", msg: "Syncing ledger nodes..." },
        { status: "audit", msg: "Audit trail immutable" },
        { status: "check", msg: "Compliance checks passed (SOC2)" },
    ];
</script>

<div class="security-card">
    <div class="card-header">
        <div class="status-indicator">
            <span class="dot pulse"></span>
            System Secure
        </div>
        <div class="lock-icon">🔒</div>
    </div>

    <div class="shield-container">
        <div class="shield-ring"></div>
        <div class="shield-core">
            <span class="shield-icon">🛡️</span>
            <span class="protection-level">AES-256</span>
        </div>
    </div>

    <div class="log-window">
        {#each logs as log}
            <div class="log-entry">
                <span class="log-status {log.status}"></span>
                <span class="log-msg">{log.msg}</span>
            </div>
        {/each}
        <div class="log-entry typing">
            <span class="cursor">_</span>
        </div>
    </div>
</div>

<style>
    .security-card {
        background: white;
        border-radius: 24px;
        padding: 32px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        border: 1px solid rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        gap: 24px;
        position: relative;
        overflow: hidden;
        min-height: 300px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f1f5f9;
        padding-bottom: 16px;
    }

    .status-indicator {
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 14px;
        color: #10b981; /* Emerald */
    }

    .dot {
        width: 8px;
        height: 8px;
        background-color: #10b981;
        border-radius: 50%;
    }

    .pulse {
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
        }
        70% {
            box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
        }
    }

    .shield-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 120px;
    }

    .shield-ring {
        position: absolute;
        width: 100px;
        height: 100px;
        border: 2px dashed #e2e8f0;
        border-radius: 50%;
        animation: spin 10s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .shield-core {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
    }

    .shield-icon {
        font-size: 48px;
        margin-bottom: 4px;
    }

    .protection-level {
        font-size: 12px;
        font-weight: 700;
        color: var(--text-secondary);
        background: #f1f5f9;
        padding: 2px 8px;
        border-radius: 4px;
    }

    .log-window {
        background: #0f172a; /* Slate 900 */
        border-radius: 12px;
        padding: 16px;
        font-family: monospace;
        font-size: 12px;
        color: #94a3b8;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .log-entry {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .log-status {
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    .log-status.secure {
        background-color: #10b981;
    }
    .log-status.sync {
        background-color: #3b82f6;
    }
    .log-status.audit {
        background-color: #f59e0b;
    }
    .log-status.check {
        background-color: #10b981;
    }

    .cursor {
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
</style>
