import classNames from 'classnames';
import * as React from 'react';
import { useAuth } from '~/src/context/AuthContext';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  outline?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, outline, primary, onClick } = props;

  const { handleRedirectLogin } = useAuth();

  return (
    <div>
      <button
        onClick={onClick}
        className={classNames(
          'p-2 px-3 rounded-md hover:opacity-80 transition-all duration-300',
          primary && ' bg-blood_orange text-white',
          outline && 'border hover:bg-[rgba(0,0,0,0.04)]'
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
