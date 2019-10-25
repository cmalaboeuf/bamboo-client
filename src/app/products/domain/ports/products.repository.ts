import { Product } from './../product';

export interface ProductsRepository {
  gellAllProducts(): Promise<Product[]>;
}