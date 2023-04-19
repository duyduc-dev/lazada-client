import { useInput } from 'hooks-react-custom';
import { BsHeart, BsTrash } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import CartProduct from './Cart';

interface WrapCartProps {}
function WrapCart(props: WrapCartProps) {
  const { eventBind, setValue, value } = useInput(1);

  const handleClickDecrementQuantity = () => {
    +value > 1 && setValue((a) => `${Number(a) - 1}`);
  };
  const handleClickIncrementQuantity = () => {
    setValue((a) => `${Number(a) + 1}`);
  };

  return (
    <div className="cart ">
      <div className="">
        <div className="flex pl-[12px]  bg-white mb-[2px]">
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
              <span className="relative bottom-1">ZODAN Corporation</span>
              <IoIosArrowForward />
            </div>
            <div className="z-10 border-b-gray-700"></div>
          </div>
        </div>
        <div className="">
          <div className="">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>
          <div className="pb-4"></div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
export default WrapCart;
