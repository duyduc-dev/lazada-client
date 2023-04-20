import * as React from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Head from 'next/head';
import { useBoolean } from 'hooks-react-custom';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import classNames from 'classnames';
import { routes } from '~/src/utils/constants';
import { AuthUserModel, SignUpModel } from '~/src/interfaces/auth';
import MainLayout from '~/src/components/layouts/MainLayout';
import Input from '~/src/components/auth/Form/Input';
import { SelectGender } from '~/src/components/auth/Form';
import DraggableVerify from '~/src/components/auth/Form/DraggableVerify';
import useCountdown from '~/src/hooks/useCountDownSecond';
import Popup from '~/src/components/Popup';
import { onHandleRegister, onHandleVerifyEmailRegister } from '~/src/services/auth';
import LazadaLoading from '~/src/components/LazadaLoading';
import { useAuth } from '~/src/context/AuthContext';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

const signUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("You can't leave this empty")
    .min(2, 'The fullName length should be 2 - 50 characters')
    .max(50, 'The fullName length should be 2 - 50 characters'),
  email: Yup.string()
    .email('The email you entered is not a valid email address')
    .required("You can't leave this empty"),
  password: Yup.string()
    .required("You can't leave this empty")
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password should contain alphabets, numbers and characters.'
    ),
  confirmPassword: Yup.string()
    .required("You can't leave this empty")
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  gender: Yup.string()
    .required("You can't leave this empty")
    .oneOf(['Male', 'Female'], 'Gender must be male or female'),
  birthday: Yup.date()
    .required("You can't leave this empty")
    .max(new Date(Date.now()), 'Please select the correct birthday.'),
  code: Yup.string().required('You must verify email address'),
  phone: Yup.string().required('You can not leave this empty').matches(/[0-9]/, 'Please enter a phone number'),
});

const SignUp = () => {
  const { saveAuth } = useAuth();
  const router = useRouter();
  const { handleSubmit, errors, getFieldProps, values, setErrors } = useFormik<SignUpModel>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      gender: '',
      birthday: '',
      code: '',
      phone: '',
    },
    validationSchema: signUpSchema,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      try {
        const [err, data] = await onHandleRegister(values);
        if (!err && data) {
          saveAuth({
            api_token: data?.token,
            refresh_token: data?.expiryDate,
          });
          toast.success('Register Successfully', { duration: 2000 });
          setTimeout(() => {
            router.push(routes.HOME);
          }, 2000);
        } else {
          toast.error('Register Unsuccessfully');
        }
      } catch (error) {
        console.log('>> => ', error);
      }
    },
  });

  const [showDragger, setShowDragger] = useBoolean(true);
  const [showPopup, setShowPopup] = useBoolean(false);
  const [timeLeft, actionCountDown] = useCountdown(60);
  const [loading, setLoading] = useBoolean(false);

  const handleDraggerEnd = async () => {
    if (!values.email) {
      setErrors({
        email: 'Email is required',
      });
      return;
    }
    setShowDragger.setFalse();
    setShowPopup.setFalse();
    actionCountDown.startCountdown();
    setLoading.setTrue();
    const [err, data] = await onHandleVerifyEmailRegister({
      email: values.email,
    });
    if (err) {
      setErrors({
        code: 'This email is already registered',
      });
    }
    setLoading.setFalse();
    console.log(123);
  };

  const handleClickResend = async () => {
    if (!values.email) {
      setErrors({
        email: 'Email is required',
      });
      return;
    }
    actionCountDown.startCountdown();
    setShowPopup.setTrue();
  };

  return (
    <>
      <Head>
        <title>Sign up Lazada</title>
      </Head>
      <div>
        <div className=" bg-anti_flash_white pb-20">
          <div className="flex justify-center">
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
              <form onSubmit={handleSubmit} className="flex justify-between p-[25px] w-[810px] border-box bg-white">
                <div className="max-w-[380px] w-full">
                  <Input
                    label="Email Address*"
                    placeholder="Please enter your Email"
                    type="text"
                    error={errors.email}
                    {...getFieldProps('email')}
                  />
                  {showDragger ? (
                    <div>
                      <DraggableVerify breakpoints={300} onEnd={handleDraggerEnd} />
                      <span className="leading-[16px] text-[12px] text-coral_red mb-2.5 font-[400]">{errors.code}</span>
                    </div>
                  ) : (
                    <Input
                      label="SMS Verification Code*"
                      placeholder="code"
                      {...getFieldProps('code')}
                      error={errors.code}
                      renderHTMLOnInput={() => (
                        <div
                          className={classNames(
                            'absolute -translate-y-1/2 top-1/2 right-3 text-blue_green text-[12px]',
                            timeLeft > 0 && 'text-quick_silver'
                          )}
                        >
                          <button disabled={timeLeft > 0} onClick={handleClickResend}>
                            Resend {timeLeft <= 0 ? '' : `(${timeLeft})`}
                          </button>
                        </div>
                      )}
                    />
                  )}
                  <Input label="Phone number*" placeholder="phone" error={errors.phone} {...getFieldProps('phone')} />
                  <Input
                    label="Password*"
                    placeholder="Minimum 6 characters with number, letter and characters"
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
                      error={errors.birthday}
                      {...getFieldProps('birthday')}
                      label="Birthday"
                      placeholder="Date"
                      type="date"
                    />
                    <SelectGender
                      label="Gender"
                      placeholder="Gender"
                      {...getFieldProps('gender')}
                      error={errors.gender}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end w-full pt-0">
                  <div>
                    <div>
                      <Input
                        label="Full name*"
                        placeholder="Full name"
                        type="text"
                        error={errors.fullName}
                        {...getFieldProps('fullName')}
                      />
                    </div>
                    <div className="relative w-48">
                      <input className="border-x-white absolute top-[8px] " type="checkbox" />
                      <div className="w-[20rem] ml-3  block mb-4">
                        <span className="text-sonic_silver text-[12px] ml-1">
                          I&apos;d like to receive exclusive offers and promotions via email
                        </span>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full justify-center bg-vivid_tangelo hover:bg-orange-600 text-white py-3 px-[7rem] border border-orange-500 rounded"
                      >
                        SIGN UP
                      </button>
                    </div>
                    <div className="text-xs text-sonic_silver w-[19rem] items-center my-5">
                      <span>
                        By proceeding to sign up, I acknowledge that I have read and consented to Lazada’s
                        <a className="no-underline text-blue_green"> Terms of Use</a> and
                        <a className="no-underline text-blue_green"> Private Policy</a> , which sets out how Lazada
                        collects, uses and discloses my personal data, and the rights that I have under applicable law.
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
      </div>
      <Popup visible={showPopup}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !bg-white py-5 px-6">
          <div className="max-w-[300px] w-full text-raisin_black">
            <h3 className="font-normal text-[14px] mb-2">Security Verification</h3>
            <p className="text-nickel text-[12px]">For your account security, please slide left to right :</p>
            <div className="mt-3">
              <DraggableVerify breakpoints={180} onEnd={handleDraggerEnd} />
            </div>
            <div className="flex justify-end">
              <button className="mt-5 text-spanish_gray" onClick={setShowPopup.setFalse}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Popup>
      <LazadaLoading visible={loading} />
    </>
  );
};

SignUp.Layout = MainLayout;
export default SignUp;
