import Image from 'next/legacy/image';
import * as React from 'react';
import { GrSearch } from 'react-icons/gr';
import Link from 'next/link';
import { useBoolean } from 'hooks-react-custom';
import logoLazada from '~/assets/images/logo-lazada.png';
import cartImg from '~/assets/images/cart.png';
import { routes } from '~/src/utils/constants';
import { useAuth } from '~/src/context/AuthContext';
import Tooltip from '~/src/components/Tooltip';
import useCart from '~/src/hooks/useCart';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const {} = props;

  const { currentUser, logout } = useAuth();
  const [showTooltipAccount, actionTooltip] = useBoolean();
  const { amount } = useCart();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header>
      <div className="h-[115px]">
        <div className="bg-black/[0.03]">
          <div className=" h-[25px] max-w-screen-custom_lg mx-auto">
            <div className="uppercase justify-end font-[400] text-spanish_gray text-[12px] flex gap-2 items-center h-full">
              {currentUser ? (
                <Tooltip
                  hideOnClick
                  interactive
                  onClickOutside={actionTooltip.setFalse}
                  visible={showTooltipAccount}
                  placement="bottom"
                  render={() => (
                    <div className="p-4 rounded-md bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] min-w-[300px]">
                      <div className="flex flex-col text-left">
                        <Link
                          href={routes.MY_ACCOUNT}
                          className="text-left px-4 hover:bg-[rgba(0,0,0,.03)] rounded-md py-2"
                        >
                          My Account
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="text-left px-4 hover:bg-[rgba(0,0,0,.03)] rounded-md py-2"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                >
                  <div onClick={actionTooltip.toggle} className="cursor-pointer select-none">
                    {currentUser.fullName}
                  </div>
                </Tooltip>
              ) : (
                <>
                  <Link className="hover:text-vivid_tangelo" href={routes.SELL_ON_LAZADA}>
                    SELL ON LAZADA
                  </Link>
                  <Link className="hover:text-vivid_tangelo" href={routes.LOGIN}>
                    login
                  </Link>
                  <Link className="hover:text-vivid_tangelo" href={routes.SIGN_UP}>
                    signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-[75px] flex items-center max-w-screen-custom_lg mx-auto ">
            <Link href={routes.HOME} className="relative w-[127px] h-[40px]">
              <Image src={logoLazada.src} layout="fill" alt="" priority />
            </Link>
            <div className="flex-1">
              <div className="h-[45px]">
                <div className="mx-auto h-full w-[688px] bg-anti_flash_white rounded-full overflow-hidden relative">
                  <input
                    type="text"
                    className="w-full h-full bg-transparent outline-none py-[13px] px-[19px] text-[14px]"
                    autoComplete="off"
                    placeholder="Search in Lazada"
                  />
                  <div className="absolute top-0 bottom-0 right-0">
                    <button className="w-[45px] h-[45px] text-[22px]  text-white fill-white flex justify-center items-center font-[500]">
                      <GrSearch className="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <Link href={routes.CART}>
                  <Image src={cartImg.src} alt="" width={29} height={26} priority />
                </Link>
                {!!amount && (
                  <div className="absolute font-medium text-white bg-coral_red w-[20px] flex items-center justify-center rounded-full text-[12px] h-[20px] top-[-10px] right-[-10px]">
                    {amount > 9 ? '9+' : amount}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
