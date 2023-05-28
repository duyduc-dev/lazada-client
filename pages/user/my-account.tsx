import * as React from 'react';

import MainLayout from '~/src/components/layouts/MainLayout';
import SidebarNavigate from '~/src/components/modules/user/my-account/SidebarNavigate';

interface MyAccountProps {}

const MyAccount = (props: MyAccountProps) => {
  const {} = props;

  return (
    <div className="bg-anti_flash_white">
      <div className="max-w-screen-custom_lg w-full mx-auto ">
        <div className="flex py-10">
          <div>
            <SidebarNavigate />
          </div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
};

MyAccount.Layout = MainLayout;

export default MyAccount;
