import { HttpProductRepository } from './../adapters/http.product.repository';
import { Product } from './../domain/product';
export class ProductUsecase {

  constructor(private httpProductRepository: HttpProductRepository) {

  }

  getAllProduct(): Promise<Product[]>{
    return this.httpProductRepository.gellAllProducts();
  }
}