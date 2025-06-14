
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate about transforming digital experiences for small businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Frontend Developer & Website Modernization Expert
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a frontend developer who specializes in breathing new life into outdated websites. 
                My passion lies in helping small businesses - from restaurants and law firms to service 
                companies and barbershops - establish a strong, modern online presence.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in modern web technologies and user experience design, I transform 
                websites that may look like they're from 2005 into sleek, responsive, and 
                user-friendly experiences that actually convert visitors into customers.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-800 font-medium">
                  <strong>My Focus:</strong> Business websites that work. I don't build e-commerce platforms - 
                  I create professional, conversion-focused websites for service-based businesses and local companies.
                </p>
              </div>
            </div>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-center">What I Bring to Your Project</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">Modern, responsive design that works on all devices</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">Fast loading speeds and optimized performance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">User-friendly interfaces that convert visitors</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">Basic backend integration for contact forms</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">SEO-friendly structure for better visibility</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
