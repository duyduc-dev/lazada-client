import * as React from 'react';
import classNames from 'classnames';
import { useBoolean } from 'hooks-react-custom';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  type?: 'text' | 'password';
  name?: string;
  autoComplete?: 'on' | 'off';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = (props) => {
  const { type = 'text', autoComplete = 'off', label, placeholder, name, value, error, onChange } = props;
  const [showPassword, setShowPassword] = useBoolean();

  const id = React.useId();

  return (
    <div className="relative mb-6">
      <label htmlFor={id} className="top-0 mb-4 text-xs h-3.5 leading-4 font-[400]">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          autoComplete={autoComplete}
          onChange={onChange}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          className={classNames(
            'text-[14px] pl-2 w-full h-10 border border-silver_pink pr-[35px]',
            error && '!border-coral_red'
          )}
        />
        {type === 'password' && (
          <button
            onClick={setShowPassword.toggle}
            className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-2"
          >
            {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
          </button>
        )}
      </div>
      <div>
        <span className="leading-[16px] text-[12px] text-coral_red mb-2.5 font-[400]">{error}</span>
      </div>
    </div>
  );
};

export default Input;
