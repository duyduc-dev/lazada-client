import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import EmptyLayout from '~/src/components/layouts/EmptyLayout';
import { AuthInit, AuthProvider } from '~/src/context/AuthContext';
import { AppPropsWithLayout } from '~/src/interfaces/common';
import '~/styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AuthInit>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthInit>
        </AuthProvider>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </>
  );
}
