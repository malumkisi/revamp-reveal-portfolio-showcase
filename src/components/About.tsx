
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
              Küçük işletmeler için hızlı ve profesyonel dijital çözümler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Frontend Geliştirici & Hızlı Web Sitesi Uzmanı
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Küçük işletmeler için sıfırdan profesyonel web siteleri tasarlayıp geliştiren ve mevcut web sitelerini yenileyen bir frontend geliştiriciyim. 
                Tutkum, restoranlardan hukuk bürolarına, hizmet şirketlerinden berber dükkanlarına 
                kadar küçük işletmelerin güçlü, modern ve etkili bir online varlık kurmasına hızlı bir şekilde yardımcı olmakta yatıyor.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern web teknolojileri ve kullanıcı deneyimi tasarımı konusundaki uzmanlığımla, 
                işinizi en iyi şekilde temsil eden web siteleri yaratıyorum. İster sıfırdan yeni bir site, 
                ister mevcut sitenizin yenilenmesi olsun - her projede hızlı teslimat ve kaliteli sonuçlar garanti ediyorum.
              </p>
              
              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-foreground font-medium">
                  <strong>Hızlı Teslimat Garantisi:</strong> Projeler maksimum 2 gün içinde teslim edilir. 
                  Karmaşık projeler için süre ihtiyaçlara göre planlanır.
                </p>
              </div>
            </div>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-center text-foreground">Projenize Getirdiklerim</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Hızlı proje teslimi (maksimum 2 gün)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Sıfırdan web sitesi oluşturma ve yenileme hizmetleri</p>
                  </div>
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
                    <p className="text-muted-foreground">SEO dostu yapı ve mobil optimizasyon</p>
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
