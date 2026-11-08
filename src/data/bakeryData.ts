import { MenuItem, GalleryPhoto, HotBakeTime } from '../types/bakery';

export const BAKERY_BRAND = {
  name: "The Wild Knead",
  tagline: "Boulangerie & Pâtisserie Artisanale",
  sealImage: "/assets/aistudio/1794130980770_0c6c90ad.jpg",
  phone: "01 42 68 50 12",
  email: "contact@thewildknead.fr",
  address: "14 Rue des Moulins d'Antan, 75004 Paris",
  metro: "Métro Saint-Paul (Ligne 1) & Pont Marie (Ligne 7)",
  openingHours: [
    { days: "Mardi au Samedi", hours: "06h30 – 19h30", isHighlight: true },
    { days: "Dimanche", hours: "07h00 – 13h30", isHighlight: false },
    { days: "Lundi", hours: "Fermeture hebdomadaire", isHighlight: false }
  ]
};

// Exact menu requested by the user:
// 1. Baguette traditionnelle : 1,20 €
// 2. Croissant : 1,10 €
// 3. Pain au chocolat : 1,30 €
// 4. Tarte aux pommes : 3,50 €
// 5. Gâteau d'anniversaire : à partir de 25 €

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "baguette-tradition",
    name: "Baguette Traditionnelle",
    category: "pain",
    categoryLabel: "Pains & Levain",
    price: 1.20,
    formattedPrice: "1,20 €",
    unit: "la pièce",
    description: "Farine de blé française de meule T65, fermentation lente de 24h sur levain liquide naturel, croûte caramélisée croustillante et mie crème alvéolée.",
    ingredients: ["Farine Label Rouge", "Levain naturel", "Eau filtrée", "Sel de Guérande"],
    image: "/assets/aistudio/1794130968568_0019e159.jpg",
    badge: "Fournée chaude du jour"
  },
  {
    id: "croissant-beurre",
    name: "Croissant Pur Beurre",
    category: "viennoiserie",
    categoryLabel: "Viennoiseries",
    price: 1.10,
    formattedPrice: "1,10 €",
    unit: "la pièce",
    description: "Feuilletage artisanal croustillant et fondant au beurre AOP Charentes-Poitou. Dorure soignée et alvéolage parfait.",
    ingredients: ["Beurre AOP Charentes-Poitou", "Farine de froment", "Lait entier", "Levain doux"],
    image: "/assets/aistudio/1794130970237_dae916f2.jpg",
    badge: "Fait maison"
  },
  {
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    category: "viennoiserie",
    categoryLabel: "Viennoiseries",
    price: 1.30,
    formattedPrice: "1,30 €",
    unit: "la pièce",
    description: "Double barre de chocolat noir pur beurre de cacao 60% enveloppée dans notre feuilletage généreux et croustillant.",
    ingredients: ["Chocolat pur beurre de cacao", "Beurre AOP", "Farine de tradition", "Sucre de canne blond"],
    image: "/assets/aistudio/1794130970237_dae916f2.jpg",
    badge: "Incontournable"
  },
  {
    id: "tarte-aux-pommes",
    name: "Tarte aux Pommes Artisanale",
    category: "patisserie",
    categoryLabel: "Pâtisseries",
    price: 3.50,
    formattedPrice: "3,50 €",
    unit: "la part / tartelette",
    description: "Pâte sablée croustillante pur beurre, compotée de pommes reinettes fraîches à la vanille bourbon et rosace de fines lamelles caramélisées.",
    ingredients: ["Pommes Reinettes locales", "Pâte sablée pur beurre", "Vanille Bourbon de Madagascar", "Gelée de pomme maison"],
    image: "/assets/aistudio/1794130971576_5307b888.jpg",
    badge: "Recette traditionnelle"
  },
  {
    id: "gateau-anniversaire",
    name: "Gâteau d'Anniversaire & Événements",
    category: "evenement",
    categoryLabel: "Gâteaux Personnalisés",
    price: 25.00,
    formattedPrice: "À partir de 25 €",
    unit: "selon convives",
    description: "Création pâtissière sur-mesure pour vos célébrations : biscuit moelleux, ganache montée, fleurs fraîches naturelles comestibles et dorures à la feuille d'or.",
    ingredients: ["Biscuit vanille ou chocolat intense", "Crème mousseline ou ganache montée", "Décor floral naturel", "Finitions feuille d'or"],
    image: "/assets/aistudio/1794130972805_f3964ebc.jpg",
    badge: "Sur commande 48h",
    isCustomizable: true
  }
];

// The 4 authentic photos uploaded by the user matching categories:
// 1. Baguettes
// 2. Viennoiseries
// 3. Pâtisseries
// 4. Gâteaux personnalisés
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-baguettes",
    title: "Baguettes de Tradition",
    subtitle: "Farine de Meule & Levain Vivant",
    category: "Baguettes",
    image: "/assets/aistudio/1794130968568_0019e159.jpg",
    description: "Reposées sur toile de lin naturelle avant enfournement sur sole de pierre brûlante pour une croûte bien dorée et crissante.",
    highlight: "1,20 € / pièce"
  },
  {
    id: "photo-viennoiseries",
    title: "Viennoiseries Pur Beurre",
    subtitle: "Feuilletage Touré à la Main",
    category: "Viennoiseries",
    image: "/assets/aistudio/1794130970237_dae916f2.jpg",
    description: "Chaque croissant et pain au chocolat est façonné avec patience, révélant un feuilletage croustillant aux arômes de noisette.",
    highlight: "Dès 1,10 €"
  },
  {
    id: "photo-patisseries",
    title: "Pâtisseries & Tartes Fines",
    subtitle: "Fruits Frais & Douceurs Dorées",
    category: "Pâtisseries",
    image: "/assets/aistudio/1794130971576_5307b888.jpg",
    description: "Notre tarte aux pommes signature, disposée en rosace minutieuse avec des pommes récoltées à maturité chez nos producteurs partenaires.",
    highlight: "3,50 € la part"
  },
  {
    id: "photo-gateaux",
    title: "Gâteaux Personnalisés",
    subtitle: "Pièces d'Exception & Mariages",
    category: "Gâteaux Personnalisés",
    image: "/assets/aistudio/1794130972805_f3964ebc.jpg",
    description: "Pièces à étages ornées de bouquets floraux délicats, de marbrures pastel et de feuilles d'or pour immortaliser vos plus beaux anniversaires.",
    highlight: "À partir de 25 €"
  }
];

// Hot baking schedules so visitors know when warm bread comes out
export const HOT_BAKE_SCHEDULE: HotBakeTime[] = [
  { time: "06h45", product: "Première fournée Baguettes & Croissants", status: "past" },
  { time: "11h30", product: "Fournée de midi : Baguettes de Tradition chaudes", status: "next" },
  { time: "16h30", product: "Goûter : Pains au chocolat & Baguettes du soir", status: "later" },
  { time: "18h00", product: "Dernière fournée croustillante pour le dîner", status: "later" }
];
