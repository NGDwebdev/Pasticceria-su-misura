import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-pink-50" id="chi-siamo">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-5 w-40 h-40 bg-pink-200 rounded-full opacity-40"></div>
            <img 
              src="https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg" 
              alt="I nostri pasticceri all'opera" 
              className="rounded-lg shadow-xl relative z-10 w-full h-[400px] object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "https://images.pexels.com/photos/6287267/pexels-photo-6287267.jpeg";
              }}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-300 rounded-full opacity-30"></div>
          </div>
          
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-pink-800 mb-6">La nostra storia</h2>
            <div className="w-20 h-1 bg-pink-400 mb-6"></div>
            <p className="text-gray-700 mb-4">
              Dal 1990, Pasticceria Su Misura crea dolci momenti per i clienti di Lecco. La nostra storia inizia con una piccola bottega e una grande passione per la pasticceria artigianale.
            </p>
            <p className="text-gray-700 mb-6">
              Oggi, tre generazioni dopo, continuiamo a selezionare gli ingredienti migliori e a innovare le nostre ricette, mantenendo viva la tradizione che ci ha reso un punto di riferimento per chi cerca l'eccellenza nei dolci.
            </p>
            <div className="flex space-x-6">
              <div>
                <h4 className="font-serif text-4xl font-bold text-pink-600">30+</h4>
                <p className="text-gray-600">Anni di esperienza</p>
              </div>
              <div>
                <h4 className="font-serif text-4xl font-bold text-pink-600">50+</h4>
                <p className="text-gray-600">Ricette originali</p>
              </div>
              <div>
                <h4 className="font-serif text-4xl font-bold text-pink-600">1000+</h4>
                <p className="text-gray-600">Clienti felici</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;