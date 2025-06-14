
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
              Küçük işletmeler için dijital deneyimleri dönüştürme konusunda tutkulu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Frontend Geliştirici & Web Sitesi Modernleştirme Uzmanı
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eski web sitelerine yeni hayat vermekte uzmanlaşmış bir frontend geliştiriciyim. 
                Tutkum, restoranlardan hukuk bürolarına, hizmet şirketlerinden berber dükkanlarına 
                kadar küçük işletmelerin güçlü, modern bir online varlık kurmasına yardımcı olmakta yatıyor.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern web teknolojileri ve kullanıcı deneyimi tasarımı konusundaki uzmanlığımla, 
                2005'ten kalma görünebilen web sitelerini, ziyaretçileri gerçekten müşteriye 
                dönüştüren şık, duyarlı ve kullanıcı dostu deneyimlere dönüştürüyorum.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-foreground font-medium">
                  <strong>Odak Noktam:</strong> İşe yarayan iş web siteleri. E-ticaret platformları oluşturmuyorum - 
                  hizmet tabanlı işletmeler ve yerel şirketler için profesyonel, dönüşüm odaklı web siteleri yaratıyorum.
                </p>
              </div>
            </div>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-center text-foreground">Projenize Getirdiklerim</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Tüm cihazlarda çalışan modern, duyarlı tasarım</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Hızlı yükleme süreleri ve optimize edilmiş performans</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Ziyaretçileri dönüştüren kullanıcı dostu arayüzler</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">İletişim formları için temel backend entegrasyonu</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Daha iyi görünürlük için SEO dostu yapı</p>
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
