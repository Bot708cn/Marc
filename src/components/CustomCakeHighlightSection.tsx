import React from 'react';
import { Sparkles, Calendar, Heart, ArrowRight } from 'lucide-react';

interface CustomCakeHighlightSectionProps {
  onOpenCakeConfigurator: () => void;
}

export const CustomCakeHighlightSection: React.FC<CustomCakeHighlightSectionProps> = ({
  onOpenCakeConfigurator
}) => {
  return (
    <section id="sur-mesure" className="py-24 bg-[#181310] text-[#EDE7E0] border-t border-[#2D231B] relative overflow-hidden">
      {/* Warm ambient light */}
      <div 
        className="absolute top-1/3 right-10 w-96 h-96 pointer-events-none opacity-20 blur-3xl bg-[#E6A96C]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual of the 3-tier birthday cake */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#3E3125] bg-[#14100E] shadow-2xl group">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/aistudio/1794130972805_f3964ebc.jpg"
                  alt="Gâteau d'anniversaire floral sur-mesure"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-[#14100E]/20 to-transparent pointer-events-none" />

              {/* Badge overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#181310]/90 backdrop-blur-md border border-[#3E2F23] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#E6A96C] font-semibold block">
                    Modèle Signature Réalisé au Fournil
                  </span>
                  <span className="font-display text-base text-[#FAF6F0] font-semibold">
                    Pièce Fleurie & Feuille d'Or
                  </span>
                </div>
                <span className="text-xs font-bold text-[#E6A96C] tabular-nums bg-[#2A2018] px-3 py-1.5 rounded border border-[#4D3A2C]">
                  Dès 25 €
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial story & configurator trigger */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D5985C] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E69F53]" />
              Haute Pâtisserie Festive
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF6F0] leading-tight">
              Pour Vos Plus Beaux Jours, <br />
              <span className="italic font-editorial text-[#E6A96C]">
                Des Gâteaux Qui Marquent les Esprits.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#C2B2A3] leading-relaxed">
              Chaque anniversaire, baptême ou mariage mérite une création unique. Nos pâtissiers élaborent avec vous le gâteau rêvé : biscuit aéré, ganache onctueuse peu sucrée, bouquets floraux naturels comestibles et calligraphie personnalisée.
            </p>

            {/* Feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#1E1713] border border-[#33261D]">
                <strong className="block text-sm text-[#FAF6F0] font-semibold mb-1">
                  🌸 Décor Floral & Dorures
                </strong>
                <p className="text-xs text-[#A89685]">
                  Fleurs fraîches non traitées sélectionnées avec goût et éclats de feuille d'or comestible.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1E1713] border border-[#33261D]">
                <strong className="block text-sm text-[#FAF6F0] font-semibold mb-1">
                  🍓 Saveurs 100% Personnalisables
                </strong>
                <p className="text-xs text-[#A89685]">
                  Vanille Bourbon, Chocolat Valrhona grand cru, framboises fraîches, pistache d'Iran ou praliné maison.
                </p>
              </div>
            </div>

            {/* CTA and Price note */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenCakeConfigurator}
                className="group flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg text-sm font-semibold text-[#14100E] bg-gradient-to-r from-[#D79758] to-[#BA783A] hover:from-[#E3A667] hover:to-[#C68545] transition-all shadow-lg active:scale-98 cursor-pointer"
              >
                <span>Personnaliser mon Gâteau (Dès 25 €)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#A69483]">
                <Calendar className="w-4 h-4 text-[#D5985C]" />
                <span>Réservation conseillée 48h à l'avance</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
