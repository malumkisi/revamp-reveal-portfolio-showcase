
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp, Users, Zap } from 'lucide-react';

const FeaturedProject = () => {
  const [activeView, setActiveView] = useState('after');

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
          <p className="text-xl text-muted-foreground">
            Restaurant Website Complete Redesign & Modernization
          </p>
        </div>

        {/* Before/After Toggle */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <Button
                variant={activeView === 'before' ? 'default' : 'ghost'}
                onClick={() => setActiveView('before')}
                className="px-8 py-2"
              >
                Before
              </Button>
              <Button
                variant={activeView === 'after' ? 'default' : 'ghost'}
                onClick={() => setActiveView('after')}
                className="px-8 py-2"
              >
                After
              </Button>
            </div>
          </div>

          {/* Website Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Desktop View */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Desktop View</h3>
                <div className="bg-gray-100 rounded-lg p-4 h-64 relative overflow-hidden">
                  {activeView === 'before' ? (
                    <div className="bg-gradient-to-r from-yellow-200 to-red-200 h-full rounded border-2 border-gray-300">
                      <div className="p-4 space-y-2">
                        <div className="bg-red-400 h-4 w-32 rounded"></div>
                        <div className="bg-gray-400 h-2 w-24 rounded"></div>
                        <div className="mt-4 space-y-1">
                          <div className="bg-gray-300 h-2 w-full rounded"></div>
                          <div className="bg-gray-300 h-2 w-3/4 rounded"></div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-yellow-400 h-6 w-16 rounded text-xs flex items-center justify-center">Old Design</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-white to-blue-50 h-full rounded border border-blue-200 shadow-md">
                      <div className="p-4 space-y-3">
                        <div className="bg-blue-600 h-4 w-40 rounded shadow-sm"></div>
                        <div className="bg-gray-700 h-2 w-32 rounded"></div>
                        <div className="mt-4 space-y-2">
                          <div className="bg-gray-200 h-2 w-full rounded"></div>
                          <div className="bg-gray-200 h-2 w-5/6 rounded"></div>
                          <div className="bg-blue-100 h-8 w-24 rounded mt-3"></div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-blue-600 h-6 w-20 rounded text-xs flex items-center justify-center text-white">Modern</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Mobile View */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Mobile View</h3>
                <div className="bg-gray-100 rounded-lg p-4 h-64 flex justify-center">
                  <div className="w-32 relative">
                    {activeView === 'before' ? (
                      <div className="bg-gradient-to-r from-yellow-200 to-red-200 h-full rounded-lg border-2 border-gray-400">
                        <div className="p-2 space-y-1">
                          <div className="bg-red-400 h-2 w-16 rounded"></div>
                          <div className="bg-gray-400 h-1 w-12 rounded"></div>
                          <div className="mt-2 space-y-1">
                            <div className="bg-gray-300 h-1 w-full rounded"></div>
                            <div className="bg-gray-300 h-1 w-3/4 rounded"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-white to-blue-50 h-full rounded-lg border border-blue-200 shadow-md">
                        <div className="p-2 space-y-2">
                          <div className="bg-blue-600 h-2 w-20 rounded"></div>
                          <div className="bg-gray-700 h-1 w-16 rounded"></div>
                          <div className="mt-3 space-y-1">
                            <div className="bg-gray-200 h-1 w-full rounded"></div>
                            <div className="bg-gray-200 h-1 w-5/6 rounded"></div>
                            <div className="bg-blue-100 h-4 w-12 rounded mt-2"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Details */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Bella Vista Restaurant</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A complete redesign of a local Italian restaurant's website. The original site was built in 2008 
                    and wasn't mobile-friendly. We transformed it into a modern, responsive website that showcases 
                    their delicious food and makes it easy for customers to make reservations.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problems Identified:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Outdated design from 2008</li>
                        <li>• Not mobile responsive</li>
                        <li>• Slow loading times (8+ seconds)</li>
                        <li>• Poor navigation structure</li>
                        <li>• Low-quality images</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solutions Implemented:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Modern, clean design with food photography</li>
                        <li>• Fully responsive mobile-first approach</li>
                        <li>• Optimized loading (under 2 seconds)</li>
                        <li>• Intuitive menu and reservation system</li>
                        <li>• Professional food photography integration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">HTML5</Badge>
                      <Badge variant="secondary">CSS3</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Responsive Design</Badge>
                      <Badge variant="secondary">Contact Forms</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 text-center bg-green-50 border-green-200">
                      <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-700">75%</div>
                      <div className="text-sm text-green-600">Faster Loading</div>
                    </Card>
                    
                    <Card className="p-4 text-center bg-blue-50 border-blue-200">
                      <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-700">150%</div>
                      <div className="text-sm text-blue-600">More Inquiries</div>
                    </Card>
                    
                    <Card className="p-4 text-center bg-purple-50 border-purple-200">
                      <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-700">200%</div>
                      <div className="text-sm text-purple-600">Mobile Traffic</div>
                    </Card>
                    
                    <Card className="p-4 text-center bg-orange-50 border-orange-200">
                      <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-orange-700">90+</div>
                      <div className="text-sm text-orange-600">Speed Score</div>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
