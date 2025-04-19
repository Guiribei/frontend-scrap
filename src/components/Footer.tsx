
import React from 'react';
import { Scale, Instagram, Twitter, Facebook, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-law-dark text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-law-light" />
              <span className="ml-2 text-xl font-bold">Scrap<span className="text-law-light">pager</span></span>
            </div>
            <p className="text-gray-300 mb-6">
              Scrappager simplifica o processo de recuperação de certidões negativas, economizando tempo e reduzindo a carga administrativa.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-law-light transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-law-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-law-light transition-colors">Features</a></li>
              <li><a href="#root" className="text-gray-300 hover:text-law-light transition-colors">Use agora</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-law-light transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-light transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-light transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} CertifyLegal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
