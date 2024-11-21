import data from '../data/products.json'
import type { DataListEnvelope } from './dataEnvelope';
import { api } from './myFetch';

export async function getAll(){
  // add model/controller/main server function to our server that grabs the data and returns in
  return api<DataListEnvelope<Product>>('http://localhost:3000/api/v1/products')
}

export function create(product: Product) {
  return api<Product>('http://localhost:3000/api/v1/products', product)
}

export function update(product: Product) {
  return api<Product>(`http://localhost:3000/api/v1/products/${product.id}`, product, 'PUT')
}

export function remove(productId: number) {
  return api(`http://localhost:3000/api/v1/products/${productId}`, null, 'DELETE')
}


export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    tags: string[];
    brand?: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    }
    reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    images: string[];
    thumbnail: string;
}