import * as React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  onEnter?: () => void;
}

const Button = function (props: ButtonProps) {
  const {children, onClick, onEnter} = props;

  return <div onClick={onClick}>{children}</div>;
};

export default Button;
