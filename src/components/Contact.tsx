
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    projectType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mesaj Gönderildi!",
      description: "Sorgunuz için teşekkürler. 24 saat içinde size geri döneceğim.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      website: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">İletişim</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Web sitenizi dönüştürmeye hazır mısınız? Projenizi ve işinizin online başarısı için nasıl yardımcı olabileceğimi konuşalım.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="font-medium text-foreground">E-posta</div>
                      <div className="text-sm text-muted-foreground">merhaba@gelistiriciportfoy.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="font-medium text-foreground">Telefon</div>
                      <div className="text-sm text-muted-foreground">(0555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="font-medium text-foreground">Konum</div>
                      <div className="text-sm text-muted-foreground">Uzaktan (Türkiye Geneli)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="font-medium text-foreground">Yanıt Süresi</div>
                      <div className="text-sm text-muted-foreground">24 saat içinde</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-300">Ücretsiz Danışmanlık</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                  Neye ihtiyacınız olduğundan emin değil misiniz? Web sitesi hedeflerinizi tartışmak ve öneriler sunmak için 30 dakikalık ücretsiz danışmanlık sunuyorum.
                </p>
                <Button variant="outline" className="border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 w-full">
                  Ücretsiz Görüşme Planla
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-foreground">Projeniz Hakkında Bilgi Verin</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Ad Soyad *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-background border-border text-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">E-posta *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-background border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 bg-background border-border text-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="website" className="text-foreground">Mevcut Web Siteniz (varsa)</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://websiteniz.com"
                      className="mt-1 bg-background border-border text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType" className="text-foreground">Proje Türü *</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full px-3 py-2 border border-border bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                  >
                    <option value="">Proje türü seçin</option>
                    <option value="redesign">Web Sitesi Yeniden Tasarım</option>
                    <option value="new">Yeni Web Sitesi</option>
                    <option value="mobile">Mobil Optimizasyon</option>
                    <option value="maintenance">Web Sitesi Bakımı</option>
                    <option value="consultation">Sadece Danışmanlık</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Proje Detayları *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="İşiniz, mevcut web sitesi zorlukları, hedefler, zaman çizelgesi ve bütçe aralığı hakkında bilgi verin..."
                    className="mt-1 bg-background border-border text-foreground"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-3">
                  Mesaj Gönder
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
