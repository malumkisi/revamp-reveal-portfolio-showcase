
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, Code, FileText, Zap, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Yeni İş Web Siteleri",
      description: "Sıfırdan güçlü bir online varlığa ihtiyaç duyan küçük işletmeler için profesyonel web siteleri oluşturun. Hızlı teslimat garantisiyle.",
      features: ["Sıfırdan özel tasarım", "İşe odaklı düzenler", "Profesyonel markalaşma", "Maksimum 2 günde teslim"]
    },
    {
      icon: Zap,
      title: "Web Sitesi Yenileme",
      description: "Mevcut web sitenizi modern, hızlı ve kullanıcı dostu bir deneyime dönüştürün. Eski tasarımları çağdaş çözümlerle yenileyin.",
      features: ["Mevcut site analizi", "Modern tasarım güncellemesi", "Performans iyileştirme", "Hızlı yenileme süreci"]
    },
    {
      icon: Palette,
      title: "Modern UI/UX Tasarım",
      description: "Kullanıcı deneyimini önceleyerek, markanızı en iyi şekilde yansıtan modern ve çekici arayüz tasarımları oluşturun.",
      features: ["Kullanıcı odaklı tasarım", "Modern görsel dil", "Marka kimliği entegrasyonu", "Çekici görsel öğeler"]
    },
    {
      icon: Code,
      title: "Frontend Geliştirme",
      description: "Hem güzel hem de işlevsel web siteleri oluşturmak için temiz, semantik HTML, modern CSS ve etkileşimli JavaScript.",
      features: ["HTML5 ve CSS3", "Modern JavaScript", "Etkileşimli öğeler", "Tarayıcılar arası uyumluluk"]
    },
    {
      icon: Smartphone,
      title: "Çoklu Platform Optimizasyonu",
      description: "Web sitenizin akıllı telefonlarda, tabletlerde, masaüstü bilgisayarlarda ve tüm ekran boyutlarında mükemmel çalışmasını sağlayın.",
      features: ["Mobil öncelikli tasarım", "Tablet optimizasyonu", "Desktop uyumluluğu", "Tüm cihazlarda hızlı yükleme"]
    },
    {
      icon: FileText,
      title: "Backend Entegrasyonu",
      description: "İletişim formları, temel veri işleme ve temel iş özellikleri için güvenilir sunucu tarafı işlevsellik.",
      features: ["İletişim formu kurulumu", "E-posta entegrasyonu", "Veri işleme sistemleri", "İçerik yönetimi"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background dark:bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Hizmetler</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Küçük işletmeler için hızlı web sitesi oluşturma ve yenileme çözümleri
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
