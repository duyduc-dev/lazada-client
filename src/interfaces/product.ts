import { CategoryModel } from './category';

export interface ProductModel {
  id?: string;
  vendor?: ProductSellerModel;
  title?: string;
  description?: string;
  slug?: string;
  productTypes?: ProductTypeModel[];
  rating?: number;
  category?: CategoryModel;
}

export interface ProductTypeModel {
  id?: string;
  type?: string;
  image?: string;
  price?: number;
  discount?: number;
}

export interface ProductSellerModel {
  id?: string;
  avatar?: string | null;
  birthday?: string;
  fullName?: string;
  gender?: string;
  role?: string;
  username?: string;
}
