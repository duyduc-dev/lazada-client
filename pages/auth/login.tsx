import {useState} from 'react';
import FormLogin from '~/src/components/auth/FormLogin/FormLogin';
import MainLayout from '~/src/components/common/MainLayout';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  return (
    <div>
      <FormLogin />
    </div>
  );
};

export default Login;
Login.Layout = MainLayout;
