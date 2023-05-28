import Link from 'next/link';
import * as React from 'react';
import { useAuth } from '~/src/context/AuthContext';
import { routes } from '~/src/utils/constants';

interface NavSidebar {
  title: string;
  href: string;
  children?: NavSidebar[];
}

const nav: NavSidebar[] = [
  {
    title: 'Manage My Account',
    href: routes.MY_ACCOUNT,
    children: [
      {
        title: 'My Profile',
        href: routes.MY_PROFILE,
      },
      {
        title: 'Address Book',
        href: routes.ADDRESS,
      },
    ],
  },
  {
    title: 'Manage My Account',
    href: routes.MY_ACCOUNT,
    children: [
      {
        title: 'My Profile',
        href: routes.MY_PROFILE,
      },
      {
        title: 'Address Book',
        href: routes.ADDRESS,
      },
    ],
  },
];

interface SidebarNavigateProps {}

const SidebarNavigate: React.FC<SidebarNavigateProps> = (props) => {
  const {} = props;

  const { currentUser } = useAuth();

  return (
    <div className="w-[160px]">
      <div>
        <p className="text-[12px]">Hello {currentUser?.fullName}</p>
      </div>
      <div className="flex flex-col gap-2">
        {nav.map((item, i) => (
          <div key={`${i}-${item.title}`}>
            <Link href={item.href} className="font-medium text-title_arsenic 0">
              {item.title}
            </Link>
            {item.children && (
              <div className="flex flex-col pl-3">
                {item.children?.map((child, key) => (
                  <Link key={`${key}-${child.title}`} href={child.href} className="text-sonic_silver text-[14px] mt-1">
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarNavigate;
