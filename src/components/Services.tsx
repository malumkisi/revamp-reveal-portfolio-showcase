
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, Globe, Smartphone, Code, FileText, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Website Redesign & Modernization",
      description: "Transform your outdated website into a modern, responsive design that engages visitors and builds trust with your brand.",
      features: ["Complete visual overhaul", "Modern UI/UX design", "Mobile optimization", "Performance improvements"]
    },
    {
      icon: Globe,
      title: "Custom Business Websites",
      description: "Build professional websites from scratch for small businesses and service providers who need a strong online presence.",
      features: ["Custom design & development", "Business-focused layouts", "Professional branding", "Contact & service pages"]
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Clean, semantic HTML, modern CSS, and interactive JavaScript to create websites that are both beautiful and functional.",
      features: ["HTML5 & CSS3", "Responsive frameworks", "Interactive elements", "Cross-browser compatibility"]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensure your website looks perfect and functions flawlessly on smartphones, tablets, and all screen sizes.",
      features: ["Mobile-first design", "Touch-friendly interfaces", "Fast mobile loading", "App-like experience"]
    },
    {
      icon: FileText,
      title: "Basic Backend Integration",
      description: "Simple server-side functionality for contact forms, basic data handling, and essential business features.",
      features: ["Contact form setup", "Email integration", "Basic data processing", "Simple CMS solutions"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your website with optimized code, compressed images, and best practices for fast loading times.",
      features: ["Page speed optimization", "Image compression", "Code minification", "Caching strategies"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive website solutions for small businesses and service providers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
