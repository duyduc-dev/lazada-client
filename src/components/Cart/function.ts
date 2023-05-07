import { ResponseData } from '~/src/interfaces/common';
import request from '~/src/utils/request';

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
