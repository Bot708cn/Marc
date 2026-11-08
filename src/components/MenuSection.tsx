import React, { useState } from 'react';
import { Plus, Minus, Check, ShoppingBag, Sparkles, Flame, Clock } from 'lucide-react';
import { MENU_ITEMS } from '../data/bakeryData';
import { MenuItem } from '../types/bakery';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onOpenCakeConfigurator: () => void;
  activeCategoryFilter: string;
  setActiveCategoryFilter: (category: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenCakeConfigurator,
  activeCategoryFilter,
  setActiveCategoryFilter
}) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const getQuantity = (id: string) => quantities[id] || 1;

  const handleUpdateQuantity = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 1;
      const next = Math.max(1, Math.min(20, current + delta));
      return { ...prev, [id]: next };
    });
  };

  const handleAdd = (item: MenuItem) => {
    if (item.isCustomizable) {
      onOpenCakeConfigurator();
      return;
    }
    const qty = getQuantity(item.id);
    onAddToCart(item, qty);
    setAddedItemNotice(`${qty}x ${item.name} ajouté au panier`);
    setTimeout(() => setAddedItemNotice(null), 3000);
  };

  const filterTabs = [
    { id: 'all', label: 'Toute la Carte' },
    { id: 'pain', label: 'Baguettes & Pains' },
    { id: 'viennoiserie', label: 'Viennoiseries' },
    { id: 'patisserie', label: 'Pâtisseries' },
    { id: 'evenement', label: 'Gâteaux d’Anniversaire' }
  ];

  const filteredItems = activeCategoryFilter === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategoryFilter);

  return (
    <section id="carte" className="py-24 bg-[#FAF6F0] text-[#1D1713] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A66E38] font-bold">
            La Carte & Les Prix
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[#1F1813] tracking-tight">
            Les Gourmandises du Jour
          </h2>
          <div className="w-12 h-0.5 bg-[#C98A4B] mx-auto mt-4 mb-2" />
          <p className="text-sm sm:text-base text-[#615245] leading-relaxed pt-2">
            Des tarifs justes et transparents pour des ingrédients 100% nobles. Commandez en ligne et retirez vos produits tout chauds à l'heure de votre choix.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map(tab => {
            const isActive = activeCategoryFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryFilter(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1D1713] text-[#FAF6F0] shadow-sm'
                    : 'bg-[#EDE4D5]/80 hover:bg-[#E2D5C3] text-[#524335]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Temporary Added notification */}
        {addedItemNotice && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#1D1713] text-[#FAF6F0] border border-[#C98A4B] px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in">
            <div className="w-6 h-6 rounded-full bg-[#C98A4B] text-[#1D1713] flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="text-sm font-medium">{addedItemNotice}</span>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => {
            const qty = getQuantity(item.id);
            return (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E8DFC9] hover:border-[#C98A4B] shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image showcase */}
                <div className="relative h-60 overflow-hidden bg-[#F3ECE0]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#1A1410]/80 backdrop-blur-sm text-[#F0C392] border border-[#3E2E22]">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {item.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF6F0] text-[#8A5826] border border-[#DFCBB5] shadow-xs">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#14100E]/90 backdrop-blur-sm border border-[#3D3025] text-[#FAF6F0] text-sm font-bold tabular-nums">
                    {item.formattedPrice}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display text-xl font-semibold text-[#1F1813] group-hover:text-[#9E652E] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#615245] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.ingredients && (
                      <div className="flex flex-wrap gap-1.5 mb-6 text-[11px] text-[#7E6C5C]">
                        {item.ingredients.map((ing, i) => (
                          <span key={i} className="inline-flex items-center">
                            {ing}
                            {i < item.ingredients!.length - 1 && <span className="mx-1 text-[#C4B2A0]">·</span>}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions & Price bar */}
                  <div className="pt-4 border-t border-[#F0E6D8] flex items-center justify-between gap-4">
                    {item.isCustomizable ? (
                      <button
                        onClick={onOpenCakeConfigurator}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-[#FAF6F0] bg-[#1F1813] hover:bg-[#8A5826] transition-colors cursor-pointer shadow-sm"
                      >
                        <Sparkles className="w-4 h-4 text-[#D79758]" />
                        <span>Personnaliser ce gâteau</span>
                      </button>
                    ) : (
                      <>
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-[#DECBB4] rounded-lg bg-[#FAF7F2] p-0.5">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center rounded text-[#5C4D3F] hover:bg-[#EFE5D6] transition-colors cursor-pointer"
                            aria-label={`Diminuer quantité ${item.name}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#1F1813] tabular-nums">
                            {qty}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center rounded text-[#5C4D3F] hover:bg-[#EFE5D6] transition-colors cursor-pointer"
                            aria-label={`Augmenter quantité ${item.name}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Add to Basket button */}
                        <button
                          onClick={() => handleAdd(item)}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-[#1A140F] bg-gradient-to-r from-[#D79758] to-[#BA783A] hover:from-[#E3A667] hover:to-[#C68545] transition-all shadow-sm hover:shadow-md cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Ajouter ({((item.price * qty)).toFixed(2).replace('.', ',')} €)</span>
                        </button>
                      </>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Breakfast / Morning Pack Promo banner */}
        <div className="mt-16 bg-[#1F1915] text-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#3A2F25] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C98A4B]/20 border border-[#C98A4B]/40 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-[#E6A96C]" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E6A96C]">
                Formule Réveil du Fournil
              </span>
              <h4 className="font-display text-lg sm:text-xl font-semibold">
                1 Baguette Tradition + 2 Croissants + 2 Pains au Chocolat
              </h4>
              <p className="text-xs sm:text-sm text-[#BBA998] mt-0.5">
                Pour bien démarrer la journée en famille ou au bureau : seulement 5,50 € (au lieu de 6,00 €).
              </p>
            </div>
          </div>
          
          <button
            onClick={() => {
              // Add bundle items: 1 baguette, 2 croissants, 2 pains au chocolat
              const b = MENU_ITEMS.find(m => m.id === 'baguette-tradition')!;
              const c = MENU_ITEMS.find(m => m.id === 'croissant-beurre')!;
              const p = MENU_ITEMS.find(m => m.id === 'pain-au-chocolat')!;
              onAddToCart(b, 1);
              onAddToCart(c, 2);
              onAddToCart(p, 2);
              setAddedItemNotice("Formule Réveil ajoutée au panier !");
              setTimeout(() => setAddedItemNotice(null), 3000);
            }}
            className="w-full lg:w-auto px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-[#1A140F] bg-gradient-to-r from-[#D79758] to-[#BA783A] hover:from-[#E3A667] hover:to-[#C68545] transition-all shadow-md shrink-0 cursor-pointer"
          >
            Ajouter la Formule (5,50 €)
          </button>
        </div>

      </div>
    </section>
  );
};
