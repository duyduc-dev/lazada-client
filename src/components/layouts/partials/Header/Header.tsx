import Image from 'next/image';
import * as React from 'react';
import {GrSearch} from 'react-icons/gr';
import logoLazada from '~/assets/images/logo-lazada.png';
import cartImg from '~/assets/images/cart.png';
import Link from 'next/link';
import {routes} from '~/src/utils/constants';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => {
  const {} = props;
  return (
    <header>
      <div className="h-[115px] ">
        <div className="bg-black/[0.03]">
          <div className=" h-[25px] max-w-screen-custom_lg mx-auto">
            <div className="uppercase justify-end font-[400] text-spanish_gray text-[12px] flex gap-2 items-center h-full">
              <Link href={routes.LOGIN}>login</Link>
              <Link href={routes.SIGN_UP}>signup</Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-[75px] flex items-center max-w-screen-custom_lg mx-auto ">
            <Link href={routes.HOME} className="relative">
              <Image src={logoLazada.src} alt="" width={127} height={40} priority />
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
                <Image src={cartImg.src} alt="" width={29} height={26} priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
