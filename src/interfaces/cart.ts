export interface CartRequest {
  productId: string;
  sellerId: string;
  quantity: number;
  typeId: number;
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
  price: number;
  type: Type;
  slug: string;
}

interface Type {
  id: string;
  type: string;
  image: string;
  price: number;
  discount: number;
}
