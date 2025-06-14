
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, Globe, Smartphone, Code, FileText, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Web Sitesi Yeniden Tasarım ve Modernleştirme",
      description: "Eski web sitenizi ziyaretçileri etkileyen ve markanızla güven oluşturan modern, duyarlı bir tasarıma dönüştürün.",
      features: ["Tamamen görsel yenileme", "Modern UI/UX tasarım", "Mobil optimizasyon", "Performans iyileştirmeleri"]
    },
    {
      icon: Globe,
      title: "Özel İş Web Siteleri",
      description: "Güçlü bir online varlığa ihtiyaç duyan küçük işletmeler ve hizmet sağlayıcıları için sıfırdan profesyonel web siteleri oluşturun.",
      features: ["Özel tasarım ve geliştirme", "İşe odaklı düzenler", "Profesyonel markalaşma", "İletişim ve hizmet sayfaları"]
    },
    {
      icon: Code,
      title: "Frontend Geliştirme",
      description: "Hem güzel hem de işlevsel web siteleri oluşturmak için temiz, semantik HTML, modern CSS ve etkileşimli JavaScript.",
      features: ["HTML5 ve CSS3", "Duyarlı framework'ler", "Etkileşimli öğeler", "Tarayıcılar arası uyumluluk"]
    },
    {
      icon: Smartphone,
      title: "Mobil Optimizasyon",
      description: "Web sitenizin akıllı telefonlarda, tabletlerde ve tüm ekran boyutlarında mükemmel görünmesini ve kusursuz çalışmasını sağlayın.",
      features: ["Mobil öncelikli tasarım", "Dokunma dostu arayüzler", "Hızlı mobil yükleme", "Uygulama benzeri deneyim"]
    },
    {
      icon: FileText,
      title: "Temel Backend Entegrasyonu",
      description: "İletişim formları, temel veri işleme ve temel iş özellikleri için basit sunucu tarafı işlevsellik.",
      features: ["İletişim formu kurulumu", "E-posta entegrasyonu", "Temel veri işleme", "Basit CMS çözümleri"]
    },
    {
      icon: Zap,
      title: "Performans Optimizasyonu",
      description: "Optimize edilmiş kod, sıkıştırılmış görseller ve hızlı yükleme süreleri için en iyi uygulamalarla web sitenizi hızlandırın.",
      features: ["Sayfa hızı optimizasyonu", "Görsel sıkıştırma", "Kod küçültme", "Önbellekleme stratejileri"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background dark:bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Hizmetler</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Küçük işletmeler ve hizmet sağlayıcıları için kapsamlı web sitesi çözümleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group bg-card border-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl mb-2 text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
