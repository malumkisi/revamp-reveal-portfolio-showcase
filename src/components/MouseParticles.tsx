
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
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 0,
          maxLife: 60 + Math.random() * 40
        });
      }

      // Limit particle count
      if (particlesRef.current.length > 100) {
        particlesRef.current = particlesRef.current.slice(-100);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to the viewport
      const x = e.clientX;
      const y = e.clientY;
      
      mouseRef.current.x = x;
      mouseRef.current.y = y;

      createParticles(x, y);
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.05; // Gravity

        const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
        const size = Math.max(0.5, 3 * alpha);

        // Check if particle is still visible and within bounds
        if (alpha > 0.05 && particle.x >= -10 && particle.x <= window.innerWidth + 10 && 
            particle.y >= -10 && particle.y <= window.innerHeight + 10) {
          
          // Draw particle
          ctx.globalAlpha = alpha * 0.9;
          ctx.fillStyle = '#6366f1';
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
    
    // Use document for global mouse tracking
    window.addEventListener('resize', resizeCanvas, { passive: true });
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none w-full h-full"
      style={{ 
        background: 'transparent',
        zIndex: 9999,
        willChange: 'transform'
      }}
    />
  );
};

export default MouseParticles;
