import { HttpClient } from '@/app/users/adapters/http.user.repository'
import { ProductsRepository } from './../domain/ports/products.repository';
import { Product } from '../domain/product';

export class HttpProductRepository implements ProductsRepository {
  constructor(private httpClient : HttpClient){
  }
  public gellAllProducts(): Promise<Product[]> {
    return this.httpClient.read<Product[]>("/api/v1/products")
  }
}
