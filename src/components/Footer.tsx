import React from 'react';
import { BAKERY_BRAND } from '../data/bakeryData';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0B0A] text-[#EDE7E0] border-t border-[#231A14] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#211914]">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C98A4B]/40 bg-[#FAF6F0] p-0.5">
                <img
                  src={BAKERY_BRAND.sealImage}
                  alt="The Wild Knead Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-wide text-[#FAF6F0]">
                {BAKERY_BRAND.name}
              </span>
            </div>
            <p className="text-xs text-[#A89685] leading-relaxed">
              Boulangerie et pâtisserie artisanale d'exception. Pains au levain naturel vivant, farines françaises sélectionnées et viennoiseries pur beurre façonnées chaque jour.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D5985C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#C2B2A3]">
              <li><a href="#savoir-faire" className="hover:text-[#FAF6F0] transition-colors">Notre Savoir-Faire</a></li>
              <li><a href="#galerie" className="hover:text-[#FAF6F0] transition-colors">Galerie des 4 Métiers</a></li>
              <li><a href="#carte" className="hover:text-[#FAF6F0] transition-colors">La Carte & Tarifs</a></li>
              <li><a href="#sur-mesure" className="hover:text-[#FAF6F0] transition-colors">Gâteaux d'Anniversaire</a></li>
              <li><a href="#fournil" className="hover:text-[#FAF6F0] transition-colors">Horaires & Localisation</a></li>
            </ul>
          </div>

          {/* Opening hours summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D5985C]">
              Le Fournil
            </h4>
            <div className="space-y-1.5 text-xs text-[#C2B2A3]">
              <p><strong className="text-[#FAF6F0]">Mardi - Samedi :</strong> 06h30 – 19h30</p>
              <p><strong className="text-[#FAF6F0]">Dimanche :</strong> 07h00 – 13h30</p>
              <p className="text-[#7F6E5F]">Lundi : Fermeture hebdomadaire</p>
              <p className="pt-2 text-[11px] text-[#D5985C]">Fournées chaudes à 06h45, 11h30, 16h30 et 18h00</p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D5985C]">
              Contact & Retrait
            </h4>
            <div className="space-y-1 text-xs text-[#C2B2A3]">
              <p className="text-[#FAF6F0] font-medium">{BAKERY_BRAND.address}</p>
              <p className="text-[#8F7E6F]">{BAKERY_BRAND.metro}</p>
              <p className="pt-2">Tél : <a href={`tel:${BAKERY_BRAND.phone.replace(/\s+/g, '')}`} className="text-[#D5985C] hover:underline">{BAKERY_BRAND.phone}</a></p>
              <p>Email : <a href={`mailto:${BAKERY_BRAND.email}`} className="text-[#D5985C] hover:underline">{BAKERY_BRAND.email}</a></p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7F6E5F] gap-4">
          <p>© {new Date().getFullYear()} {BAKERY_BRAND.name} · Tous droits réservés.</p>
          <p className="flex items-center gap-1.5">
            <span>Pétri avec passion et amour du bon pain</span>
            <Heart className="w-3.5 h-3.5 text-[#C98A4B] fill-[#C98A4B]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
