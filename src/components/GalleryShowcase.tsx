import React from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/bakeryData';
import { GalleryPhoto } from '../types/bakery';

interface GalleryShowcaseProps {
  onSelectPhoto: (photo: GalleryPhoto) => void;
  onExploreMenu: () => void;
}

export const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({ onSelectPhoto, onExploreMenu }) => {
  return (
    <section id="galerie" className="py-24 bg-[#14100E] text-[#EDE7E0] border-t border-[#261E18] relative overflow-hidden">
      {/* Warm ambient radial backdrop */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-15 blur-[120px] bg-[#C98A4B]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header directly inspired by Photo 3 "SMILE TRANSFORMATIONS / Real Smiles. Real Results." */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D5985C] font-semibold">
            Galerie du Fournil
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[#FAF6F0] tracking-tight">
            L'Artisanat Vivant. De Belles Fournées.
          </h2>
          <div className="w-12 h-0.5 bg-[#C98A4B] mx-auto mt-4 mb-2" />
          <p className="text-sm sm:text-base text-[#B3A190] leading-relaxed pt-2">
            Des clichés authentiques pris directement dans notre atelier : baguettes croustillantes, viennoiseries dorées, tartes fines et pièces montées d'exception.
          </p>
        </div>

        {/* 4 Cards Grid directly matching Photo 3 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_PHOTOS.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => onSelectPhoto(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#1E1814] border border-[#332820] hover:border-[#C98A4B]/80 transition-all duration-500 shadow-xl cursor-pointer flex flex-col h-[420px]"
              >
                {/* Photo container with zoom on hover */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle dark gradient scrim at the bottom for typography legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-[#14100E]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  {/* Top category label */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#14100E]/80 backdrop-blur-sm text-[#E2A669] border border-[#3E2E22]">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover icon prompt */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#C98A4B] text-[#14100E] flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10 space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#C98A4B] font-medium block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-[#FAF6F0] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#BFB0A1] line-clamp-2 pt-1 font-light">
                      {item.description}
                    </p>
                    <div className="pt-3 flex items-center justify-between text-xs border-t border-[#31251D] mt-2">
                      <span className="font-semibold text-[#E6A96C] tabular-nums">
                        {item.highlight}
                      </span>
                      <span className="text-[#A49281] group-hover:text-[#FAF6F0] transition-colors flex items-center gap-1 font-medium">
                        <span>Agrandir</span>
                        <Sparkles className="w-3 h-3 text-[#D5985C]" />
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom invitation banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#211A15] to-[#1A1410] border border-[#3A2E24] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-lg sm:text-xl text-[#FAF6F0] font-semibold">
              Envie de goûter à ces créations artisanales ?
            </h4>
            <p className="text-xs sm:text-sm text-[#B3A190]">
              Réservez vos baguettes et viennoiseries en ligne pour un retrait rapide sans faire la queue.
            </p>
          </div>
          <button
            onClick={onExploreMenu}
            className="px-6 py-3 rounded-lg text-sm font-semibold text-[#16110D] bg-[#D79758] hover:bg-[#E3A667] transition-all whitespace-nowrap shadow-md cursor-pointer"
          >
            Consulter les tarifs & commander
          </button>
        </div>

      </div>
    </section>
  );
};
