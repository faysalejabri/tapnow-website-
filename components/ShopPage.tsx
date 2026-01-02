import React, { useEffect } from 'react';
import { ProductGrid } from './ProductGrid';
import { Language } from '../types';

interface ShopPageProps {
  language: Language;
  onOrder: (planName: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ language, onOrder }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
       <ProductGrid 
         language={language} 
         onOrderClick={onOrder} 
         isShopPage={true} 
       />
    </div>
  );
};