import * as React from 'react';
import dynamic from 'next/dynamic';
import { LayoutProps } from '~/src/interfaces/common';
import Footer from './partials/Footer';

const Header = dynamic(() => import('./partials/Header'), { ssr: false });

const MainLayout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
