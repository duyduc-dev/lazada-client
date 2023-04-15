import * as React from 'react';
import {LayoutProps} from '~/src/interfaces/common';
import Footer from './partials/Footer';
import Header from './partials/Header';

const MainLayout: React.FC<LayoutProps> = props => {
  const {children} = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
