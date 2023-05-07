import * as React from 'react';
import MainLayout from '~/src/components/layouts/MainLayout';
import { useAuth } from '~/src/context/AuthContext';



interface MyAccountProps {

}


const MyAccount = (props: MyAccountProps) => {

  const { currentUser } = useAuth();
  return <div>{currentUser?.fullName}</div>;
};
MyAccount.Layout = MainLayout;
export default MyAccount;
