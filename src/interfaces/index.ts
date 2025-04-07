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

export type Category = "all" | "wine" | "beer" | "spirits" | "non-alcoholic";

export interface SortOption {
  label: string;
  value: string;
}
