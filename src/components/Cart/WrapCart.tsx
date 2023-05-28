import { IoIosArrowForward } from 'react-icons/io';
import React from 'react';
import { SellerCartModel } from '~/src/interfaces/cart';

interface WrapCartProps {
  children: React.ReactNode;
  seller: SellerCartModel;
}

function WrapCart(props: WrapCartProps) {
  const { children, seller } = props;
  return (
    <div className="overflow-hidden cart py-2">
      <div className="">
        <div className="rounded-md flex pl-[12px]  bg-white mb-[2px]">
          <label htmlFor="">
            <input className=" mt-2 mr-[16px] scale-125 border-[12px] leading" type="checkbox" />
          </label>
          <div className="flex justify-between w-full ">
            <div className="flex text-[14px] text-raisin_black mt-2  relative">
              <img
                alt=""
                className="mr-[6px] h-[12px]"
                src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01GlrQiX1rbI98A7PB1_!!6000000005649-2-tps-94-36.png_2200x2200q75.png_.webp"
              />
              <span className="relative bottom-1">{seller.fullName}</span>
              <IoIosArrowForward />
            </div>
            <div className="z-10 border-b-gray-700"></div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden">
          <div className="py-3 bg-white overflow-hidden">{children}</div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
export default WrapCart;
