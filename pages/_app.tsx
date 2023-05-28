import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
 
import ExpiredToken from '~/src/components/auth/ExpiredToken';
import EmptyLayout from '~/src/components/layouts/EmptyLayout';
import { AuthInit, AuthProvider } from '~/src/context/AuthContext';
import { AppPropsWithLayout } from '~/src/interfaces/common';
import { store } from '~/src/store';

import '~/styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AuthProvider>
            <AuthInit>
              <ExpiredToken>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ExpiredToken>
            </AuthInit>
          </AuthProvider>
          <Toaster position="top-right" />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
