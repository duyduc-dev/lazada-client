import {LayoutProps} from '~/src/interfaces/common';
import Header from './component/Header';
import Footer from './component/Footer';

export default function MainLayout(props: LayoutProps) {
  const {children} = props;

  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}
