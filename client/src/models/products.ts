import data from '../data/products.json'
import type { DataListEnvelope } from './dataEnvelope';
import { rest } from './myFetch';

export async function getAll(){
    return rest<DataListEnvelope<Product>>('/api/products')
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