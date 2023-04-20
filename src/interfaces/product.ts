import { CategoryModel } from './category';

export interface ProductModel {
  id?: string;
  vendorId?: string;
  title?: string;
  description?: string;
  slug?: string;
  price?: number | string;
  discount?: number | string;
  images?: string[];
  rating?: number;
  category?: CategoryModel;
}
