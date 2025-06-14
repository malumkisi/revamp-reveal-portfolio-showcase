
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Geliştirici<span className="text-blue-400">Portföy</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              Küçük işletmeler için hızlı, profesyonel web sitesi oluşturma ve yenileme hizmetleri. Maksimum 2 günde teslim garantisi.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Hizmetler</h4>
            <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Yeni Web Sitesi Oluşturma</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Web Sitesi Yenileme</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Mobil Optimizasyon</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Hızlı Teslimat</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Sektörler</h4>
            <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <li>Restoranlar ve Yemek Hizmetleri</li>
              <li>Hukuk Büroları ve Hukuki Hizmetler</li>
              <li>Ev Hizmetleri</li>
              <li>Güzellik ve Kişisel Bakım</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">İletişim</h4>
            <div className="space-y-3 text-sm text-gray-300 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>merhaba@gelistiriciportfoy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>(0555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Uzaktan (Türkiye Geneli)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 dark:text-gray-500">
            © 2024 GeliştiriciPortföy. Tüm hakları saklıdır.
          </div>
          <div className="text-sm text-gray-400 dark:text-gray-500 mt-4 md:mt-0">
            Hızlı web sitesi oluşturma ve yenileme uzmanı
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
