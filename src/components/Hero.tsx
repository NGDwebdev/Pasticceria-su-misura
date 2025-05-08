import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center" id="home">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-r from-pink-200 to-pink-100 opacity-90"></div>
        <img 
          src="https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg" 
          alt="Elegant pastries display" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-pink-900 leading-tight mb-4">
              Dolce tradizione <br />dal 1990
            </h1>
            <p className="text-lg md:text-xl text-pink-800 mb-8 max-w-md">
              Pasticceria artigianale con ingredienti selezionati, dove ogni dolce racconta la nostra passione per l'eccellenza.
            </p>
            <div className="flex space-x-4">
              <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors duration-300 shadow-lg">
                Scopri i nostri prodotti
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors duration-300">
                Contattaci
              </button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute -top-20 -left-10 w-32 h-32 bg-pink-200 rounded-full opacity-40"></div>
            <div className="absolute -bottom-10 -right-5 w-40 h-40 bg-pink-300 rounded-full opacity-30"></div>
            <img 
              src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg" 
              alt="Exquisite cake" 
              className="rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 relative z-10 max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;