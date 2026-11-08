export interface MenuItem {
  id: string;
  name: string;
  category: 'pain' | 'viennoiserie' | 'patisserie' | 'evenement';
  categoryLabel: string;
  price: number;
  formattedPrice: string;
  unit: string;
  description: string;
  ingredients?: string[];
  image: string;
  badge?: string;
  isCustomizable?: boolean;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  customization?: {
    servings?: number;
    flavor?: string;
    inscription?: string;
    specialNotes?: string;
  };
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  highlight: string;
}

export interface HotBakeTime {
  time: string;
  product: string;
  status: 'past' | 'next' | 'later';
}
