<script>
    export let src = "/content-1.jpg";
    export let alt = "Image";
</script>

<div class="arch-wrapper">
    <!-- The Yellow "Track" / Arch Background -->
    <div class="arch-track"></div>

    <!-- The Image Itself -->
    <div class="image-container">
        <img {src} {alt} loading="lazy" />
    </div>
</div>

<style>
    .arch-wrapper {
        position: relative;
        padding: 20px; /* Space for the arch to peek out */
        width: 100%;
        max-width: 550px;
        margin: 0 auto;
    }

    .arch-track {
        position: absolute;
        top: 0;
        left: 0;
        width: 70%; /* Covers left side */
        height: 100%;
        background-color: var(--accent-primary); /* Yellow */
        border-radius: 999px 0 0 999px; /* Pill shape on left, flat on right */
        z-index: 0;
        opacity: 0.2; /* Semi-transparent yellow as seen in screenshot? Or solid? User said "styled image". */
        /* Let's make it solid border-like or track-like */
        background: transparent;
        border: 40px solid var(--accent-light); /* Thick yellow border look */
        border-right: none; /* Open on right */
        border-radius: 100px 0 0 100px;
    }

    /* Updating Arch Track to be simpler filled shape usually works better for web */
    .arch-track {
        background-color: var(--accent-primary);
        border: none;
        opacity: 1;
        width: 90%;
        height: 90%;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        border-radius: 200px 0 0 200px; /* Big curve left */
        z-index: 0;
    }

    .image-container {
        position: relative;
        z-index: 1;
        width: 100%;
        aspect-ratio: 4/3;
        border-radius: 32px; /* Standard organic radius */
        overflow: hidden;
        box-shadow: var(--shadow-card);
        margin-left: 20px; /* Offset to reveal arch on left */
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
