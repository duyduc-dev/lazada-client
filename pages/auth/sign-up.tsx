import * as React from 'react';
import FormRegister from '~/src/components/auth/FormLogin/FormRegister';
import MainLayout from '~/src/components/layouts/MainLayout';

const SignUp = () => {
  return (
    <div>
      <FormRegister />
    </div>
  );
};

SignUp.Layout = MainLayout;
export default SignUp;
