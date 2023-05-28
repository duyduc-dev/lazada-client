import { ProductTypeModel } from './product';

export interface CartRequest {
  productId: string;
  quantity: number;
  typeId: string;
}

export interface CartModel {
  seller: SellerCartModel;
  products: ProductCartModel[];
}

export interface SellerCartModel {
  id: string;
  username: string;
  fullName: string;
  role: string;
  gender: string;
  birthday: string;
  avatar: any;
}

export interface ProductCartModel {
  productId: string;
  title: string;
  image: string;
  quantity: number;
  finalPrice: number;
  type: ProductTypeModel;
  slug: string;
}
