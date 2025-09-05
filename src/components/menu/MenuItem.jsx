import React from 'react';
import { Plus } from 'lucide-react';

const MenuItem = ({ item, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(item);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
      <div className="flex">
        {/* Conteúdo do item */}
        <div className="flex-1 p-4">
          <h3 className="font-bold text-base text-gray-800 mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">a partir de</span>
              <span className="text-lg font-bold text-green-600">
                R$ {item.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg flex items-center space-x-1 transition-colors text-sm"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Adicionar</span>
            </button>
          </div>
        </div>
        
        {/* Imagem do item */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 flex items-center justify-center flex-shrink-0 m-4 rounded-lg">
          <span className="text-2xl sm:text-3xl">🍕</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

