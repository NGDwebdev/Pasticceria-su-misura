import React from 'react';
import { Cake, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pink-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Cake className="h-8 w-8 text-pink-300 mr-2" />
              <span className="font-serif font-bold text-2xl text-white">Pasticceria Su Misura</span>
            </div>
            <p className="text-pink-200 mb-4">
              Dal 1990, portiamo dolcezza e qualità artigianale nella vita dei nostri clienti.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-200 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-pink-200 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-pink-200 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4 text-pink-100">Link Utili</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-pink-200 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#prodotti" className="text-pink-200 hover:text-white transition-colors duration-200">Prodotti</a></li>
              <li><a href="#chi-siamo" className="text-pink-200 hover:text-white transition-colors duration-200">Chi Siamo</a></li>
              <li><a href="#contatti" className="text-pink-200 hover:text-white transition-colors duration-200">Contatti</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4 text-pink-100">Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-pink-200 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-pink-200 hover:text-white transition-colors duration-200">Termini e Condizioni</a></li>
              <li><a href="#" className="text-pink-200 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4 text-pink-100">Contatti</h4>
            <address className="not-italic text-pink-200">
              <p className="mb-2">Via Roma 123, 23900 Lecco (LC)</p>
              <p className="mb-2">Tel: +39 0341 123456</p>
              <p>Email: info@pasticceriasumisura.it</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-pink-800 pt-8 text-center text-pink-300">
          <p>&copy; {new Date().getFullYear()} Pasticceria Su Misura. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;