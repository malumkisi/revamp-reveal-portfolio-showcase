
import React from 'react';
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
