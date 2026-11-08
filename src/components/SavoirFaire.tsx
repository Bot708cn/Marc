import React from 'react';
import { Wheat, Croissant, CakeSlice, Sparkles, ArrowRight } from 'lucide-react';

interface SavoirFaireProps {
  onSelectCategory: (category: 'pain' | 'viennoiserie' | 'patisserie' | 'evenement') => void;
}

export const SavoirFaire: React.FC<SavoirFaireProps> = ({ onSelectCategory }) => {
  const pillars = [
    {
      id: 'pain' as const,
      icon: Wheat,
      title: 'Baguettes de Tradition',
      subtitle: 'Fermentation lente 24h & meule',
      description: 'Pétries avec de la farine T65 sans additifs, façonnées à la main et cuites sur pierre pour une croûte chantante et une mie dorée crème.',
      priceNote: 'Dès 1,20 €'
    },
    {
      id: 'viennoiserie' as const,
      icon: Croissant,
      title: 'Viennoiseries Pur Beurre',
      subtitle: 'Beurre AOP Charentes-Poitou',
      description: 'Feuilletage touré à froid dans notre atelier. Croissants croustillants et pains au chocolat au cacao pur, dorés chaque matin à 6h.',
      priceNote: 'Dès 1,10 €'
    },
    {
      id: 'patisserie' as const,
      icon: CakeSlice,
      title: 'Pâtisseries Boulangères',
      subtitle: 'Fruits de saison & authenticité',
      description: 'Nos fameuses tartes aux pommes caramélisées en rosace, flans vanillés et douceurs cuites avec des ingrédients frais de proximité.',
      priceNote: 'Tarte à 3,50 €'
    },
    {
      id: 'evenement' as const,
      icon: Sparkles,
      title: 'Gâteaux Personnalisés',
      subtitle: 'Anniversaires & Célébrations',
      description: 'Créations sur-mesure à étages ornées de fleurs fraîches et touches d\'or pour marquer vos plus grands moments de fête.',
      priceNote: 'À partir de 25 €'
    }
  ];

  return (
    <section id="savoir-faire" className="py-24 bg-[#F8F4EE] text-[#1D1713] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header directly inspired by Photo 3 "PREMIUM CARE / Our Dental Services" */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A66E38] font-bold">
            Savoir-Faire Artisanal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[#1F1813] tracking-tight">
            Nos Métiers & Spécialités
          </h2>
          <div className="w-12 h-0.5 bg-[#C98A4B] mx-auto mt-4 mb-2" />
          <p className="text-sm sm:text-base text-[#615245] leading-relaxed pt-2">
            Chaque recette perpétue le respect du geste, du temps de fermentation et de la qualité pure des ingrédients.
          </p>
        </div>

        {/* 4-column service grid inspired by Photo 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                onClick={() => onSelectCategory(pillar.id)}
                className="group relative flex flex-col items-center text-center p-8 rounded-xl bg-white border border-[#E8DFC0]/70 hover:border-[#C98A4B] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Circular line icon inspired by Photo 3 icon styling */}
                <div className="w-16 h-16 rounded-full border border-[#D5C3A5] bg-[#FAF7F2] flex items-center justify-center mb-6 group-hover:border-[#C98A4B] group-hover:bg-[#F3EADB] transition-all">
                  <Icon className="w-7 h-7 text-[#8A5826] group-hover:text-[#A86A2E] stroke-[1.5] transition-colors" />
                </div>

                {/* Title in clean serif/semibold */}
                <h3 className="font-display text-xl font-semibold text-[#1F1813] mb-1 group-hover:text-[#A86A2E] transition-colors">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <span className="text-xs text-[#8A7664] font-medium mb-3">
                  {pillar.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#635447] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Bottom price tag & action link */}
                <div className="mt-auto pt-4 border-t border-[#F0E6D8] w-full flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#8A5826] tabular-nums">
                    {pillar.priceNote}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#4A3D31] font-medium group-hover:text-[#A86A2E] transition-colors">
                    <span>Découvrir</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
