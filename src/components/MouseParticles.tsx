
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

    const isInteractiveElement = (element: Element): boolean => {
      const tagName = element.tagName.toLowerCase();
      const isButton = tagName === 'button';
      const isLink = tagName === 'a';
      const isInput = ['input', 'textarea', 'select'].includes(tagName);
      const hasClickHandler = element.getAttribute('role') === 'button' || 
                              element.hasAttribute('onclick') ||
                              element.classList.contains('cursor-pointer');
      const isText = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'label'].includes(tagName);
      
      return isButton || isLink || isInput || hasClickHandler || isText;
    };

    const createParticles = (x: number, y: number) => {
      const now = Date.now();
      // Throttle particle creation more aggressively
      if (now - lastMouseMoveRef.current < 32) return; // ~30fps
      lastMouseMoveRef.current = now;

      // Check if mouse is over interactive elements
      const elementUnderMouse = document.elementFromPoint(x, y);
      if (elementUnderMouse) {
        // Check the element and its parents
        let current = elementUnderMouse;
        while (current && current !== document.body) {
          if (isInteractiveElement(current)) {
            return; // Don't create particles over interactive elements
          }
          current = current.parentElement;
        }
      }

      // Create fewer particles for more subtle effect
      for (let i = 0; i < 1; i++) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          life: 0,
          maxLife: 40 + Math.random() * 20
        });
      }

      // Limit particle count more aggressively
      if (particlesRef.current.length > 50) {
        particlesRef.current = particlesRef.current.slice(-50);
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
        particle.vy += 0.02; // Reduced gravity

        const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
        const size = Math.max(0.5, 2 * alpha); // Smaller particles

        // Check if particle is still visible and within bounds
        if (alpha > 0.1 && particle.x >= -10 && particle.x <= window.innerWidth + 10 && 
            particle.y >= -10 && particle.y <= window.innerHeight + 10) {
          
          // Draw particle with much lower opacity
          ctx.globalAlpha = alpha * 0.3; // Much more transparent
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
