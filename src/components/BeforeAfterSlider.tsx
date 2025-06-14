
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Desktop Comparison */}
      <Card className="overflow-hidden shadow-lg animate-fade-in">
        <CardContent className="p-0">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="font-semibold text-center">Masaüstü Görünüm</h3>
          </div>
          <div 
            ref={containerRef}
            className="relative h-80 cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image (Background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-yellow-100 overflow-hidden">
              <div className="p-6 h-full">
                <div className="bg-red-400 h-6 w-40 rounded mb-3"></div>
                <div className="bg-gray-400 h-3 w-32 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="bg-gray-300 h-2 w-full rounded"></div>
                  <div className="bg-gray-300 h-2 w-3/4 rounded"></div>
                  <div className="bg-gray-300 h-2 w-1/2 rounded"></div>
                </div>
                <div className="mt-6">
                  <div className="bg-yellow-400 h-8 w-20 rounded text-xs flex items-center justify-center font-medium">
                    Eski
                  </div>
                </div>
                {/* Old navigation */}
                <div className="absolute top-6 right-6 space-x-2">
                  <div className="bg-red-300 h-3 w-16 rounded inline-block"></div>
                  <div className="bg-red-300 h-3 w-12 rounded inline-block"></div>
                </div>
              </div>
            </div>

            {/* After Image (Overlay) */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 overflow-hidden transition-all duration-300"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="p-6 h-full">
                <div className="bg-blue-600 h-6 w-48 rounded mb-3 shadow-sm"></div>
                <div className="bg-gray-700 h-3 w-40 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="bg-gray-200 h-2 w-full rounded"></div>
                  <div className="bg-gray-200 h-2 w-5/6 rounded"></div>
                  <div className="bg-gray-200 h-2 w-4/6 rounded"></div>
                </div>
                <div className="mt-6">
                  <div className="bg-blue-600 h-10 w-28 rounded text-xs flex items-center justify-center text-white font-medium shadow-md">
                    Modern
                  </div>
                </div>
                {/* Modern navigation */}
                <div className="absolute top-6 right-6 space-x-3">
                  <div className="bg-blue-100 h-3 w-20 rounded inline-block"></div>
                  <div className="bg-blue-100 h-3 w-16 rounded inline-block"></div>
                  <div className="bg-blue-500 h-3 w-3 rounded-full inline-block"></div>
                </div>
                {/* Modern card elements */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white rounded-lg p-3 shadow-md">
                    <div className="bg-blue-100 h-2 w-32 rounded mb-2"></div>
                    <div className="bg-gray-100 h-1 w-24 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Line and Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg cursor-col-resize flex items-center justify-center hover:scale-110 transition-transform duration-200"
                onMouseDown={handleMouseDown}
                onTouchStart={() => { isDragging.current = true; }}
              >
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
                  <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-medium">
              Önce
            </div>
            <div 
              className="absolute top-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300"
              style={{ 
                right: `${100 - sliderPosition}%`,
                marginRight: '16px',
                opacity: sliderPosition > 70 ? 1 : 0
              }}
            >
              Sonra
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mobile Comparison */}
      <Card className="overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <CardContent className="p-0">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="font-semibold text-center">Mobil Görünüm</h3>
          </div>
          <div className="p-8 h-80 flex items-center justify-center">
            <div className="flex items-center gap-8">
              {/* Mobile Before */}
              <div className="text-center">
                <div className="w-24 h-48 bg-gradient-to-r from-yellow-200 to-red-200 rounded-lg border-2 border-gray-400 relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md">
                  <div className="p-2 space-y-2">
                    <div className="bg-red-400 h-1.5 w-12 rounded"></div>
                    <div className="bg-gray-400 h-1 w-8 rounded"></div>
                    <div className="mt-2 space-y-1">
                      <div className="bg-gray-300 h-0.5 w-full rounded"></div>
                      <div className="bg-gray-300 h-0.5 w-3/4 rounded"></div>
                      <div className="bg-gray-300 h-0.5 w-1/2 rounded"></div>
                    </div>
                    <div className="mt-3">
                      <div className="bg-yellow-400 h-3 w-8 rounded text-xs"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-medium">Önce</p>
              </div>

              {/* Arrow */}
              <div className="text-blue-600 text-3xl font-bold animate-pulse">→</div>

              {/* Mobile After */}
              <div className="text-center">
                <div className="w-24 h-48 bg-gradient-to-br from-white to-blue-50 rounded-lg border border-blue-200 shadow-lg relative overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="p-2 space-y-2">
                    <div className="bg-blue-600 h-1.5 w-14 rounded shadow-sm"></div>
                    <div className="bg-gray-700 h-1 w-10 rounded"></div>
                    <div className="mt-2 space-y-1">
                      <div className="bg-gray-200 h-0.5 w-full rounded"></div>
                      <div className="bg-gray-200 h-0.5 w-5/6 rounded"></div>
                      <div className="bg-gray-200 h-0.5 w-4/6 rounded"></div>
                    </div>
                    <div className="mt-2">
                      <div className="bg-blue-100 h-3 w-10 rounded"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white rounded p-1 shadow-sm">
                        <div className="bg-blue-100 h-0.5 w-8 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-medium">Sonra</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BeforeAfterSlider;
