import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Clock } from 'lucide-react';
import { BAKERY_BRAND } from '../data/bakeryData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCakeConfigurator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top announcement bar for warm bread */}
      <div className="bg-[#1E1915] border-b border-[#2C241E] text-xs text-[#D5C2B1] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#C98A4B]" />
            <span>Fournée chaude en cours · Baguettes croustillantes disponibles au fournil</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#A89685]">
            <span>Ouvert aujourd'hui jusqu'à 19h30</span>
            <span aria-hidden="true">·</span>
            <span>Tél: {BAKERY_BRAND.phone}</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar following Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#14110E]/95 backdrop-blur-md border-b border-[#2A231C] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand element */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-[#C98A4B]/40 bg-[#FAF6F0] p-0.5 shadow-sm group-hover:border-[#C98A4B] transition-colors shrink-0">
              <img
                src={BAKERY_BRAND.sealImage}
                alt="Logo The Wild Knead"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl tracking-wide text-[#FAF6F0] font-semibold leading-none group-hover:text-[#E2A669] transition-colors whitespace-nowrap">
                THE WILD KNEAD
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C98A4B] font-medium mt-1 whitespace-nowrap">
                Boulangerie Artisanale
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#D1C2B4]">
            <a 
              href="#savoir-faire" 
              className="hover:text-[#FAF6F0] transition-colors hover:underline underline-offset-8 decoration-[#C98A4B] whitespace-nowrap shrink-0"
            >
              Notre Savoir-Faire
            </a>
            <a 
              href="#galerie" 
              className="hover:text-[#FAF6F0] transition-colors hover:underline underline-offset-8 decoration-[#C98A4B] whitespace-nowrap shrink-0"
            >
              Galerie Photos
            </a>
            <a 
              href="#carte" 
              className="hover:text-[#FAF6F0] transition-colors hover:underline underline-offset-8 decoration-[#C98A4B] whitespace-nowrap shrink-0"
            >
              Le Menu & Prix
            </a>
            <a 
              href="#sur-mesure" 
              className="hover:text-[#FAF6F0] transition-colors hover:underline underline-offset-8 decoration-[#C98A4B] whitespace-nowrap shrink-0"
            >
              Gâteaux d'Exception
            </a>
            <a 
              href="#fournil" 
              className="hover:text-[#FAF6F0] transition-colors hover:underline underline-offset-8 decoration-[#C98A4B] whitespace-nowrap shrink-0"
            >
              Horaires & Visite
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-[#1A140F] bg-gradient-to-r from-[#D99A5A] to-[#B87A3E] hover:from-[#E3A769] hover:to-[#C68749] transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap shrink-0"
              aria-label="Voir le panier de commande"
            >
              <ShoppingBag className="w-4 h-4 text-[#1A140F]" />
              <span className="hidden sm:inline">Click & Collect</span>
              <span className="sm:hidden">Panier</span>
              {cartCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-xs font-bold bg-[#14110E] text-[#E8A563] rounded-full tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#D1C2B4] hover:text-[#FAF6F0] transition-colors"
              aria-label="Ouvrir le menu de navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#181310] border-b border-[#2C241E] px-4 py-5 space-y-3">
            <a
              href="#savoir-faire"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D1C2B4] hover:text-[#FAF6F0] border-b border-[#261E18]"
            >
              Notre Savoir-Faire
            </a>
            <a
              href="#galerie"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D1C2B4] hover:text-[#FAF6F0] border-b border-[#261E18]"
            >
              Galerie Photos (4 spécialités)
            </a>
            <a
              href="#carte"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D1C2B4] hover:text-[#FAF6F0] border-b border-[#261E18]"
            >
              Le Menu & Tarifs
            </a>
            <a
              href="#sur-mesure"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D1C2B4] hover:text-[#FAF6F0] border-b border-[#261E18]"
            >
              Gâteaux Personnalisés
            </a>
            <a
              href="#fournil"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D1C2B4] hover:text-[#FAF6F0]"
            >
              Horaires & Visite
            </a>
          </div>
        )}
      </header>
    </>
  );
};
