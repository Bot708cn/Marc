import React from 'react';
import { X, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { GalleryPhoto } from '../types/bakery';

interface PhotoLightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onOrderCategory: (categoryName: string) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photo, onClose, onOrderCategory }) => {
  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#181310] text-[#EDE7E0] rounded-2xl overflow-hidden border border-[#3E3125] shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#14100E]/80 text-[#FAF6F0] hover:bg-[#C98A4B] transition-colors flex items-center justify-center cursor-pointer shadow-lg"
          aria-label="Fermer le zoom photo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large photo container */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[340px] md:min-h-[480px]">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-cover max-h-[550px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 left-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded bg-[#14100E]/85 backdrop-blur-md text-[#E6A96C] border border-[#3A2C20]">
              {photo.category}
            </span>
          </div>
        </div>

        {/* Story & Details column */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D5985C] font-semibold block mb-1">
                {photo.subtitle}
              </span>
              <h3 className="font-display text-2xl font-bold text-[#FAF6F0]">
                {photo.title}
              </h3>
            </div>

            <div className="w-12 h-0.5 bg-[#C98A4B]" />

            <p className="text-xs sm:text-sm text-[#C8B8A7] leading-relaxed">
              {photo.description}
            </p>

            <div className="p-4 rounded-xl bg-[#221A15] border border-[#382C22] space-y-1">
              <span className="text-[11px] text-[#A69483] block uppercase tracking-wider font-semibold">
                Tarif au Fournil
              </span>
              <span className="font-display text-xl font-bold text-[#E6A96C] tabular-nums">
                {photo.highlight}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#2E241D] flex flex-col gap-2">
            <button
              onClick={() => {
                onClose();
                onOrderCategory(photo.category);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#14100E] bg-gradient-to-r from-[#D79758] to-[#BA783A] hover:from-[#E3A667] hover:to-[#C68545] transition-all shadow-md cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Commander ces créations</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={onClose}
              className="text-xs text-[#9E8B7A] hover:text-[#FAF6F0] py-1 text-center"
            >
              Fermer la vue agrandie
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
