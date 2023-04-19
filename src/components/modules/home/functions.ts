import { ResponseData } from '~/src/interfaces/common';
import request from '~/src/utils/request';

export const onHandleGetCategoriesTree = async () => {
  try {
    const response: ResponseData = await request.GET('/category/tree');
    if (response.statusCode === 0 && response.data) return response.data;
    return [true, response];
  } catch (error) {
    console.log(`file: functions.ts:5 ~ onHandleGetCategoriesTree ~ error:`, error);
    return [true, 'some error '];
  }
};
