import * as React from 'react';
import {LayoutProps} from '~/src/interfaces/common';

const EmptyLayout: React.FC<LayoutProps> = props => {
  const {children} = props;

  return <>{children}</>;
};

export default EmptyLayout;
