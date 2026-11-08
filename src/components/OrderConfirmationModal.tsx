import React from 'react';
import { CheckCircle2, Clock, MapPin, Printer, ArrowRight, X } from 'lucide-react';
import { CartItem } from '../types/bakery';
import { BAKERY_BRAND } from '../data/bakeryData';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: {
    orderNumber: string;
    customerName: string;
    phone: string;
    pickupSlot: string;
    notes: string;
    items: CartItem[];
    total: number;
    createdAt: string;
  } | null;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  onClose,
  order
}) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#FAF6F0] text-[#1F1813] rounded-2xl shadow-2xl border border-[#DFD1BD] overflow-hidden my-6 animate-scale-up">
        
        {/* Top ticket header */}
        <div className="bg-[#1D1713] text-[#FAF6F0] p-6 text-center relative border-b border-[#30251E]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#A89887] hover:text-[#FAF6F0] p-1.5 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-full bg-[#C98A4B] text-[#1D1713] mx-auto flex items-center justify-center mb-3 shadow-md">
            <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
          </div>

          <span className="text-[11px] uppercase tracking-widest text-[#E6A96C] font-semibold block mb-1">
            Commande Confirmée · Click & Collect
          </span>
          <h3 className="font-display text-2xl font-bold text-[#FAF6F0]">
            Merci, {order.customerName} !
          </h3>
          <p className="text-xs text-[#C2B2A3] mt-1">
            Votre commande porte le numéro <span className="font-mono font-bold text-[#E6A96C]">{order.orderNumber}</span>
          </p>
        </div>

        {/* Ticket body with decorative perforation styling */}
        <div className="p-6 sm:p-8 space-y-5">
          
          {/* Pickup highlights */}
          <div className="bg-white rounded-xl p-4 border border-[#E8DEC9] space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs text-[#8A5826] font-semibold uppercase tracking-wider">
              <Clock className="w-4 h-4 text-[#C98A4B]" />
              <span>Votre créneau de retrait</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#1F1813]">
              {order.pickupSlot}
            </p>

            <div className="pt-2 border-t border-[#F2EAE0] flex items-start gap-2.5 text-xs text-[#635345]">
              <MapPin className="w-4 h-4 text-[#C98A4B] shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-[#1F1813]">{BAKERY_BRAND.name}</span>
                <span className="block text-[#7E6C5C]">{BAKERY_BRAND.address}</span>
              </div>
            </div>
          </div>

          {/* Ordered items breakdown */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#8A5826] mb-2.5">
              Détail de votre réservation
            </h4>
            <div className="space-y-2 border-y border-[#E8DEC9] py-3 text-xs sm:text-sm">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-2">
                  <div>
                    <span className="font-medium text-[#1F1813]">
                      {item.quantity}x {item.menuItem.name}
                    </span>
                    {item.customization && (
                      <span className="block text-[11px] text-[#8A5826] italic">
                        {item.customization.servings} parts · {item.customization.flavor}
                        {item.customization.inscription ? ` (« ${item.customization.inscription} »)` : ''}
                      </span>
                    )}
                  </div>
                  <span className="font-semibold text-[#1F1813] tabular-nums shrink-0">
                    {(item.menuItem.price * item.quantity).toFixed(2).replace('.', ',')} €
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex justify-between items-center font-display text-lg font-bold text-[#1F1813]">
              <span>Total à régler sur place :</span>
              <span className="tabular-nums text-[#8A5826]">
                {order.total.toFixed(2).replace('.', ',')} €
              </span>
            </div>
          </div>

          {/* Instructions note */}
          <div className="p-3 rounded-lg bg-[#F3ECE1] border border-[#E0D3C1] text-xs text-[#6A5A4D]">
            <p className="leading-relaxed">
              👉 <strong>Au comptoir :</strong> Présentez simplement votre nom ou le numéro <strong>{order.orderNumber}</strong>. Vos baguettes et douceurs seront déjà emballées avec soin pour vous éviter toute attente !
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.print()}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#D5C2A5] bg-white text-xs font-semibold text-[#5A493B] hover:bg-[#F7F0E6] transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer le reçu</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-[#1A140F] bg-[#D79758] hover:bg-[#E3A667] transition-all cursor-pointer shadow-md"
            >
              <span>Terminer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
