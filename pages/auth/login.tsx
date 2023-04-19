import Link from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import Head from 'next/head';
import { routes } from '~/src/utils/constants';
import { LoginModel } from '~/src/interfaces/auth';
import MainLayout from '~/src/components/layouts/MainLayout';
import { Input } from '~/src/components/auth/Form';
import { onHandleLogin } from '~/src/services/auth';
import { useAuth } from '~/src/context/AuthContext';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

const loginSchema = Yup.object().shape({
  email: Yup.string().required("You can't leave this empty").email('Email invalid.'),
  password: Yup.string().required("You can't leave this empty"),
});

const Login = () => {
  const { saveAuth } = useAuth();
  const router = useRouter();
  const { handleSubmit, errors, getFieldProps } = useFormik<LoginModel>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    validateOnMount: false,
    validateOnChange: false,
    async onSubmit(values) {
      const [err, data] = await onHandleLogin(values);
      if (!err && data) {
        saveAuth({
          api_token: data?.token,
          refresh_token: data?.expiryDate,
        });
        toast.success('Login successful!', { duration: 2000 });
        setTimeout(() => {
          router.push(routes.HOME);
        }, 2000);
      } else {
        toast.error('Login failed!', { duration: 2000 });
      }
    },
  });
  return (
    <>
      <Head>
        <title>Login Lazada</title>
      </Head>
      <div>
        <div className="bg-anti_flash_white">
          <div className="flex justify-center ">
            <div className="w-[810px] ">
              <div className="flex items-center justify-between pt-9 pb-9">
                <div className="text-title_arsenic text-[22px] font-[400]">Welcome to Lazada! Please login.</div>
                <div className="text-[12px] text-sonic_silver flex gap-1">
                  <div>New member?</div>
                  <Link href={routes.SIGN_UP} className="no-underline text-blue_green">
                    Register
                  </Link>
                  <div>here!</div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="flex justify-between p-[25px] w-[810px] border-box bg-white">
                <div className="max-w-[380px] w-full">
                  <Input
                    label="Email*"
                    placeholder="Please enter your Email"
                    type="text"
                    error={errors.email}
                    {...getFieldProps('email')}
                  />
                  <Input
                    label="Password*"
                    placeholder="Please enter your Password"
                    type="password"
                    error={errors.password}
                    {...getFieldProps('password')}
                  />
                  <div className="flex justify-end">
                    <a className="text-xs text-bondi_blue">Forgot Password?</a>
                  </div>
                </div>
                <div className="pt-[20px] w-full flex flex-col items-end">
                  <div>
                    <div>
                      <button
                        type="submit"
                        className="w-full justify-center bg-vivid_tangelo hover:bg-orange-600 text-white py-3 px-[7rem] border border-orange-500 rounded"
                      >
                        Login
                      </button>
                    </div>
                    <div className="my-2 text-[12px] text-sonic_silver text-start block">
                      <span>Or, Login with</span>
                    </div>
                    <div className="pt-1">
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-facebook_color hover:bg-blue-700 text-white font-bold py-2 px-[7.5rem] border border-blue-800 rounded"
                      >
                        <FaFacebookF />
                        <span>Facebook</span>
                      </button>
                    </div>
                    <div className="pt-[0.75rem]">
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-jasper_red hover:bg-red-700 text-white font-bold py-2 px-[8rem] border border-red-600 rounded"
                      >
                        <FaGooglePlusG />
                        <span>Google</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
Login.Layout = MainLayout;
