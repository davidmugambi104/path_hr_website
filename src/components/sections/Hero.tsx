import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { company } from '../../lib/content';

const TriangleParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size with higher resolution for crisp rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Simple line-based triangle system for crisp edges
    type Triangle = {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    };
    
    const triangles: Triangle[] = [];
    const triangleCount = Math.min(30, Math.floor(canvas.width * canvas.height / 30000));
    
    // Initialize triangles
    for (let i = 0; i < triangleCount; i++) {
      triangles.push({
        x: Math.random() * (canvas.width / (window.devicePixelRatio || 1)),
        y: Math.random() * (canvas.height / (window.devicePixelRatio || 1)),
        size: Math.random() * 25 + 15,
        speed: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
    
    // Draw crisp triangle with lines only
    const drawTriangle = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1.5;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      
      // Draw triangle outline only (no fill)
      ctx.beginPath();
      ctx.moveTo(x, y - size / 2);
      ctx.lineTo(x - size / 2, y + size / 2);
      ctx.lineTo(x + size / 2, y + size / 2);
      ctx.closePath();
      ctx.stroke();
      
      ctx.restore();
    };
    
    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
      // Update and draw triangles
      for (let i = 0; i < triangles.length; i++) {
        const triangle = triangles[i];
        
        // Move triangle upward
        triangle.y -= triangle.speed;
        
        // Reset triangle when it goes off screen
        if (triangle.y < -triangle.size) {
          triangle.y = (canvas.height / (window.devicePixelRatio || 1)) + triangle.size;
          triangle.x = Math.random() * (canvas.width / (window.devicePixelRatio || 1));
        }
        
        // Draw triangle
        drawTriangle(triangle.x, triangle.y, triangle.size, triangle.opacity);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: 'crisp-edges' }}
    />
  );
};

export function Hero(): JSX.Element {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24"
    >
      {/* Updated gradient background with romantic blue and gold tones */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0B2B40 0%, #4169E1 50%, #FFD700 100%)' }}
      />
      
      {/* Crisp line-based triangle particles */}
      <TriangleParticles />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title text-white mb-6 tracking-wider mt-4">
            <span className="block">{company.name.split(' & ')[0]}</span>
            <span className="block text-accent mt-2">{company.name.split(' & ')[1]}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 font-normal max-w-3xl mx-auto mb-8 md:mb-10 hero-subtitle"
        >
          {company.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#services" 
            className="bg-accent text-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-lg md:text-xl hover:bg-primaryLight hover:text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-primary"
          >
            Our Services
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-lg md:text-xl border-2 border-accent text-white hover:bg-accent hover:text-primary transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-primary"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { value: '150+', label: 'Clients Served' },
            { value: '500+', label: 'Projects Completed' },
            { value: '10+', label: 'Years Experience' },
            { value: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent mb-1">{stat.value}</div>
              <div className="text-white font-normal text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}