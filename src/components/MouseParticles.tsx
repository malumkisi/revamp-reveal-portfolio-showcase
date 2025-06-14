
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      isMouseMovingRef.current = true;

      // Create new particles
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 0,
          maxLife: 60 + Math.random() * 40
        });
      }

      // Limit particle count for performance
      if (particlesRef.current.length > 100) {
        particlesRef.current = particlesRef.current.slice(-100);
      }
    };

    const handleMouseStop = () => {
      isMouseMovingRef.current = false;
    };

    let mouseStopTimeout: NodeJS.Timeout;

    const handleMouseMoveWithTimeout = (e: MouseEvent) => {
      handleMouseMove(e);
      clearTimeout(mouseStopTimeout);
      mouseStopTimeout = setTimeout(handleMouseStop, 100);
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.005; // reduced gravity

        const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
        const size = Math.max(0.5, 2.5 * alpha);

        // Check if particle is within canvas bounds
        if (alpha > 0 && particle.x >= -10 && particle.x <= canvas.width + 10 && 
            particle.y >= -10 && particle.y <= canvas.height + 10) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          
          // Create gradient for particles
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, size
          );
          gradient.addColorStop(0, `rgba(99, 102, 241, ${alpha * 0.6})`);
          gradient.addColorStop(1, `rgba(99, 102, 241, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.fill();
          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMoveWithTimeout);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMoveWithTimeout);
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
      style={{ background: 'transparent' }}
    />
  );
};

export default MouseParticles;
