
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  UtensilsCrossed, 
  Scale, 
  Wrench, 
  Scissors, 
  Heart, 
  Building2,
  Car,
  Home
} from 'lucide-react';

const TargetIndustries = () => {
  const industries = [
    {
      icon: UtensilsCrossed,
      title: "Restoranlar ve Yemek Hizmetleri",
      description: "Menü vitrinleri, online sipariş, rezervasyon sistemleri ve iştah açıcı yemek fotoğrafı sergileri.",
      examples: ["Fine dining restoranları", "Kafeler ve kahve dükkanları", "Yemek kamyonları", "Catering hizmetleri"]
    },
    {
      icon: Scale,
      title: "Hukuk Büroları ve Hukuki Hizmetler",
      description: "Güvenilirlik oluşturan ve hukuki hizmetleri erişilebilir kılan profesyonel, güvenilir tasarımlar.",
      examples: ["Kişisel yaralanma avukatları", "Aile hukuku uygulamaları", "İş avukatları", "Hukuki danışmanlar"]
    },
    {
      icon: Wrench,
      title: "Ev Hizmetleri",
      description: "Potansiyel müşteri oluşturan ve ev geliştirme konusundaki uzmanlığı sergileyen hizmet odaklı web siteleri.",
      examples: ["Tesisatçılık hizmetleri", "Elektrik müteahhitleri", "HVAC şirketleri", "Genel müteahhitler"]
    },
    {
      icon: Scissors,
      title: "Güzellik ve Kişisel Bakım",
      description: "Hizmetleri vurgulayan ve randevu almayı kolaylaştıran şık, görsel web siteleri.",
      examples: ["Kuaförler", "Berber dükkanları", "Nail salonları", "Spa hizmetleri"]
    },
    {
      icon: Heart,
      title: "Tıp ve Sağlık",
      description: "Hasta güvenini önceleyeyen ve kolay randevu planlamaya odaklanan temiz, profesyonel tasarımlar.",
      examples: ["Diş hekimliği uygulamaları", "Tıp klinikleri", "Fizyoterapi", "Kiropraktik ofisleri"]
    },
    {
      icon: Building2,
      title: "Profesyonel Hizmetler",
      description: "Otorite kuran ve nitelikli potansiyel müşteriler oluşturan işe odaklı web siteleri.",
      examples: ["Muhasebe firmaları", "Sigorta acenteleri", "Emlak acenteleri", "Danışmanlık hizmetleri"]
    },
    {
      icon: Car,
      title: "Otomotiv Hizmetleri",
      description: "Hizmet vitrinleri ve kolay iletişim ile otomotiv profesyonelleri için güven oluşturan web siteleri.",
      examples: ["Oto tamir dükkanları", "Araba galerileri", "Detaylandırma hizmetleri", "Lastik dükkanları"]
    },
    {
      icon: Home,
      title: "Yerel Hizmet İşletmeleri",
      description: "Yerel uzmanlığı vurgulayan ve mahalle güveni oluşturan toplum odaklı web siteleri.",
      examples: ["Temizlik hizmetleri", "Peyzaj düzenleme", "Evcil hayvan hizmetleri", "Nakliye şirketleri"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Uzmanlaştığım Sektörler</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Yerel müşterileri çekmek ve dönüştürmek için profesyonel online varlığa ihtiyaç duyan 
            küçük işletmeler ve hizmet sağlayıcıları için web siteleri oluşturmaya odaklanıyorum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <industry.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{industry.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="text-xs text-muted-foreground">
                  <div className="space-y-1">
                    {industry.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center justify-start">
                        <div className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-8 max-w-4xl mx-auto border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Sektörünüzü Görmüyor musunuz? Konuşalım!
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Bunlar ana odak alanlarım olsa da, çeşitli türlerde küçük işletmeler ve hizmet sağlayıcılarıyla çalışıyorum. 
              Müşterileri çekmek ve güvenilirlik oluşturmak için profesyonel bir web sitesine ihtiyaç duyan bir işiniz varsa, 
              online varlığınızı nasıl dönüştürebileceğimi konuşmayı çok isterim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetIndustries;
