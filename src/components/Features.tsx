import React from 'react';
import { Leaf, Award, Palette } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-pink-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Materie prime di qualità",
      description: "Selezioniamo con cura ingredienti freschi e naturali, privilegiando produzioni locali ed eccellenze del territorio."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Ricette tradizionali",
      description: "Le nostre creazioni seguono ricette tramandate di generazione in generazione, custodendo il sapore autentico della tradizione."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creatività su misura",
      description: "Ogni dolce è un'opera unica, personalizzata per occasioni speciali e realizzata con passione artigianale."
    }
  ];
  
  return (
    <section className="py-20 bg-pink-50" id="prodotti">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-pink-800 mb-4">Perché sceglierci</h2>
          <p className="text-gray-600">La nostra pasticceria si distingue per l'attenzione ai dettagli e la cura in ogni creazione</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;