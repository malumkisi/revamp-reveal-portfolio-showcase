
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp, Users, Zap } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const FeaturedProject = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
            Öne Çıkan Proje
          </h2>
          <p className="text-xl text-muted-foreground">
            Restoran Web Sitesi Tamamen Yeniden Tasarım ve Modernleştirme
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-6xl mx-auto mb-12">
          <BeforeAfterSlider />
        </div>

        {/* Project Details */}
        <Card className="bg-card shadow-lg animate-fade-in border-border" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Bella Vista Restoran</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Yerel bir İtalyan restoranının web sitesinin tamamen yeniden tasarımı. Orijinal site 2008'de 
                  yapılmış ve mobil uyumlu değildi. Onu lezzetli yemeklerini sergileyen ve müşterilerin 
                  kolayca rezervasyon yapabildiği modern, duyarlı bir web sitesine dönüştürdük.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tespit Edilen Sorunlar:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 2008'den kalma eski tasarım</li>
                      <li>• Mobil uyumlu değil</li>
                      <li>• Yavaş yükleme süreleri (8+ saniye)</li>
                      <li>• Kötü navigasyon yapısı</li>
                      <li>• Düşük kaliteli görseller</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Uygulanan Çözümler:</h4>
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
                  <h4 className="font-semibold text-foreground mb-4">Kullanılan Teknolojiler:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="hover:scale-105 transition-transform bg-secondary text-secondary-foreground">HTML5</Badge>
                    <Badge variant="secondary" className="hover:scale-105 transition-transform bg-secondary text-secondary-foreground">CSS3</Badge>
                    <Badge variant="secondary" className="hover:scale-105 transition-transform bg-secondary text-secondary-foreground">JavaScript</Badge>
                    <Badge variant="secondary" className="hover:scale-105 transition-transform bg-secondary text-secondary-foreground">Duyarlı Tasarım</Badge>
                    <Badge variant="secondary" className="hover:scale-105 transition-transform bg-secondary text-secondary-foreground">İletişim Formları</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 hover:scale-105 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-700 dark:text-green-400">%75</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Daha Hızlı Yükleme</div>
                  </Card>
                  
                  <Card className="p-4 text-center bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-300">
                    <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">%150</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Daha Fazla Sorgu</div>
                  </Card>
                  
                  <Card className="p-4 text-center bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">%200</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Mobil Trafik</div>
                  </Card>
                  
                  <Card className="p-4 text-center bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800 hover:scale-105 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-700 dark:text-orange-400">90+</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Hız Skoru</div>
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
