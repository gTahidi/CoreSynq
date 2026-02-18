<script>
    import UIMockup from "./UIMockup.svelte";

    export let title = "Strategic Capability";
    export let description = "Description text goes here.";
    export let imageSrc = "/assets/placeholder-ui.png"; // Fallback
    export let mockupType = null; // 'dashboard', 'graph', 'report'
    export let reverse = false; // Toggle layout direction
    export let badge = "Feature";
    let className = "";
    export { className as class }; // Allow standard class attribute
</script>

<section class="feature-split-section {className}" class:reverse>
    <div class="content-wrapper">
        <div class="text-content">
            <span class="feature-badge">{badge}</span>
            <h2 class="feature-title">{title}</h2>
            <p class="feature-description">{description}</p>
            <button class="btn-text">
                Learn more <span class="arrow">→</span>
            </button>
        </div>

        <div class="media-content">
            <div
                class="image-container"
                class:has-mockup={!!mockupType && !imageSrc}
            >
                {#if imageSrc && imageSrc !== "/assets/placeholder-ui.png"}
                    <img src={imageSrc} alt={title} />
                {:else if mockupType}
                    <UIMockup type={mockupType} />
                {:else}
                    <!-- Using a colored placeholder for now if styled image isn't available -->
                    <div class="ui-placeholder">
                        <span class="placeholder-label">UI Mockup: {title}</span
                        >
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .feature-split-section {
        padding: 100px 24px;
        background-color: white; /* Default, can be overridden */
        overflow: hidden;
    }

    .content-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 80px;
    }

    /* Reverse Modifier */
    .feature-split-section.reverse .content-wrapper {
        flex-direction: row-reverse;
    }

    .text-content {
        flex: 1;
        max-width: 500px;
    }

    .media-content {
        flex: 1;
        position: relative;
    }

    .feature-badge {
        display: inline-block;
        font-family: var(--font-display, sans-serif);
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--accent-primary, #ffc700);
        margin-bottom: 24px;
        background: rgba(15, 61, 62, 0.05); /* Light trace of primary color */
        padding: 8px 16px;
        border-radius: 50px;
        color: var(--text-primary, #0f3d3e);
    }

    .feature-title {
        font-family: var(--font-display, sans-serif);
        font-size: clamp(36px, 3.5vw, 48px); /* Spec: 48px H2 */
        font-weight: 700;
        color: var(--text-primary, #0f3d3e);
        margin-bottom: 24px;
        line-height: 1.1;
        letter-spacing: -0.02em;
    }

    .feature-description {
        font-family: var(--font-body, sans-serif);
        font-size: 20px; /* Spec: 20px Body */
        line-height: 1.5;
        color: var(--text-secondary, #4a5568);
        margin-bottom: 32px;
    }

    .btn-text {
        background: none;
        border: none;
        padding: 0;
        font-family: var(--font-body, sans-serif);
        font-size: 16px;
        font-weight: 700;
        color: var(--text-primary, #0f3d3e);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: color 0.2s ease;
    }

    .btn-text:hover {
        color: var(--accent-primary, #ffc700);
    }

    .arrow {
        transition: transform 0.2s ease;
    }

    .btn-text:hover .arrow {
        transform: translateX(4px);
    }

    /* Image / UI Placeholder Styling */
    .image-container {
        width: 100%;
        aspect-ratio: 16/10;
        border-radius: 20px;
        background: #f1f5f9;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08); /* Soft organic shadow */
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.05);
        position: relative;
    }

    /* Remove padding/bg if mockup is present to let it fill space naturally */
    .image-container.has-mockup {
        background: transparent;
        border: none;
        box-shadow: none;
        overflow: visible;
    }

    .ui-placeholder {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #f6f8fb 0%, #e2e8f0 100%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .placeholder-label {
        color: #94a3b8;
        font-weight: 600;
        font-family: var(--font-display, sans-serif);
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 900px) {
        .content-wrapper {
            flex-direction: column;
            gap: 48px;
        }

        .feature-split-section.reverse .content-wrapper {
            flex-direction: column;
        }

        .text-content {
            max-width: 100%;
            text-align: left;
        }
    }
</style>
