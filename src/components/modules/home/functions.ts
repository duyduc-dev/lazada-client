import { CategoryModel } from '~/src/interfaces/category';
import { ResponseData } from '~/src/interfaces/common';
import request from '~/src/utils/request';

export const onHandleGetCategoriesTree = async () => {
  try {
    const response: ResponseData = await request.GET('/category/tree');
    if (response.statusCode === 0 && response.data) return response.data;
    return [true, response] as const;
  } catch (error) {
    console.log(`file: functions.ts:5 ~ onHandleGetCategoriesTree ~ error:`, error);
    return [true, 'some error '] as const;
  }
};

export const onHandleGetCategories = async () => {
  try {
    const res: ResponseData = await request.GET('/category');
    if (res.statusCode === 0 && res.data) return [false, res.data];
    return [true, res] as const;
  } catch (error) {
    console.log(`file: functions.ts:19 ~ onHandleGetCategories ~ error:`, error);
    return [true, 'some error '] as const;
  }
};

export const onHandleGetAllProduct = async () => {
  try {
    const res: ResponseData = await request.GET('/product');
    console.log(`file: functions.ts:30 ~ onHandleGetAllProduct ~ res:`, res);
    if (res.statusCode === 0 && res.data) return [false, res.data];
    return [true, res] as const;
  } catch (error) {
    console.log(`file: functions.ts:31 ~ onHandleGetAllProduct ~ error:`, error);
    return [true, 'some error '] as const;
  }
};
