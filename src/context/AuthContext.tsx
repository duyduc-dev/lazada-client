import React, { useState, useEffect, createContext, useContext, useMemo, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { AuthModel, AuthUserModel } from '~/interfaces/auth';
import * as authHelper from '~/utils/helper/AuthHelper';
import request from '~/utils/request';
import { onHandleLogout } from '~/services/auth';
import { LOCAL_REDIRECT_PATH, routes } from '../utils/constants';
import { toast } from 'react-hot-toast';
import { useLocalStorage } from 'hooks-react-custom';

type AuthContextProps = {
  auth: AuthModel | undefined;
  saveAuth: any;
  saveUser: any;
  currentUser: AuthUserModel | undefined;
  logout: any;
  handleRedirectLogin: () => void;
};

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: null,
  saveUser: null,
  currentUser: undefined,
  logout: () => null,
  handleRedirectLogin: () => null,
};

// create context
const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => useContext(AuthContext);
// end
const getUserDetail = async (token: string) => {
  const result = await request.GET('/auth/info', {
    'Auth-Token': token,
  });
  if (result?.statusCode === 0 && result?.data) {
    return result.data;
  }
  return null;
};

interface AuthProps {
  children?: ReactNode;
}

const AuthProvider = ({ children }: AuthProps) => {
  const router = useRouter();
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<AuthUserModel | undefined>(authHelper.getUser());
  const [, setRedirect] = useLocalStorage(LOCAL_REDIRECT_PATH, routes.HOME);

  const saveAuth = useCallback((authData: AuthModel | undefined) => {
    setAuth(authData);
    if (authData) {
      authHelper.setAuth(authData);
    } else {
      authHelper.removeAuth();
    }
  }, []);

  const saveUser = useCallback((userData: AuthUserModel | undefined) => {
    setCurrentUser(userData);
    if (userData) {
      authHelper.setUser(userData);
    } else {
      authHelper.removeUser();
    }
  }, []);

  const logout = async () => {
    await onHandleLogout();
    toast.success('Logout completed', { duration: 2000 });
    setTimeout(() => {
      window.localStorage.removeItem('Auth-Token');
      saveAuth(undefined);
      saveUser(undefined);
      router.push(routes.HOME);
    }, 2000);
  };

  const handleRedirectLogin = () => {
    if (window !== undefined) {
      if (router?.pathname && router?.pathname !== routes.LOGIN && router?.pathname !== routes.SIGN_UP) {
        setRedirect(router.asPath);
      }
    }
    if (!currentUser) {
      router.push(routes.LOGIN);
    }
  };

  const values = useMemo(
    () => ({
      auth,
      saveAuth,
      currentUser,
      handleRedirectLogin,
      logout,
      saveUser,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth, currentUser]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const AuthInit = ({ children }: AuthProps) => {
  const { auth, logout, saveUser } = useAuth();

  const requestUserDetail = async (token: string) => {
    try {
      const data = await getUserDetail(token);
      if (data) saveUser(data);
    } catch (error) {
      console.error('getUserDetail Error>>', error);
      if (logout && auth?.api_token) logout();
    }
  };

  useEffect(() => {
    if (auth && auth?.api_token) {
      requestUserDetail(auth?.api_token);
    } else if (logout && auth?.api_token) {
      logout();
    }
  }, [auth]);

  return <>{children}</>;
};

export { AuthProvider, AuthInit, useAuth };
