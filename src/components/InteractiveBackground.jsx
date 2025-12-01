import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let dots = [];

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDots();
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const initDots = () => {
            dots = [];
            const spacing = 40; // Increased spacing for less density
            const rows = Math.ceil(canvas.height / spacing);
            const cols = Math.ceil(canvas.width / spacing);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push({
                        x: i * spacing,
                        y: j * spacing,
                        originX: i * spacing,
                        originY: j * spacing,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const radius = 200; // Increased interaction radius for smoother feel
            const strength = 0.03; // Reduced strength for subtler movement
            const friction = 0.92; // Increased friction for smoother damping
            const springFactor = 0.05; // Softer spring back

            dots.forEach(dot => {
                const dx = mouse.x - dot.x;
                const dy = mouse.y - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Attraction to mouse
                if (distance < radius) {
                    const force = (radius - distance) / radius;
                    dot.vx += dx * force * strength;
                    dot.vy += dy * force * strength;
                }

                // Spring back to origin
                const springX = dot.originX - dot.x;
                const springY = dot.originY - dot.y;

                dot.vx += springX * springFactor;
                dot.vy += springY * springFactor;

                // Apply friction
                dot.vx *= friction;
                dot.vy *= friction;

                // Update position
                dot.x += dot.vx;
                dot.y += dot.vy;

                // Draw dot
                ctx.beginPath();

                // Dynamic visuals based on distance
                let size = 1.5;
                let opacity = 0.2;

                if (distance < radius) {
                    const factor = (radius - distance) / radius; // 0 to 1
                    size = 1.5 + (factor * 2); // Scale up to 3.5px
                    opacity = 0.2 + (factor * 0.6); // Opacity up to 0.8
                }

                ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(52, 211, 153, ${opacity})`; // Dynamic opacity
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: '#ffffff'
            }}
        />
    );
};

export default InteractiveBackground;
