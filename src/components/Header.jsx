import React from "react";
import { ShoppingCart, Phone, Clock } from "lucide-react";
import logo from "../img/logo_luigi.png";

const Header = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="bg-white-600 text-green-600 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-3">
            <div className="w-13 h-13 sm:w-13 sm:h-13 bg-white rounded-full flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold">Luigi Pizza</h1>
              <p className="text-100 text-xs sm:text-sm hidden sm:block">
                O prazer de uma pizza italiana
              </p>
            </div>
          </div>

          {/* Informações de contato - apenas desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <div className="text-sm">
                <p className="font-semibold">Horário de funcionamento</p>
                <p className="text-100">18:00 às 23:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <div className="text-sm">
                <p className="font-semibold">Telefone</p>
                <p className="text-100">(61) 99999-9999</p>
              </div>
            </div>
          </div>

          {/* Carrinho */}
          <button
            onClick={onCartClick}
            className="relative bg-red-700 hover:bg-red-800 px-3 py-2 sm:px-4 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
            <span className="hidden sm:inline text-sm text-white">Carrinho</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-800 text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Pedido mínimo */}
      <div className="bg-red-700 py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-100 text-xs sm:text-sm">
            Pedido mínimo: R$ 30,00 • Entrega grátis acima de R$ 50,00
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
