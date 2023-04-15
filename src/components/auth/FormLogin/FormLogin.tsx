import Link from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { routes } from '~/src/utils/constants';
import { LoginModel } from '~/src/interfaces/auth';
import Input from './Input';

const loginSchema = Yup.object().shape({
  email: Yup.string().required("You can't leave this empty").email('Email invalid.'),
  password: Yup.string().required("You can't leave this empty"),
});

function FormLogin() {
  const { handleSubmit, errors, getFieldProps } = useFormik<LoginModel>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit(values, formikHelpers) {
      console.log(values);
    },
  });

  return (
    <div className="bg-[#eff0f5] container">
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
          <form
            onSubmit={handleSubmit}
            className="flex justify-between p-[25px] w-[810px] border-box bg-white"
          >
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
                    className="w-full justify-center bg-[#f57224] hover:bg-orange-600 text-white py-3 px-[7rem] border border-orange-500 rounded"
                  >
                    Login
                  </button>
                </div>
                <div className="my-2 text-[12px] text-sonic_silver text-start block">
                  <span>Or, Login with</span>
                </div>
                <div className="pt-1 ">
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-[#3b5998] hover:bg-blue-700 text-white font-bold py-2 px-[7.5rem] border border-blue-800 rounded"
                  >
                    <FaFacebookF />
                    <span>Facebook</span>
                  </button>
                </div>
                <div className="pt-[0.75rem] ">
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-[#d34836] hover:bg-red-700 text-white font-bold py-2 px-[8rem] border border-red-600 rounded"
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
  );
}

export default FormLogin;
