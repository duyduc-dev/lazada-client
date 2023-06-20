import * as React from 'react';

interface TestProps {
  a?: number;
}

const Test: React.FC<TestProps> = (props) => {
  const { a } = props;

  return <div>{a}</div>;
};

export default Test;
