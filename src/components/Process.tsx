
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Search, Palette, Code, TestTube, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Initial Consultation",
      description: "We'll discuss your business goals, target audience, and current website challenges. I'll analyze what's working and what needs improvement.",
      duration: "1-2 hours"
    },
    {
      icon: Search,
      title: "2. Research & Analysis",
      description: "I'll study your industry, competitors, and best practices to create a strategy that makes your business stand out online.",
      duration: "2-3 days"
    },
    {
      icon: Palette,
      title: "3. Design & Planning",
      description: "Creating wireframes and design mockups that align with your brand and convert visitors into customers. You'll see exactly what we're building.",
      duration: "3-5 days"
    },
    {
      icon: Code,
      title: "4. Development",
      description: "Building your website with clean, modern code. Responsive design, fast loading speeds, and all the functionality you need.",
      duration: "1-2 weeks"
    },
    {
      icon: TestTube,
      title: "5. Testing & Refinement",
      description: "Thorough testing across all devices and browsers. Performance optimization and final adjustments based on your feedback.",
      duration: "2-3 days"
    },
    {
      icon: Rocket,
      title: "6. Launch & Support",
      description: "Going live with your new website! I'll provide training on updates and offer ongoing support to ensure everything runs smoothly.",
      duration: "1 day + ongoing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to transforming your website from consultation to launch
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <step.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Connection line for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-blue-200"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Communication & Timeline */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Communication</h3>
                <div className="space-y-3 text-blue-800">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Regular progress updates via email</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Video calls for major milestones</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Collaborative feedback and revisions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>24-48 hour response time</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Timeline Expectations</h3>
                <div className="space-y-3 text-green-800">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span><strong>Simple redesign:</strong> 1-2 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span><strong>New business website:</strong> 2-3 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span><strong>Complex project:</strong> 3-4 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span><strong>Rush projects:</strong> Available with premium</span>
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

export default Process;
