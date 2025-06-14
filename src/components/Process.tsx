
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Search, Palette, Code, TestTube, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. İlk Danışmanlık",
      description: "İş hedeflerinizi, hedef kitlenizi ve web sitesi ihtiyaçlarınızı tartışacağız. Yeni site mi, yoksa mevcut sitenizin yenilenmesi mi gerektiğini analiz edeceğim.",
      duration: "30 dakika"
    },
    {
      icon: Search,
      title: "2. Hızlı Analiz",
      description: "İşinizin online öne çıkması için bir strateji oluşturmak üzere sektörünüzü ve en iyi uygulamaları hızlıca inceleyeceğim.",
      duration: "2-4 saat"
    },
    {
      icon: Palette,
      title: "3. Tasarım ve Planlama",
      description: "Markanızla uyumlu ve ziyaretçileri müşteriye dönüştüren tasarım planı oluşturuyorum. Yeni site veya yenileme için net bir görsel sunarım.",
      duration: "4-8 saat"
    },
    {
      icon: Code,
      title: "4. Hızlı Geliştirme",
      description: "Web sitenizi temiz, modern kodla hızlıca oluşturuyorum. Duyarlı tasarım, hızlı yükleme süreleri ve ihtiyacınız olan tüm işlevsellik.",
      duration: "8-16 saat"
    },
    {
      icon: TestTube,
      title: "5. Test ve Optimizasyon",
      description: "Tüm cihazlar ve tarayıcılarda hızlı test. Performans optimizasyonu ve son ayarlamalar yapılır.",
      duration: "2-4 saat"
    },
    {
      icon: Rocket,
      title: "6. Hızlı Teslimat",
      description: "Yeni web sitenizle yayına geçiyoruz! Güncellemeler konusunda eğitim sağlayacağım ve sürekli destek sunacağım.",
      duration: "1 saat + sürekli"
    }
  ];

  return (
    <section className="py-20 bg-background dark:bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Hızlı Sürecim</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Web sitenizi maksimum 2 gün içinde danışmanlıktan teslimata kadar dönüştürme süreci
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                        <step.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-xs text-green-700 dark:text-green-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Connection line for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-blue-200 dark:bg-blue-800"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Communication & Timeline */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-300">Hızlı İletişim</h3>
                <div className="space-y-3 text-blue-800 dark:text-blue-200">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                    <span>Anlık ilerleme güncellemeleri</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                    <span>Hızlı geri bildirim ve revizyonlar</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                    <span>2-4 saat yanıt süresi garantisi</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                    <span>Telefon ve mesajla sürekli iletişim</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-300">Hızlı Teslimat Garantisi</h3>
                <div className="space-y-3 text-green-800 dark:text-green-200">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                    <span><strong>Basit projeler:</strong> 1 gün</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                    <span><strong>Standart projeler:</strong> 2 gün</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                    <span><strong>Web sitesi yenileme:</strong> 1-2 gün</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                    <span><strong>Karmaşık projeler:</strong> İhtiyaca göre</span>
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

export default Process;
