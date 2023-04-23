import { ResponseData } from '../interfaces/common';
import { routes } from '../utils/constants';
import request from '../utils/request';

export const onHandleGetProductBySlug = async (slug: string) => {
  try {
    const res = await request.GET(`${routes.PRODUCT}/${slug}`);
    if (res?.statusCode === 0 && res?.data) return [false, res.data];
    return [true, res.data] as const;
  } catch (error) {
    console.log(`file: product.ts:5 ~ onHandleGetProductBySlug ~ error:`, error);
    return [true, 'some thing error'] as const;
  }
};
