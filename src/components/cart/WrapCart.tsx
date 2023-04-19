import * as React from 'react';

interface WrapCartProps {
  children: React.ReactNode;
}

const WrapCart: React.FC<WrapCartProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <div>header</div>
      <div>{children}</div>
    </div>
  );
};

export default WrapCart;
