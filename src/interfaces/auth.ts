export interface LoginModel {
  email: string;
  password: string
}

export interface AuthModel {
  api_token: string;
  refresh_token: number;
}

export interface AddressModel {
  address: string;
  receiverPhone: string;
  receiverName: string;
}

export interface AuthUserModel {
  id?: string;
  role?: string;
  email?: string;
  username?: string;
  fullName?: string;
  phone?: string;
  gender?: string;
  birthday?: string;
  addresses?: AddressModel[];
}

export type SignUpModel = AuthUserModel & {
  password: string;
  confirmPassword: string;
  code: string;
};

export interface ForgotPasswordModel {
  email: string;
  code: string;
  newPassword: string;
}

export interface UpdatePasswordModel {
  confirmPassword: string;
  oldPassword: string;
}

export interface PasswordModel {
  password?: string;
}

export interface EmailModel {
  email: string;
}

export interface VerifyCodeModel {
  keyCode: string;
  code: string;
}
