import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types/bakery';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCheckout: (orderDetails: {
    customerName: string;
    phone: string;
    pickupSlot: string;
    notes: string;
    items: CartItem[];
    total: number;
  }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupSlot, setPickupSlot] = useState("Aujourd'hui · 11h30 (Fournée de midi)");
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + (item.menuItem.price * item.quantity), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setFormError('Veuillez indiquer votre prénom ou nom pour le retrait.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Veuillez indiquer un numéro de téléphone pour le suivi SMS du retrait.');
      return;
    }
    setFormError('');
    onCheckout({
      customerName,
      phone,
      pickupSlot,
      notes,
      items,
      total
    });
  };

  const pickupSlots = [
    "Aujourd'hui · 11h30 (Fournée de midi)",
    "Aujourd'hui · 16h30 (Fournée du goûter)",
    "Aujourd'hui · 18h30 (Dernière fournée)",
    "Demain · 07h30 (Pain & viennoiseries du matin)",
    "Demain · 11h30 (Fournée de midi)"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FAF6F0] text-[#1F1813] h-full shadow-2xl flex flex-col border-l border-[#E0D3C1] animate-slide-left">
        
        {/* Header */}
        <div className="p-6 bg-[#181310] text-[#FAF6F0] border-b border-[#2C241E] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C98A4B] text-[#181310] flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-[#FAF6F0]">
                Votre Panier Fournil
              </h3>
              <span className="text-xs text-[#C98A4B]">
                {items.length} {items.length > 1 ? 'articles sélectionnés' : 'article sélectionné'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#BBAA99] hover:text-[#FAF6F0] hover:bg-[#2A211B] transition-colors"
            aria-label="Fermer le panier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-[#8A7664]">
              <div className="w-16 h-16 rounded-full bg-[#EFE5D4] flex items-center justify-center text-[#8A5826]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-[#1F1813] mb-1">
                  Votre panier est vide
                </h4>
                <p className="text-xs text-[#7A695B] max-w-xs">
                  Ajoutez une baguette de tradition croustillante, des viennoiseries au beurre AOP ou configurez votre gâteau d'anniversaire !
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#1A140F] bg-[#D79758] hover:bg-[#E3A667] transition-all cursor-pointer"
              >
                Découvrir la carte
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-white border border-[#E8DEC9] shadow-xs flex gap-3 relative group"
                >
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0 bg-[#F3ECE0]"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0 pr-6">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-sm text-[#1F1813] truncate">
                        {item.menuItem.name}
                      </h4>
                    </div>

                    {item.customization && (
                      <div className="mt-1 text-[11px] text-[#8A5826] bg-[#FFFBF5] p-1.5 rounded border border-[#F3E7D3] space-y-0.5">
                        <span className="block font-medium">
                          {item.customization.servings} parts · {item.customization.flavor}
                        </span>
                        {item.customization.inscription && (
                          <span className="block italic text-[#6A5747]">
                            « {item.customization.inscription} »
                          </span>
                        )}
                      </div>
                    )}

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#8A5826] tabular-nums">
                        {(item.menuItem.price * item.quantity).toFixed(2).replace('.', ',')} €
                      </span>

                      {!item.customization && (
                        <div className="flex items-center border border-[#DECBB4] rounded-md bg-[#FAF7F2]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-[#5C4D3F] hover:bg-[#EFE5D6]"
                            aria-label="Diminuer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#1F1813] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#5C4D3F] hover:bg-[#EFE5D6]"
                            aria-label="Augmenter"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="absolute top-3 right-3 text-[#B5A18E] hover:text-red-600 transition-colors"
                    aria-label="Supprimer l'article"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout Form */}
        {items.length > 0 && (
          <form onSubmit={handleSubmit} className="p-6 bg-white border-t border-[#E8DEC9] space-y-4">
            
            {/* Slot selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-[#8A5826] mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C98A4B]" />
                <span>Créneau de retrait au fournil</span>
              </label>
              <select
                value={pickupSlot}
                onChange={(e) => setPickupSlot(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-[#DECBB4] bg-[#FAF7F2] text-[#1F1813] focus:ring-1 focus:ring-[#C98A4B]"
              >
                {pickupSlots.map((slot, i) => (
                  <option key={i} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            {/* Customer coordinates */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Votre Nom / Prénom *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#DECBB4] bg-[#FAF7F2] text-[#1F1813] placeholder-[#9E8B7A] focus:ring-1 focus:ring-[#C98A4B]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Téléphone mobile *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#DECBB4] bg-[#FAF7F2] text-[#1F1813] placeholder-[#9E8B7A] focus:ring-1 focus:ring-[#C98A4B]"
                />
              </div>
            </div>

            {formError && (
              <p className="text-xs text-red-600 font-medium">
                {formError}
              </p>
            )}

            {/* Total and Submit */}
            <div className="pt-2 border-t border-[#F0E6D8] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#7A695B]">Total à régler au retrait :</span>
                <span className="block font-display text-2xl font-bold text-[#1F1813] tabular-nums">
                  {total.toFixed(2).replace('.', ',')} €
                </span>
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#1A140F] bg-gradient-to-r from-[#D79758] to-[#BA783A] hover:from-[#E3A667] hover:to-[#C68545] transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Valider la commande</span>
              </button>
            </div>

            <p className="text-[10px] text-center text-[#8C7A6B]">
              Paiement sans contact ou espèces directement en boutique lors du retrait.
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
