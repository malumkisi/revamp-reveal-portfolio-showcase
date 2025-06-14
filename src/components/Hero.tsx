
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/10">
      <div className="container mx-auto px-4 py-20 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4 hover:scale-105 transition-transform duration-300">
              Frontend Geliştirici & Web Sitesi Uzmanı • Hızlı Teslimat
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-600 to-foreground bg-clip-text text-transparent leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            İşiniz İçin 
            <span className="text-blue-600 dark:text-blue-400 block"> Profesyonel Web Sitesi</span>
            <span className="text-2xl md:text-3xl lg:text-4xl block mt-2 text-green-600 dark:text-green-400">Maksimum 2 Günde Teslim</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Restoranlar, hukuk büroları, hizmet şirketleri ve yerel işletmeler için modern, kullanıcı dostu web siteleri tasarlıyor ve geliştiriyorum. Sıfırdan yeni web sitesi oluşturma veya mevcut sitenizi yenileme - her ikisinde de hızlı ve profesyonel çözümler sunuyorum.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Çalışmalarımı Gör
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-2 hover:scale-105 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-950/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hızlı Teklif Al
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-pulse"
          style={{
            left: `${mousePosition.x * 0.01 - 40}%`,
            top: `${mousePosition.y * 0.01 - 40}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-pulse"
          style={{
            left: `${100 - mousePosition.x * 0.01 - 40}%`,
            top: `${100 - mousePosition.y * 0.01 - 40}%`,
            animationDelay: '2s'
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
