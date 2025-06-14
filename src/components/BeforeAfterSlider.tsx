
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [mobileSliderPosition, setMobileSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isMobileDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMobileMouseDown = () => {
    isMobileDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    isMobileDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent | MouseEvent, isMobile = false) => {
    const dragging = isMobile ? isMobileDragging.current : isDragging.current;
    const container = isMobile ? mobileContainerRef.current : containerRef.current;
    
    if (!dragging || !container) return;
    
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    
    if (isMobile) {
      setMobileSliderPosition(percentage);
    } else {
      setSliderPosition(percentage);
    }
  };

  const handleTouchMove = (e: React.TouchEvent, isMobile = false) => {
    const dragging = isMobile ? isMobileDragging.current : isDragging.current;
    const container = isMobile ? mobileContainerRef.current : containerRef.current;
    
    if (!dragging || !container) return;
    
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    
    if (isMobile) {
      setMobileSliderPosition(percentage);
    } else {
      setSliderPosition(percentage);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      handleMouseMove(e, false);
      handleMouseMove(e, true);
    };
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
      <Card className="overflow-hidden shadow-lg animate-fade-in bg-card border-border">
        <CardContent className="p-0">
          <div className="p-4 bg-muted border-b border-border">
            <h3 className="font-semibold text-center text-foreground">Masaüstü Görünüm</h3>
          </div>
          <div 
            ref={containerRef}
            className="relative h-80 cursor-col-resize select-none bg-background"
            onMouseMove={(e) => handleMouseMove(e, false)}
            onTouchMove={(e) => handleTouchMove(e, false)}
          >
            {/* Before Image (Background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-yellow-100 dark:from-red-900/30 dark:to-yellow-900/30 overflow-hidden">
              <div className="p-6 h-full">
                <div className="bg-red-400 dark:bg-red-600 h-6 w-40 rounded mb-3"></div>
                <div className="bg-gray-400 dark:bg-gray-600 h-3 w-32 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="bg-gray-300 dark:bg-gray-700 h-2 w-full rounded"></div>
                  <div className="bg-gray-300 dark:bg-gray-700 h-2 w-3/4 rounded"></div>
                  <div className="bg-gray-300 dark:bg-gray-700 h-2 w-1/2 rounded"></div>
                </div>
                <div className="mt-6">
                  <div className="bg-yellow-400 dark:bg-yellow-600 h-8 w-20 rounded text-xs flex items-center justify-center font-medium text-black dark:text-white">
                    Eski
                  </div>
                </div>
                <div className="absolute top-6 right-6 space-x-2">
                  <div className="bg-red-300 dark:bg-red-700 h-3 w-16 rounded inline-block"></div>
                  <div className="bg-red-300 dark:bg-red-700 h-3 w-12 rounded inline-block"></div>
                </div>
              </div>
            </div>

            {/* After Image (Overlay) */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 overflow-hidden transition-all duration-300"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="p-6 h-full">
                <div className="bg-blue-600 dark:bg-blue-500 h-6 w-48 rounded mb-3 shadow-sm"></div>
                <div className="bg-gray-700 dark:bg-gray-300 h-3 w-40 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="bg-gray-200 dark:bg-gray-600 h-2 w-full rounded"></div>
                  <div className="bg-gray-200 dark:bg-gray-600 h-2 w-5/6 rounded"></div>
                  <div className="bg-gray-200 dark:bg-gray-600 h-2 w-4/6 rounded"></div>
                </div>
                <div className="mt-6">
                  <div className="bg-blue-600 dark:bg-blue-500 h-10 w-28 rounded text-xs flex items-center justify-center text-white font-medium shadow-md">
                    Modern
                  </div>
                </div>
                <div className="absolute top-6 right-6 space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-800 h-3 w-20 rounded inline-block"></div>
                  <div className="bg-blue-100 dark:bg-blue-800 h-3 w-16 rounded inline-block"></div>
                  <div className="bg-blue-500 h-3 w-3 rounded-full inline-block"></div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                    <div className="bg-blue-100 dark:bg-blue-900 h-2 w-32 rounded mb-2"></div>
                    <div className="bg-gray-100 dark:bg-gray-700 h-1 w-24 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Line and Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white dark:bg-gray-300 shadow-lg z-10 cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-200 rounded-full shadow-lg cursor-col-resize flex items-center justify-center hover:scale-110 transition-transform duration-200"
                onMouseDown={handleMouseDown}
                onTouchStart={() => { isDragging.current = true; }}
              >
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-4 bg-gray-400 dark:bg-gray-600 rounded"></div>
                  <div className="w-0.5 h-4 bg-gray-400 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>

            {/* Dynamic Labels */}
            <div 
              className="absolute top-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300"
              style={{ 
                left: sliderPosition < 50 ? '16px' : 'auto',
                right: sliderPosition >= 50 ? '16px' : 'auto'
              }}
            >
              {sliderPosition < 50 ? 'Önce (Eski)' : 'Sonra (Yeni)'}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mobile Comparison with Slider */}
      <Card className="overflow-hidden shadow-lg animate-fade-in bg-card border-border" style={{ animationDelay: '0.2s' }}>
        <CardContent className="p-0">
          <div className="p-4 bg-muted border-b border-border">
            <h3 className="font-semibold text-center text-foreground">Mobil Görünüm</h3>
          </div>
          <div 
            ref={mobileContainerRef}
            className="relative h-80 cursor-col-resize select-none bg-background"
            onMouseMove={(e) => handleMouseMove(e, true)}
            onTouchMove={(e) => handleTouchMove(e, true)}
          >
            {/* Mobile Before */}
            <div className="absolute inset-0 p-8 flex items-center justify-center">
              <div className="relative w-32 h-64 bg-gradient-to-r from-yellow-200 to-red-200 dark:from-yellow-900/40 dark:to-red-900/40 rounded-lg border-2 border-gray-400 dark:border-gray-600 overflow-hidden shadow-md">
                <div className="p-3 space-y-2">
                  <div className="bg-red-400 dark:bg-red-600 h-2 w-16 rounded"></div>
                  <div className="bg-gray-400 dark:bg-gray-600 h-1.5 w-12 rounded"></div>
                  <div className="mt-3 space-y-1">
                    <div className="bg-gray-300 dark:bg-gray-700 h-1 w-full rounded"></div>
                    <div className="bg-gray-300 dark:bg-gray-700 h-1 w-3/4 rounded"></div>
                    <div className="bg-gray-300 dark:bg-gray-700 h-1 w-1/2 rounded"></div>
                  </div>
                  <div className="mt-4">
                    <div className="bg-yellow-400 dark:bg-yellow-600 h-4 w-12 rounded text-xs"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile After */}
            <div 
              className="absolute inset-0 p-8 flex items-center justify-center transition-all duration-300"
              style={{ clipPath: `inset(0 ${100 - mobileSliderPosition}% 0 0)` }}
            >
              <div className="relative w-32 h-64 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 rounded-lg border border-blue-200 dark:border-blue-800 shadow-lg overflow-hidden">
                <div className="p-3 space-y-2">
                  <div className="bg-blue-600 dark:bg-blue-500 h-2 w-20 rounded shadow-sm"></div>
                  <div className="bg-gray-700 dark:bg-gray-300 h-1.5 w-14 rounded"></div>
                  <div className="mt-3 space-y-1">
                    <div className="bg-gray-200 dark:bg-gray-600 h-1 w-full rounded"></div>
                    <div className="bg-gray-200 dark:bg-gray-600 h-1 w-5/6 rounded"></div>
                    <div className="bg-gray-200 dark:bg-gray-600 h-1 w-4/6 rounded"></div>
                  </div>
                  <div className="mt-3">
                    <div className="bg-blue-100 dark:bg-blue-900 h-4 w-14 rounded"></div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white dark:bg-gray-800 rounded p-1.5 shadow-sm">
                      <div className="bg-blue-100 dark:bg-blue-900 h-1 w-12 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Slider Line and Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white dark:bg-gray-300 shadow-lg z-10 cursor-col-resize"
              style={{ left: `${mobileSliderPosition}%` }}
            >
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-200 rounded-full shadow-lg cursor-col-resize flex items-center justify-center hover:scale-110 transition-transform duration-200"
                onMouseDown={handleMobileMouseDown}
                onTouchStart={() => { isMobileDragging.current = true; }}
              >
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-4 bg-gray-400 dark:bg-gray-600 rounded"></div>
                  <div className="w-0.5 h-4 bg-gray-400 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>

            {/* Mobile Dynamic Labels */}
            <div 
              className="absolute top-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300"
              style={{ 
                left: mobileSliderPosition < 50 ? '16px' : 'auto',
                right: mobileSliderPosition >= 50 ? '16px' : 'auto'
              }}
            >
              {mobileSliderPosition < 50 ? 'Önce (Eski)' : 'Sonra (Yeni)'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BeforeAfterSlider;
