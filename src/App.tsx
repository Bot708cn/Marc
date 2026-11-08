/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SavoirFaire } from './components/SavoirFaire';
import { GalleryShowcase } from './components/GalleryShowcase';
import { MenuSection } from './components/MenuSection';
import { CustomCakeHighlightSection } from './components/CustomCakeHighlightSection';
import { BakeryVisitSection } from './components/BakeryVisitSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CakeConfiguratorModal } from './components/CakeConfiguratorModal';
import { PhotoLightbox } from './components/PhotoLightbox';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { CartItem, MenuItem, GalleryPhoto } from './types/bakery';
import { MENU_ITEMS } from './data/bakeryData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('thewildknead_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCakeConfiguratorOpen, setIsCakeConfiguratorOpen] = useState(false);
  const [selectedPhotoForLightbox, setSelectedPhotoForLightbox] = useState<GalleryPhoto | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderNumber: string;
    customerName: string;
    phone: string;
    pickupSlot: string;
    notes: string;
    items: CartItem[];
    total: number;
    createdAt: string;
  } | null>(null);

  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('thewildknead_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Add standard item to cart
  const handleAddToCart = (item: MenuItem, quantity: number) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(ci => ci.menuItem.id === item.id && !ci.customization);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          id: `${item.id}-${Date.now()}`,
          menuItem: item,
          quantity
        }
      ];
    });
  };

  // Add customized cake to cart
  const handleAddCustomCake = (
    item: MenuItem,
    customization: {
      servings: number;
      flavor: string;
      inscription: string;
      specialNotes: string;
      price: number;
    }
  ) => {
    const customCakeItem: CartItem = {
      id: `custom-cake-${Date.now()}`,
      menuItem: {
        ...item,
        price: customization.price,
        formattedPrice: `${customization.price.toFixed(2).replace('.', ',')} €`
      },
      quantity: 1,
      customization
    };

    setCartItems(prev => [...prev, customCakeItem]);
    setIsCartOpen(true);
  };

  // Update quantity in cart
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  // Remove single item
  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Complete checkout
  const handleCheckout = (orderDetails: {
    customerName: string;
    phone: string;
    pickupSlot: string;
    notes: string;
    items: CartItem[];
    total: number;
  }) => {
    const orderNumber = `WK-${Math.floor(1000 + Math.random() * 9000)}`;
    const finalOrder = {
      ...orderDetails,
      orderNumber,
      createdAt: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };
    setConfirmedOrder(finalOrder);
    setIsCartOpen(false);
    setCartItems([]);
  };

  // Navigation and filtering helpers
  const handleScrollToMenu = (category?: string) => {
    if (category) {
      setActiveCategoryFilter(category);
    }
    const el = document.getElementById('carte');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromSavoirFaire = (cat: 'pain' | 'viennoiserie' | 'patisserie' | 'evenement') => {
    handleScrollToMenu(cat);
  };

  const handleOrderCategoryFromLightbox = (categoryName: string) => {
    if (categoryName.toLowerCase().includes('baguette')) {
      handleScrollToMenu('pain');
    } else if (categoryName.toLowerCase().includes('viennoiserie')) {
      handleScrollToMenu('viennoiserie');
    } else if (categoryName.toLowerCase().includes('patisserie') || categoryName.toLowerCase().includes('tarte')) {
      handleScrollToMenu('patisserie');
    } else if (categoryName.toLowerCase().includes('gateau') || categoryName.toLowerCase().includes('anniversaire')) {
      handleScrollToMenu('evenement');
    } else {
      handleScrollToMenu('all');
    }
  };

  const cakeMenuItem = MENU_ITEMS.find(m => m.id === 'gateau-anniversaire') || MENU_ITEMS[4];

  return (
    <div className="min-h-screen flex flex-col bg-[#12100E] text-[#EDE7E0] selection:bg-[#C98A4B] selection:text-white">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCakeConfigurator={() => setIsCakeConfiguratorOpen(true)}
      />

      {/* Main Content flow matching Photo 3 visual rhythm */}
      <main className="flex-1">
        {/* 1. Hero Section (Warm dark atmosphere inspired by Photo 3) */}
        <Hero
          onExploreMenu={() => handleScrollToMenu('all')}
          onOpenCakeConfigurator={() => setIsCakeConfiguratorOpen(true)}
        />

        {/* 2. Savoir-Faire 4-Column Grid (Light warm cream contrast section inspired by Photo 3 "Our Dental Services") */}
        <SavoirFaire
          onSelectCategory={handleSelectCategoryFromSavoirFaire}
        />

        {/* 3. Authentic Gallery Showcase (Dark contrast section inspired by Photo 3 "Real Smiles. Real Results.") */}
        <GalleryShowcase
          onSelectPhoto={(photo) => setSelectedPhotoForLightbox(photo)}
          onExploreMenu={() => handleScrollToMenu('all')}
        />

        {/* 4. The Menu & Ordering (With exact requested items & prices) */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenCakeConfigurator={() => setIsCakeConfiguratorOpen(true)}
          activeCategoryFilter={activeCategoryFilter}
          setActiveCategoryFilter={setActiveCategoryFilter}
        />

        {/* 5. Custom Cake Highlight (Featuring user's photo 1 floral celebration cake) */}
        <CustomCakeHighlightSection
          onOpenCakeConfigurator={() => setIsCakeConfiguratorOpen(true)}
        />

        {/* 6. Fournil Ambiance & Visit (Hours, baking schedule, map, contact) */}
        <BakeryVisitSection
          onOpenCakeConfigurator={() => setIsCakeConfiguratorOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onCheckout={handleCheckout}
      />

      {/* Custom Cake Builder Modal */}
      <CakeConfiguratorModal
        isOpen={isCakeConfiguratorOpen}
        onClose={() => setIsCakeConfiguratorOpen(false)}
        onAddCustomCake={handleAddCustomCake}
        cakeMenuItem={cakeMenuItem}
      />

      {/* High-res Photo Lightbox */}
      <PhotoLightbox
        photo={selectedPhotoForLightbox}
        onClose={() => setSelectedPhotoForLightbox(null)}
        onOrderCategory={handleOrderCategoryFromLightbox}
      />

      {/* Order Confirmation Receipt Modal */}
      <OrderConfirmationModal
        isOpen={!!confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
        order={confirmedOrder}
      />
    </div>
  );
}
