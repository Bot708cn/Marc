import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Flame, Send, Check } from 'lucide-react';
import { BAKERY_BRAND, HOT_BAKE_SCHEDULE } from '../data/bakeryData';

interface BakeryVisitSectionProps {
  onOpenCakeConfigurator: () => void;
}

export const BakeryVisitSection: React.FC<BakeryVisitSectionProps> = ({ onOpenCakeConfigurator }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 2500);
  };

  return (
    <section id="fournil" className="py-24 bg-[#120F0D] text-[#EDE7E0] border-t border-[#292019] relative overflow-hidden">
      {/* Warm ambient atmosphere */}
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-20 blur-3xl bg-[#C98A4B]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Feature Banner directly inspired by Photo 3 bottom section ("Your Smile, Our Passion") */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1B1512] via-[#211A15] to-[#181310] border border-[#3A2E24] p-8 sm:p-12 lg:p-16 mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D5985C] font-semibold flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#E69F53]" />
                L'Artisanat au Quotidien
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF6F0] leading-tight">
                L'Odeur du Pain Chaud, <br />
                <span className="italic font-editorial text-[#E6A96C]">
                  Le Plaisir de Vous Accueillir.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#C2B2A3] leading-relaxed max-w-xl">
                Dès que vous franchissez le seuil, l'ambiance chaleureuse de notre fournil vous enveloppe. Le craquement de la croûte sous la main, les viennoiseries encore tièdes étalées sur les grilles, et le sourire de notre équipe dévouée.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#carte"
                  className="px-6 py-3.5 rounded-lg text-sm font-semibold text-[#1A140F] bg-gradient-to-r from-[#D79758] to-[#BA783A] hover:from-[#E3A667] hover:to-[#C68545] transition-all shadow-md active:scale-98"
                >
                  Commander en Click & Collect
                </a>
                <button
                  onClick={onOpenCakeConfigurator}
                  className="px-6 py-3.5 rounded-lg text-sm font-medium text-[#FAF6F0] border border-[#4E3E31] hover:border-[#C98A4B] hover:bg-[#2A211A] transition-colors"
                >
                  Devis Événement / Gâteau
                </button>
              </div>
            </div>

            {/* Right side: Hot Baking Oven Schedule card */}
            <div className="lg:col-span-5 bg-[#14100E]/85 backdrop-blur-md rounded-2xl p-6 border border-[#3E3127] shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-[#2C231B] mb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#E69F53]" />
                  <h3 className="font-display text-base font-semibold text-[#FAF6F0]">
                    Horaires des Fournées Chaudes
                  </h3>
                </div>
                <span className="text-[11px] text-[#A69382] font-mono">
                  Sole de pierre
                </span>
              </div>

              <div className="space-y-3">
                {HOT_BAKE_SCHEDULE.map((slot, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl flex items-center justify-between text-xs transition-colors ${
                      slot.status === 'next'
                        ? 'bg-[#2E231B] border border-[#D5985C]/60 text-[#FAF6F0]'
                        : 'bg-[#191411] border border-[#2B2119] text-[#A69483]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono font-bold text-sm tabular-nums ${
                        slot.status === 'next' ? 'text-[#E6A96C]' : 'text-[#8A7767]'
                      }`}>
                        {slot.time}
                      </span>
                      <span className="font-medium">
                        {slot.product}
                      </span>
                    </div>

                    {slot.status === 'next' && (
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#C98A4B] text-[#14100E]">
                        Prochaine
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#8C7A6B] mt-4 text-center">
                🌾 Du pain tout juste sorti du four 4 fois par jour.
              </p>
            </div>

          </div>
        </div>

        {/* Practical info & Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Hours & Coordinates */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D5985C] font-semibold block mb-2">
                Informations Pratiques
              </span>
              <h3 className="font-display text-2xl font-semibold text-[#FAF6F0]">
                Venez Nous Rendre Visite
              </h3>
            </div>

            <div className="space-y-4 text-sm text-[#C8B8A7]">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1A1411] border border-[#2E241D]">
                <MapPin className="w-5 h-5 text-[#C98A4B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FAF6F0] font-semibold">{BAKERY_BRAND.name}</strong>
                  <span>{BAKERY_BRAND.address}</span>
                  <span className="block text-xs text-[#8F7D6D] mt-0.5">{BAKERY_BRAND.metro}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1A1411] border border-[#2E241D]">
                <Clock className="w-5 h-5 text-[#C98A4B] shrink-0 mt-0.5" />
                <div className="w-full">
                  <strong className="block text-[#FAF6F0] font-semibold mb-1">Horaires d'Ouverture</strong>
                  <div className="space-y-1 text-xs">
                    {BAKERY_BRAND.openingHours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center py-0.5">
                        <span className={h.isHighlight ? 'text-[#FAF6F0] font-medium' : 'text-[#A69382]'}>
                          {h.days}
                        </span>
                        <span className={`font-mono tabular-nums ${h.isHighlight ? 'text-[#E6A96C] font-semibold' : 'text-[#8F7D6D]'}`}>
                          {h.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href={`tel:${BAKERY_BRAND.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#1A1411] border border-[#2E241D] hover:border-[#C98A4B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C98A4B]" />
                  <div>
                    <span className="block text-[11px] text-[#8F7D6D] uppercase">Téléphone Fournil</span>
                    <span className="font-semibold text-xs text-[#FAF6F0]">{BAKERY_BRAND.phone}</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${BAKERY_BRAND.email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#1A1411] border border-[#2E241D] hover:border-[#C98A4B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C98A4B]" />
                  <div>
                    <span className="block text-[11px] text-[#8F7D6D] uppercase">Courriel</span>
                    <span className="font-semibold text-xs text-[#FAF6F0]">{BAKERY_BRAND.email}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Custom Order Form */}
          <div className="lg:col-span-6 bg-[#1A1411] rounded-2xl p-6 sm:p-8 border border-[#30261F] flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D5985C] font-semibold block mb-1">
                Une question ou commande spéciale ?
              </span>
              <h3 className="font-display text-xl font-semibold text-[#FAF6F0] mb-2">
                Écrivez à Nos Artisans
              </h3>
              <p className="text-xs text-[#A89685] mb-6">
                Pour un devis traiteur d'entreprise, un anniversaire de mariage ou une demande particulière, notre chef boulanger vous répond en moins de 24h.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#261E18] border border-[#C98A4B] text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#C98A4B] text-[#14100E] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-[#FAF6F0]">
                    Message bien reçu !
                  </h4>
                  <p className="text-xs text-[#C8B8A7]">
                    Merci beaucoup. Notre artisan vous recontactera très rapidement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A69382] mb-1">
                        Votre Nom
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Ex: Jean Dupont"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#382C22] bg-[#14100E] text-xs text-[#FAF6F0] placeholder-[#6D5D4E] focus:outline-none focus:border-[#C98A4B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A69382] mb-1">
                        Votre Email
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="jean.dupont@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#382C22] bg-[#14100E] text-xs text-[#FAF6F0] placeholder-[#6D5D4E] focus:outline-none focus:border-[#C98A4B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#A69382] mb-1">
                      Votre Message ou Demande Particulière
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Ex: Bonjour, je souhaiterais réserver 30 viennoiseries pour une réunion d'équipe vendredi matin..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#382C22] bg-[#14100E] text-xs text-[#FAF6F0] placeholder-[#6D5D4E] focus:outline-none focus:border-[#C98A4B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold text-[#14100E] bg-[#D79758] hover:bg-[#E3A667] transition-all shadow-md cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Envoyer la demande</span>
                  </button>
                </form>
              )}
            </div>

            <p className="text-[11px] text-[#7E6D5E] text-center mt-4">
              Ou passez directement nous dire bonjour au 14 Rue des Moulins d'Antan !
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
