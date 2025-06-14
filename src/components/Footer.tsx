
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Dev<span className="text-blue-400">Portfolio</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming outdated websites into modern, professional experiences for small businesses and service providers.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Website Redesign</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Custom Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Mobile Optimization</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Performance Optimization</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Restaurants & Food Services</li>
              <li>Law Firms & Legal Services</li>
              <li>Home Services</li>
              <li>Beauty & Personal Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>hello@devportfolio.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Remote (Nationwide)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 DevPortfolio. All rights reserved.
          </div>
          <div className="text-sm text-gray-400 mt-4 md:mt-0">
            Specializing in website redesigns for small businesses
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
