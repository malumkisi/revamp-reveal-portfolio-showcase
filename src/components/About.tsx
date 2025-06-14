
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Hakkımda</h2>
            <p className="text-xl text-muted-foreground">
              Küçük işletmeler için dijital deneyimleri yaratma konusunda tutkulu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Frontend Geliştirici & Profesyonel Web Sitesi Uzmanı
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Küçük işletmeler için sıfırdan profesyonel web siteleri tasarlayıp geliştiren bir frontend geliştiriciyim. 
                Tutkum, restoranlardan hukuk bürolarına, hizmet şirketlerinden berber dükkanlarına 
                kadar küçük işletmelerin güçlü, modern ve etkili bir online varlık kurmasına yardımcı olmakta yatıyor.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern web teknolojileri ve kullanıcı deneyimi tasarımı konusundaki uzmanlığımla, 
                işinizi en iyi şekilde temsil eden, ziyaretçileri gerçekten müşteriye 
                dönüştüren şık, duyarlı ve kullanıcı dostu web siteleri yaratıyorum.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-foreground font-medium">
                  <strong>Odak Noktam:</strong> Hizmet tabanlı işletmeler ve yerel şirketler için 
                  müşteri kazandıran, profesyonel ve modern web siteleri yaratmak.
                </p>
              </div>
            </div>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-center text-foreground">Projenize Getirdiklerim</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Tüm cihazlarda mükemmel çalışan modern tasarım</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Hızlı yükleme süreleri ve optimize edilmiş performans</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Ziyaretçileri müşteriye dönüştüren kullanıcı deneyimi</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">İletişim formları ve temel backend entegrasyonu</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Daha iyi görünürlük için SEO dostu yapı</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Mobil, tablet ve desktop optimizasyonu</p>
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
