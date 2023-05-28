import { CartRequest } from '~/src/interfaces/cart';
import { ResponseData } from '~/src/interfaces/common';
import request from '~/src/utils/request';
import * as authHelper from '~/utils/helper/AuthHelper';

export const getCart = async () => {
  try {
    const res: ResponseData = await request.GET('/cart');

    if (res.statusCode === 0 && res.data) return [false, res.data];
    return [true, res.data];
  } catch (error) {
    console.log('error >> ', error);
    return [true, 'something wrong'];
  }
};

export const addToCart = async (data: CartRequest) => {
  try {
    const res: ResponseData = await request.POST('/cart', data);
    if (res.statusCode === 0 && res.data) return [false, res.data] as const;
    return [true, res] as const;
  } catch (error) {
    console.log('error >> ', error);
    return [true, 'something wrong'] as const;
  }
};
