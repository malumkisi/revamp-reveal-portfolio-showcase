
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp, Users, Zap } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const FeaturedProject = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Öne Çıkan Proje
          </h2>
          <p className="text-xl text-muted-foreground">
            Restoran Websitesi Komple Yeniden Tasarım & Modernleştirme
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto mb-12">
          <BeforeAfterSlider />
        </div>

        {/* Mobile Comparison */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-6 text-center">Mobil Görünüm Karşılaştırması</h3>
              <div className="flex justify-center items-center gap-8">
                {/* Mobile Before */}
                <div className="text-center">
                  <div className="w-32 h-56 bg-gradient-to-r from-yellow-200 to-red-200 rounded-lg border-2 border-gray-400 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                    <div className="p-3 space-y-2">
                      <div className="bg-red-400 h-2 w-16 rounded"></div>
                      <div className="bg-gray-400 h-1 w-12 rounded"></div>
                      <div className="mt-3 space-y-1">
                        <div className="bg-gray-300 h-1 w-full rounded"></div>
                        <div className="bg-gray-300 h-1 w-3/4 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Önce</p>
                </div>

                {/* Arrow */}
                <div className="text-blue-600 text-2xl font-bold animate-pulse">→</div>

                {/* Mobile After */}
                <div className="text-center">
                  <div className="w-32 h-56 bg-gradient-to-br from-white to-blue-50 rounded-lg border border-blue-200 shadow-md relative overflow-hidden hover:scale-105 transition-transform duration-300">
                    <div className="p-3 space-y-2">
                      <div className="bg-blue-600 h-2 w-20 rounded shadow-sm"></div>
                      <div className="bg-gray-700 h-1 w-16 rounded"></div>
                      <div className="mt-3 space-y-1">
                        <div className="bg-gray-200 h-1 w-full rounded"></div>
                        <div className="bg-gray-200 h-1 w-5/6 rounded"></div>
                        <div className="bg-blue-100 h-4 w-12 rounded mt-2"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Sonra</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <Card className="bg-white shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Bella Vista Restoran</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Yerel bir İtalyan restoranının web sitesinin komple yeniden tasarımı. Orijinal site 2008'de 
                  yapılmış ve mobil uyumlu değildi. Onu lezzetli yemeklerini sergileyen ve müşterilerin 
                  kolayca rezervasyon yapabildiği modern, duyarlı bir web sitesine dönüştürdük.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tespit Edilen Sorunlar:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 2008'den kalma eski tasarım</li>
                      <li>• Mobil uyumlu değil</li>
                      <li>• Yavaş yükleme süreleri (8+ saniye)</li>
                      <li>• Kötü navigasyon yapısı</li>
                      <li>• Düşük kaliteli görseller</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Uygulanan Çözümler:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Yemek fotoğrafları ile modern, temiz tasarım</li>
                      <li>• Tamamen duyarlı mobil öncelikli yaklaşım</li>
                      <li>• Optimize edilmiş yükleme (2 saniye altında)</li>
                      <li>• Sezgisel menü ve rezervasyon sistemi</li>
                      <li>• Profesyonel yemek fotoğrafı entegrasyonu</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Kullanılan Teknolojiler:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="hover:scale-105 transition-transform">HTML5</Badge>
                    <Badge variant="secondary" className="hover:scale-105 transition-transform">CSS3</Badge>
                    <Badge variant="secondary" className="hover:scale-105 transition-transform">JavaScript</Badge>
                    <Badge variant="secondary" className="hover:scale-105 transition-transform">Responsive Design</Badge>
                    <Badge variant="secondary" className="hover:scale-105 transition-transform">İletişim Formları</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center bg-green-50 border-green-200 hover:scale-105 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-700">%75</div>
                    <div className="text-sm text-green-600">Daha Hızlı Yükleme</div>
                  </Card>
                  
                  <Card className="p-4 text-center bg-blue-50 border-blue-200 hover:scale-105 transition-transform duration-300">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-700">%150</div>
                    <div className="text-sm text-blue-600">Daha Fazla Sorgu</div>
                  </Card>
                  
                  <Card className="p-4 text-center bg-purple-50 border-purple-200 hover:scale-105 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-700">%200</div>
                    <div className="text-sm text-purple-600">Mobil Trafik</div>
                  </Card>
                  
                  <Card className="p-4 text-center bg-orange-50 border-orange-200 hover:scale-105 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-700">90+</div>
                    <div className="text-sm text-orange-600">Hız Skoru</div>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedProject;
