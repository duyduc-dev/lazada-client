import * as React from 'react';
import { useAuth } from '~/src/context/AuthContext';

interface ExpiredTokenProps {
  children: React.ReactNode;
}

const ExpiredToken: React.FC<ExpiredTokenProps> = (props) => {
  const { children } = props;

  const authContext = useAuth();

  const handleExpiredToken = (expiredTime: number) => {
    const current = Math.floor(Date.now() / 1000);
    console.log(`file: ExpiredToken.tsx:16 ~ handleExpiredToken ~ expiredTime:`, { expiredTime, current });
    if (Number(expiredTime) < Number(current)) {
      console.log('TOKEN EXPIRY');

      authContext.logout();
    }
  };

  React.useEffect(() => {
    if (authContext && authContext.auth?.refresh_token) {
      handleExpiredToken(Number(authContext.auth?.refresh_token));
    }
  }, [authContext, authContext.auth?.refresh_token]);

  return <>{children}</>;
};

export default ExpiredToken;
