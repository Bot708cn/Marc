import React from 'react';
import { ArrowRight, ArrowDown, Award, Sparkles, Flame } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenCakeConfigurator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenCakeConfigurator }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#120F0D] text-[#EDE7E0] pt-8 pb-12">
      {/* Ambient warm glow backgrounds inspired by Photo 3 */}
      <div 
        className="absolute top-0 right-0 w-3/4 h-full pointer-events-none opacity-25 blur-3xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C98A4B] via-[#7B4D24] to-transparent"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-10 w-96 h-96 pointer-events-none opacity-15 blur-3xl bg-[#D99A5A]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (strictly inspired by Photo 3 "Smiles That Last a Lifetime") */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Subtle text kicker (unboxed, no pill) */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#D5985C] font-semibold">
              <span className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#E69F53]" />
                Fournil Artisanal & Pâtisserie Fine
              </span>
              <span aria-hidden="true" className="text-[#5E4D3E]">·</span>
              <span className="text-[#BBA896]">Façonné Main à Paris</span>
            </div>

            {/* Display headline in high-contrast luxury serif */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold leading-[1.08] text-[#FAF6F0] tracking-tight">
              Le Goût Authentique <br />
              <span className="italic font-normal font-editorial text-[#E6A96C]">
                du Pain d'Antan.
              </span>
            </h1>

            {/* Prose description giving warmth and inviting visitors */}
            <p className="text-base sm:text-lg text-[#C8B8A7] max-w-xl font-normal leading-relaxed">
              Dès 4 heures du matin, notre fournil s'éveille. Levain naturel vivant, farines de meule 100% françaises et fermentation lente de 24 heures pour vous offrir des baguettes dorées, des viennoiseries pur beurre et des gâteaux d'exception.
            </p>

            {/* Action buttons inspired by Photo 3 caramel button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="group flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-[#1A130E] bg-gradient-to-r from-[#D79758] to-[#BA783A] hover:from-[#E3A667] hover:to-[#C68545] transition-all shadow-lg hover:shadow-[#C98A4B]/20 active:scale-98 cursor-pointer"
              >
                <span>Commander en Click & Collect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCakeConfigurator}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-[#EDE7E0] border border-[#4A3D31] hover:border-[#C98A4B] hover:bg-[#201A15] transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D79758]" />
                <span>Personnaliser un Gâteau</span>
              </button>
            </div>

            {/* Quality indicators with unboxed typographic separators */}
            <div className="pt-6 border-t border-[#261E17] w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#B3A08E]">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D79758]" />
                <span>100% Levain Naturel</span>
              </div>
              <span aria-hidden="true" className="text-[#3D3025]">·</span>
              <span>Farines Label Rouge T65</span>
              <span aria-hidden="true" className="text-[#3D3025]">·</span>
              <span>Beurre AOP Charentes-Poitou</span>
              <span aria-hidden="true" className="text-[#3D3025]">·</span>
              <span>Sans additifs ni conservateurs</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (Authentic Golden Baguettes with warm spotlight) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#3A2E24] shadow-2xl bg-[#1A1512] group">
              {/* Image with subtle zoom on hover */}
              <div className="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/aistudio/1794130968568_0019e159.jpg"
                  alt="Baguettes de tradition croustillantes au fournil"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gradient overlay for rich warm mood */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-[#14110E]/20 to-transparent pointer-events-none" />

              {/* Floating artisan caption badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#181310]/90 backdrop-blur-md border border-[#3D3126] flex items-center justify-between">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#D79758] font-semibold">
                    Fournée du Matin
                  </span>
                  <span className="font-display text-base text-[#FAF6F0] font-medium">
                    Baguette de Tradition · 1,20 €
                  </span>
                </div>
                <button
                  onClick={onExploreMenu}
                  className="text-xs px-3 py-1.5 rounded bg-[#2D231B] hover:bg-[#3D3025] text-[#FAF6F0] border border-[#524132] transition-colors"
                >
                  Ajouter
                </button>
              </div>

            </div>

            {/* Decorative background framed shadow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C98A4B]/20 to-[#804F26]/10 rounded-2xl -z-10 blur-xl" />
          </div>

        </div>
      </div>

      {/* Scroll indicator directly inspired by Photo 3 "↓ SCROLL TO EXPLORE" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <a 
          href="#savoir-faire" 
          className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#A69382] hover:text-[#D79758] transition-colors group"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#D79758] group-hover:translate-y-1 transition-transform" />
          <span>Découvrir notre savoir-faire & nos spécialités</span>
        </a>
      </div>

    </section>
  );
};
