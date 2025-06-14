
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
    <Card className="overflow-hidden shadow-lg animate-fade-in">
      <CardContent className="p-0">
        <div 
          ref={containerRef}
          className="relative h-80 lg:h-96 cursor-col-resize select-none"
          onMouseMove={handleMouseMove}
        >
          {/* Before Image (Background) */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-yellow-100">
            <div className="p-6 h-full">
              <div className="bg-red-400 h-6 w-40 rounded mb-3 animate-pulse"></div>
              <div className="bg-gray-400 h-3 w-32 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="bg-gray-300 h-2 w-full rounded"></div>
                <div className="bg-gray-300 h-2 w-3/4 rounded"></div>
                <div className="bg-gray-300 h-2 w-1/2 rounded"></div>
              </div>
              <div className="mt-6">
                <div className="bg-yellow-400 h-8 w-20 rounded text-xs flex items-center justify-center font-medium">
                  Eski Tasarım
                </div>
              </div>
              {/* Old style navigation */}
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
                  Modern Tasarım
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
            >
              <div className="w-1 h-4 bg-gray-400 rounded"></div>
              <div className="w-1 h-4 bg-gray-400 rounded ml-1"></div>
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
              opacity: sliderPosition > 80 ? 1 : 0
            }}
          >
            Sonra
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BeforeAfterSlider;
