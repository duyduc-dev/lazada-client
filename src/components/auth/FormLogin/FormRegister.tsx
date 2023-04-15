/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Input from './Input';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { routes } from '~/src/utils/constants';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import Selected from './Selected';
import { SignUpModel } from '~/src/interfaces/auth';

const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  console.log(e.target.value);
};

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required("You can't leave this empty")
    .min(2, 'The name length should be 2 - 50 characters')
    .max(50, 'The name length should be 2 - 50 characters'),
  email: Yup.string()
    .email('The email you entered is not a valid email address')
    .required("You can't leave this empty"),
  password: Yup.string()
    .required("You can't leave this empty")
    .min(8, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password should contain alphabets, numbers and characters.'
    ),
  confirmPassword: Yup.string()
    .required("You can't leave this empty")
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  gender: Yup.string().oneOf(['male', 'female'], 'Gender must be male or female'),
  birthDate: Yup.date()
    .required("You can't leave this empty")
    .max(new Date(2025, 0, 1), 'Please select the correct birthday.'),
});

function FormRegister() {
  const { handleSubmit, errors, getFieldProps } = useFormik<SignUpModel>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      gender: '',
      birthDate: '',
    },
    validationSchema: signUpSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container bg-bg_login_sign">
      <div className="flex justify-center ">
        <div className="w-[810px] ">
          <div className="flex items-center justify-between pt-9 pb-9">
            <div className="text-title_arsenic text-[22px] font-[400]">Create your Lazada Account</div>
            <div className="text-[12px] text-sonic_silver flex gap-1">
              <div>Already member?</div>
              <Link href={routes.LOGIN} className="no-underline text-blue_green">
                Login
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
                label="Email Address*"
                placeholder="Please enter your Email"
                type="text"
                error={errors.email}
                {...getFieldProps('email')}
              />
              <Input
                label="Password*"
                placeholder="Minimum 8 characters with number, letter and characters"
                type="password"
                error={errors.password}
                {...getFieldProps('password')}
              />
              <Input
                label="Confirm Password*"
                placeholder="Please confirm your Password"
                type="password"
                error={errors.confirmPassword}
                {...getFieldProps('confirmPassword')}
              />
              <div className="flex justify-between">
                <Input
                  error={errors.birthDate}
                  {...getFieldProps('birthDate')}
                  label="Birthday"
                  placeholder="Date"
                  type="date"
                />
                <Selected
                  label="Gender"
                  value={'select'}
                  onChange={handleGenderChange}
                  placeholder="Gender"
                  error={errors.gender}
                />
              </div>
            </div>
            <div className="flex flex-col items-end w-full pt-0">
              <div>
                <div>
                  <Input
                    label="Full name*"
                    placeholder="First Last"
                    type="text"
                    error={errors.name}
                    {...getFieldProps('name')}
                  />
                </div>
                <div className="relative w-48">
                  <input className="border-x-white absolute top-[8px] " type="checkbox" />
                  <div className="w-[20rem] ml-3  block mb-4">
                    <span className="text-sonic_silver text-[12px] ml-1  ">
                      I'd like to receive exclusive offers and promotions via email
                    </span>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className=" w-full justify-center bg-[#f57224] hover:bg-orange-600 text-white py-3 px-[7rem] border border-orange-500 rounded"
                  >
                    SIGN UP
                  </button>
                </div>
                <div className="text-xs text-sonic_silver w-[19rem] items-center my-5">
                  <span>
                    By proceeding to sign up, I acknowledge that I have read and consented to Lazada’s
                    <a className="no-underline text-blue_green"> Terms of Use</a> and
                    <a className="no-underline text-blue_green"> Private Policy</a> , which sets out how
                    Lazada collects, uses and discloses my personal data, and the rights that I have under
                    applicable law.
                  </span>
                </div>
                <div className="my-2 text-[12px] text-sonic_silver text-start block">
                  <span>Or, Sign Up with</span>
                </div>
                <div className="pt-1 ">
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-facebook_color hover:bg-blue-700 text-white font-bold py-2 px-[7.5rem] border border-blue-800 rounded"
                  >
                    <FaFacebookF />
                    <span>Facebook</span>
                  </button>
                </div>
                <div className="pt-[0.75rem] ">
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
        <div className="card-body"></div>
      </div>
    </div>
  );
}
export default FormRegister;
