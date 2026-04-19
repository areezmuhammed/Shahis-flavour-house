export interface Product {
  id: string;
  name: string;
  category: 'frozen' | 'ready-to-eat';
  price: number;
  marinade_type?: string;
  image_url: string;
  stock?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  customer_name: string;
  customer_phone: string;
  delivery_address: string;
  delivery_date: string;
  items: CartItem[];
  total: number;
}
