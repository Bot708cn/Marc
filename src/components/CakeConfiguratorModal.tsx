import React, { useState } from 'react';
import { X, Sparkles, Check, Heart, Calendar } from 'lucide-react';
import { MenuItem } from '../types/bakery';

interface CakeConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomCake: (item: MenuItem, customization: {
    servings: number;
    flavor: string;
    inscription: string;
    specialNotes: string;
    price: number;
  }) => void;
  cakeMenuItem: MenuItem;
}

export const CakeConfiguratorModal: React.FC<CakeConfiguratorModalProps> = ({
  isOpen,
  onClose,
  onAddCustomCake,
  cakeMenuItem
}) => {
  const [servings, setServings] = useState<number>(6);
  const [flavor, setFlavor] = useState<string>("Vanille Bourbon & Framboises fraîches");
  const [style, setStyle] = useState<string>("Fleurs naturelles & feuille d'or (comme en photo)");
  const [inscription, setInscription] = useState<string>("Joyeux Anniversaire");
  const [pickupDate, setPickupDate] = useState<string>("");
  const [specialNotes, setSpecialNotes] = useState<string>("");

  if (!isOpen) return null;

  // Pricing formula starting from 25 € as requested by the user
  const servingTiers: Record<number, { label: string; price: number; tiers: string }> = {
    6: { label: "6 parts (format intime)", price: 25.00, tiers: "1 étage" },
    10: { label: "10 parts (famille & amis)", price: 42.00, tiers: "1 étage généreux" },
    15: { label: "15 parts (grande fête)", price: 65.00, tiers: "2 étages" },
    25: { label: "25 parts (pièce montée d'exception)", price: 110.00, tiers: "3 étages fleuris" }
  };

  const currentPrice = servingTiers[servings]?.price || 25.00;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCustomCake(
      {
        ...cakeMenuItem,
        price: currentPrice,
        formattedPrice: `${currentPrice.toFixed(2).replace('.', ',')} €`
      },
      {
        servings,
        flavor,
        inscription,
        specialNotes: `Décor: ${style} | Date souhaitée: ${pickupDate || 'À confirmer'} | Remarques: ${specialNotes || 'Aucune'}`,
        price: currentPrice
      }
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] text-[#1F1813] rounded-2xl shadow-2xl border border-[#E0D3C1] overflow-hidden my-8 animate-scale-up">
        
        {/* Header with photo banner preview */}
        <div className="relative h-44 bg-[#1A1410] overflow-hidden">
          <img
            src="/assets/aistudio/1794130972805_f3964ebc.jpg"
            alt="Gâteau d'anniversaire à étages"
            className="w-full h-full object-cover object-center opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-[#14100E]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#14100E]/80 text-[#FAF6F0] hover:bg-[#C98A4B] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-[#E6A96C] font-semibold block mb-1">
              Atelier Sur-Mesure
            </span>
            <h3 className="font-display text-2xl font-semibold text-[#FAF6F0]">
              Configurez Votre Gâteau d'Anniversaire
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleConfirm} className="p-6 sm:p-8 space-y-6">
          
          {/* Servings & Size */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#8A5826] mb-2">
              1. Nombre de convives & format (à partir de 25 €)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(servingTiers).map(([key, value]) => {
                const count = parseInt(key, 10);
                const isSelected = servings === count;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setServings(count)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#C98A4B] bg-[#FFFBF5] shadow-xs ring-1 ring-[#C98A4B]'
                        : 'border-[#E8DEC9] bg-white hover:border-[#D5C2A5]'
                    }`}
                  >
                    <div>
                      <span className="block font-semibold text-sm text-[#1F1813]">
                        {value.label}
                      </span>
                      <span className="text-xs text-[#7A695B]">
                        {value.tiers}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-[#8A5826] tabular-nums">
                      {value.price.toFixed(2).replace('.', ',')} €
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Flavor Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#8A5826] mb-2">
              2. Saveurs & Parfum du biscuit
            </label>
            <select
              value={flavor}
              onChange={(e) => setFlavor(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#DFD1BD] bg-white text-sm text-[#1F1813] focus:outline-none focus:ring-2 focus:ring-[#C98A4B]"
            >
              <option value="Vanille Bourbon & Framboises fraîches">
                Vanille Bourbon de Madagascar & Framboises fraîches (Signature)
              </option>
              <option value="Chocolat Valrhona 64% & Noisettes grillées">
                Moelleux Chocolat Noir Grand Cru & Croustillant praliné
              </option>
              <option value="Pistache d'Iran & Fleur d'Oranger">
                Biscuit moelleux pistache & crème légère fleur d'oranger
              </option>
              <option value="Caramel Beurre Salé & Pommes rôties">
                Pommes fondantes confites & ganache montée au caramel beurre salé
              </option>
            </select>
          </div>

          {/* Personalized Message on the cake */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#8A5826] mb-2">
              3. Inscription personnalisée sur le gâteau
            </label>
            <input
              type="text"
              value={inscription}
              onChange={(e) => setInscription(e.target.value)}
              placeholder="Ex: Joyeux Anniversaire Sarah !"
              maxLength={40}
              className="w-full px-4 py-3 rounded-xl border border-[#DFD1BD] bg-white text-sm text-[#1F1813] focus:outline-none focus:ring-2 focus:ring-[#C98A4B]"
            />
            <span className="text-[11px] text-[#7A695B] mt-1 block">
              Calligraphiée à la main en chocolat fin ou écriture dorée.
            </span>
          </div>

          {/* Date needed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#8A5826] mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C98A4B]" />
                <span>Date de retrait souhaitée</span>
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DFD1BD] bg-white text-sm text-[#1F1813] focus:outline-none focus:ring-2 focus:ring-[#C98A4B]"
              />
              <span className="text-[10px] text-[#7A695B] mt-1 block">
                Prévoir 48h de délai pour le modelage artisanal.
              </span>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#8A5826] mb-2">
                Style de décoration
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DFD1BD] bg-white text-sm text-[#1F1813] focus:outline-none focus:ring-2 focus:ring-[#C98A4B]"
              >
                <option value="Fleurs naturelles & feuille d'or (comme en photo)">
                  Fleurs naturelles fraîches & feuille d'or (Photo)
                </option>
                <option value="Épuré & Couronne de fruits rouges">
                  Épuré & Couronne de fruits rouges
                </option>
                <option value="Gourmandise chocolat & macarons assortis">
                  Chocolat festif & macarons assortis
                </option>
              </select>
            </div>
          </div>

          {/* Pricing bar & Submit */}
          <div className="pt-4 border-t border-[#E8DEC9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="block text-xs text-[#7A695B]">Total de votre création :</span>
              <span className="font-display text-2xl font-bold text-[#1F1813] tabular-nums">
                {currentPrice.toFixed(2).replace('.', ',')} €
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 rounded-xl text-sm font-medium text-[#6B5A4B] hover:bg-[#EFE5D4] transition-colors"
              >
                Annuler
              </button>

              <button
                type="submit"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-[#1A130E] bg-gradient-to-r from-[#D79758] to-[#BA783A] hover:from-[#E3A667] hover:to-[#C68545] transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#1A130E]" />
                <span>Ajouter la Création au Panier</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
