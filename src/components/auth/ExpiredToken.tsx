import { useRouter } from 'next/router';
import * as React from 'react';
import { useAuth } from '~/src/context/AuthContext';
import { routes } from '~/src/utils/constants';

interface ExpiredTokenProps {
  children: React.ReactNode;
}

const ExpiredToken: React.FC<ExpiredTokenProps> = (props) => {
  const { children } = props;

  const authContext = useAuth();
  const router = useRouter();

  const handleExpiredToken = (expiredTime: number) => {
    const current = Math.floor(Date.now() / 1000);

    if (Number(expiredTime) < Number(current)) {
      console.log('TOKEN EXPIRY');
      authContext.logout();
      router.push(routes.LOGIN);
    }
  };

  React.useEffect(() => {
    if (authContext && authContext.auth?.refresh_token) {
      handleExpiredToken(Number(authContext.auth?.refresh_token));
    }
  }, [router.pathname, authContext, authContext.auth?.refresh_token]);

  return <>{children}</>;
};

export default ExpiredToken;
