import { LucideIcon } from 'lucide-react';

export type ViewState = 'landing' | 'cart' | 'checkout' | 'success' | 'order' | 'about' | 'shop' | 'privacy' | 'terms';
export type Language = 'EN' | 'FR' | 'AR';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  features: string[];
}