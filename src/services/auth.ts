import {
  LoginModel,
  AuthUserModel,
  ForgotPasswordModel,
  UpdatePasswordModel,
  PasswordModel,
  VerifyCodeModel,
  EmailModel,
  SignUpModel,
} from '~/interfaces/auth';
import request from '~/utils/request';
import { ResponseData } from '~/interfaces/common';
import slugify from 'react-slugify';

export const onHandleLogin = async (body: LoginModel) => {
  try {
    const result = await request.POST(`/auth/login`, {
      username: body.email,
      password: body.password,
    });
    if (result?.statusCode === 0 && result?.data?.token) {
      return [false, result?.data];
    } else if (result?.statusCode === 404) {
      return [true, 404];
    }
    return [true, result?.data];
  } catch (error) {
    console.log('onHandleLogin error>>', error);
    return [true, 'Something when wrong, please try again!'];
  }
};

export const onHandleRegister = async (body: SignUpModel) => {
  try {
    const dataUser: AuthUserModel & PasswordModel = {
      birthday: body.birthday,
      email: body.email,
      fullName: body.fullName,
      gender: body.gender,
      phone: body.phone,
      username: slugify(body.fullName?.trim().toLowerCase()?.replaceAll('đ', 'd')),
      password: body.password,
    };
    const result = await request.POST(`/auth/register`, {
      user: dataUser,
      code: body.code,
    });
    if (result?.statusCode === 0 && result?.data) {
      console.log(`file: function.ts:27 ~ onHandleRegister ~ result:`, result);
      return [false, result?.data];
    }
    return [true, result?.data];
  } catch (error) {
    console.log('onHandleRegister error>>', error);
    return [true, 'Something when wrong, please try again!'];
  }
};

export const onHandleLogout = async () => {
  try {
    const result = await request.POST(`/auth/logout`, null);
    if (result?.statusCode === 0) {
      console.log(`file: function.ts:43 ~ onHandleLogout ~ result:`, result);
      return [false, result?.data];
    }
    return [true, result?.data];
  } catch (error) {
    console.log('onHandleLogout error>>', error);
    return [true, 'Something when wrong, please try again!'];
  }
};

export const onHandleResetPassword = async (body: ForgotPasswordModel) => {
  try {
    const result = await request.POST(`/auth/forgot-password`, body);
    if (result?.statusCode === 0 && result?.data) {
      return [false, result?.data];
    }
    return [true, result?.data];
  } catch (error) {
    console.log('onHandleResetPassword error>>', error);
    return [true, 'Something when wrong, please try again!'];
  }
};

export const onHandleChangePassword = async (activeCode: string | string[], body: UpdatePasswordModel) => {
  try {
    const result = await request.PUT(`/auth/change-password/${activeCode}`, body);
    if (result?.statusCode === 0 && result?.data) {
      return [false, result?.data];
    }
    return [true, result?.data];
  } catch (error) {
    console.log('onHandleChangePassword error>>', error);
    return [true, 'Something when wrong, please try again!'];
  }
};

export const onHandleVerifyEmailRegister = async (body: EmailModel) => {
  try {
    const result = await request.POST<EmailModel>('auth/verify-email-register', body);

    if (result?.statusCode === 0 && result?.data) return [false, result.data];
    return [true, result.data];
  } catch (error) {
    console.log(`file: function.ts:93 ~ error:`, error);
    return [true, 'Something when wrong, please try again!'];
  }
};

export const onHandleVerifyAccount = async (body: EmailModel) => {
  try {
    const result: ResponseData<any> = await request.POST('/auth/verify-account', body);
    if (result.statusCode === 0 && result.data) {
      return [false, result.data];
    }

    return [false, result.data];
  } catch (error) {
    console.log(`file: auth.ts:110 ~ onHandleVerifyAccount ~ error:`, error);
    return [true, 'Something when wrong, please try again!'];
  }
};

export const onHandleVerifyCode = async (body: VerifyCodeModel) => {
  try {
    const result: ResponseData<any> = await request.POST(`/auth/verify-code`, body);
    if (result?.statusCode === 0 && result.data) {
      return [false, result?.data];
    }
    return [true, result?.data];
  } catch (error) {
    console.log('onHandleVerifyCode error>>', error);
    return [true, 'Something when wrong, please try again!'];
  }
};
