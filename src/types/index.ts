export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
  alcoholContent?: number;
  volume?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = "all" | "fruit-juices" | "soft-drinks" | "sparkling-water" | "egyptian-specialties";

export interface SortOption {
  label: string;
  value: string;
}
