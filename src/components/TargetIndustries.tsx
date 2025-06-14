
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  UtensilsCrossed, 
  Scale, 
  Wrench, 
  Scissors, 
  Heart, 
  Building2,
  Car,
  Home
} from 'lucide-react';

const TargetIndustries = () => {
  const industries = [
    {
      icon: UtensilsCrossed,
      title: "Restaurants & Food Services",
      description: "Menu showcases, online ordering, reservation systems, and appetizing food photography displays.",
      examples: ["Fine dining restaurants", "Cafes & coffee shops", "Food trucks", "Catering services"]
    },
    {
      icon: Scale,
      title: "Law Firms & Legal Services",
      description: "Professional, trustworthy designs that build credibility and make legal services accessible.",
      examples: ["Personal injury lawyers", "Family law practices", "Business attorneys", "Legal consultants"]
    },
    {
      icon: Wrench,
      title: "Home Services",
      description: "Service-focused websites that generate leads and showcase expertise in home improvement.",
      examples: ["Plumbing services", "Electrical contractors", "HVAC companies", "General contractors"]
    },
    {
      icon: Scissors,
      title: "Beauty & Personal Care",
      description: "Stylish, visual websites that highlight services and make booking appointments easy.",
      examples: ["Hair salons", "Barbershops", "Nail salons", "Spa services"]
    },
    {
      icon: Heart,
      title: "Medical & Healthcare",
      description: "Clean, professional designs that prioritize patient trust and easy appointment scheduling.",
      examples: ["Dental practices", "Medical clinics", "Physical therapy", "Chiropractic offices"]
    },
    {
      icon: Building2,
      title: "Professional Services",
      description: "Business-focused websites that establish authority and generate qualified leads.",
      examples: ["Accounting firms", "Insurance agencies", "Real estate agents", "Consulting services"]
    },
    {
      icon: Car,
      title: "Automotive Services",
      description: "Trust-building websites for automotive professionals with service showcases and easy contact.",
      examples: ["Auto repair shops", "Car dealerships", "Detailing services", "Tire shops"]
    },
    {
      icon: Home,
      title: "Local Service Businesses",
      description: "Community-focused websites that highlight local expertise and build neighborhood trust.",
      examples: ["Cleaning services", "Landscaping", "Pet services", "Moving companies"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries I Specialize In</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I focus on creating websites for small businesses and service providers who need 
            professional online presence to attract and convert local customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <industry.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{industry.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="text-xs text-gray-500">
                  <div className="space-y-1">
                    {industry.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center justify-start">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Don't See Your Industry? Let's Talk!
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              While these are my main focus areas, I work with various types of small businesses and service providers. 
              If you have a business that needs a professional website to attract customers and build credibility, 
              I'd love to discuss how I can help transform your online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetIndustries;
