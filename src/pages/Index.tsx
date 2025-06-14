
import React, { useEffect } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import FeaturedProject from '@/components/FeaturedProject';
import Skills from '@/components/Skills';
import TargetIndustries from '@/components/TargetIndustries';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MouseParticles from '@/components/MouseParticles';

const Index = () => {
  useEffect(() => {
    // Site dilini Türkçe olarak ayarla
    document.documentElement.lang = 'tr';
    document.title = 'GeliştiriciPortföy - Web Sitesi Yeniden Tasarım Uzmanı';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <MouseParticles />
        <Header />
        <Hero />
        <About />
        <Services />
        <FeaturedProject />
        <Skills />
        <TargetIndustries />
        <Process />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
