import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export interface ResponseData<T = any> {
  message?: string;
  status?: string;
  statusCode?: number;
  data?: T;
}
