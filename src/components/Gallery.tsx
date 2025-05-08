import React, { useState } from 'react';

const categories = [
  { id: 'all', name: 'Tutti' },
  { id: 'torte', name: 'Torte' },
  { id: 'pasticcini', name: 'Pasticcini' },
  { id: 'lievitati', name: 'Lievitati' }
];

const products = [
  {
    id: 1,
    name: "Torta al Cioccolato",
    description: "Intenso cioccolato fondente con ganache vellutata",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    category: "torte"
  },
  {
    id: 2,
    name: "Millefoglie",
    description: "Sfoglia croccante con crema pasticcera alla vaniglia",
    image: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg",
    category: "torte"
  },
  {
    id: 3,
    name: "Macarons Assortiti",
    description: "Delicati gusci alle mandorle con ripieni gourmet",
    image: "https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg",
    category: "pasticcini"
  },
  {
    id: 4,
    name: "Croissant",
    description: "Pasta sfoglia al burro con 27 strati",
    image: "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg",
    category: "lievitati"
  },
  {
    id: 5,
    name: "Cupcake Fragola",
    description: "Base soffice con crema al burro e fragole fresche",
    image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
    category: "pasticcini"
  },
  {
    id: 6,
    name: "Panettone Artigianale",
    description: "Lievitazione naturale per 48 ore con frutta candita",
    image: "https://images.pexels.com/photos/5765853/pexels-photo-5765853.jpeg",
    category: "lievitati"
  },
  {
    id: 7,
    name: "Cheesecake ai Frutti di Bosco",
    description: "Base biscottata con formaggio fresco e frutti di bosco",
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
    category: "torte"
  },
  {
    id: 8,
    name: "Bignè alla Crema",
    description: "Pasta choux con crema pasticcera classica",
    image: "https://images.pexels.com/photos/4686828/pexels-photo-4686828.jpeg",
    category: "pasticcini"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-pink-800 mb-4">Le nostre creazioni</h2>
          <p className="text-gray-600 mb-8">Scopri la nostra selezione di dolci, preparati ogni giorno con passione e maestria artigianale</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-pink-100 text-pink-800 hover:bg-pink-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-pink-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;