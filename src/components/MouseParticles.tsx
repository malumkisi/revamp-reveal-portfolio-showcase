
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const MouseParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const isMouseMovingRef = useRef(false);
  const lastMouseMoveRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Enable better performance
    ctx.imageSmoothingEnabled = false;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    const createParticles = (x: number, y: number) => {
      const now = Date.now();
      // Throttle particle creation
      if (now - lastMouseMoveRef.current < 16) return; // ~60fps
      lastMouseMoveRef.current = now;

      // Create fewer particles for better performance
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 15,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          life: 0,
          maxLife: 50 + Math.random() * 30
        });
      }

      // Limit particle count more aggressively
      if (particlesRef.current.length > 80) {
        particlesRef.current = particlesRef.current.slice(-80);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      isMouseMovingRef.current = true;

      createParticles(x, y);
    };

    const handleMouseStop = () => {
      isMouseMovingRef.current = false;
    };

    let mouseStopTimeout: NodeJS.Timeout;

    const handleMouseMoveWithTimeout = (e: MouseEvent) => {
      handleMouseMove(e);
      clearTimeout(mouseStopTimeout);
      mouseStopTimeout = setTimeout(handleMouseStop, 150);
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear with better performance
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with optimized rendering
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.003; // Reduced gravity for smoother motion

        const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
        const size = Math.max(0.5, 2 * alpha);

        // More efficient bounds checking
        if (alpha > 0.1 && particle.x >= -5 && particle.x <= window.innerWidth + 5 && 
            particle.y >= -5 && particle.y <= window.innerHeight + 5) {
          
          // Simplified rendering for better performance
          ctx.globalAlpha = alpha * 0.8;
          ctx.fillStyle = '#6366f1'; // Static color instead of gradient
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
          
          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    
    // Use passive listeners for better performance
    window.addEventListener('resize', resizeCanvas, { passive: true });
    document.addEventListener('mousemove', handleMouseMoveWithTimeout, { passive: true });
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMoveWithTimeout);
      clearTimeout(mouseStopTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full"
      style={{ 
        background: 'transparent',
        willChange: 'transform'
      }}
    />
  );
};

export default MouseParticles;
