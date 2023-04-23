import { atom } from 'recoil';
import { ProductTypeModel } from '../interfaces/product';

export const productTypeStore = atom<ProductTypeModel>({
  key: 'productType',
  default: {},
});
