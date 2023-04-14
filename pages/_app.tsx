import EmptyLayout from '~/src/components/layouts/EmptyLayout';
import {AppPropsWithLayout} from '~/src/interfaces/common';
import '~/styles/globals.css';

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
