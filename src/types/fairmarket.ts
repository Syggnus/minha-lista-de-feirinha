export interface FairMarket {
  id: string;
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  address: string;
  city: string;
  productTypes: string[];
  createdAt: string;
  updatedAt: string;
}

export type CreateFairMarketData = Omit<FairMarket, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateFairMarketData = Partial<CreateFairMarketData>;

export const PRODUCT_TYPES = [
  'Frutas e Verduras',
  'Produtos Orgânicos',
  'Laticínios',
  'Carnes e Peixes',
  'Pães e Doces', 
  'Artesanato',
  'Flores e Plantas',
  'Roupas e Acessórios',
  'Comida Pronta',
  'Bebidas'
] as const;