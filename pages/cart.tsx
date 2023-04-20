import MainLayout from '~/src/components/layouts/MainLayout';
import { BsTrash } from 'react-icons/bs';
import WrapCart from '~/src/components/Cart/WrapCart';
import OrderSummary from '~/src/components/Cart/OrderSummary';

const Cart = () => {
  return (
    <div className="min-h-[675px] bg-cultured pb-20">
      <div className="container w-[1188px] m-auto mx-20px flex justify-center ">
        <div className="box-border">
          <div className=" container flex justify-center mt-[12px]">
            <div className="container w-[788px]">
              <div className="mb-[12px] flex  bg-white">
                <div className="flex w-full">
                  <div className="px-[12px]">
                    <label>
                      <input className="scale-125 border-[12px] outline-none" type="checkbox" />
                      <span className="ml-[30px] text-[12px] text-sonic_silver">SELECT ALL</span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-center mt-[4px] text-[16px] text-sonic_silver">
                    <BsTrash />
                    <span className="ml-[5px] text-[12px] text-sonic_silver bottom-[1px] relative">DELETE</span>
                  </div>
                </div>
              </div>
              <WrapCart />
              <WrapCart />
              <WrapCart />
            </div>
            <div className=" w-[388px]">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.Layout = MainLayout;
export default Cart;
