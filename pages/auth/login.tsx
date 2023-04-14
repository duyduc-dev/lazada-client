import {useState} from 'react';
import FormLogin from '~/src/components/auth/FormLogin/FormLogin';
import MainLayout from '~/src/components/layouts/MainLayout';

const Login = () => {
  return (
    <div>
      <FormLogin />
    </div>
  );
};

export default Login;
Login.Layout = MainLayout;
