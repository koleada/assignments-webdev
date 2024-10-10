import data from '../data/products.json'
import type { DataListEnvelope } from './dataEnvelope';

export function getAll() : DataListEnvelope<Product>{
    return{
        data: data.items,
        total: data.total
    }
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