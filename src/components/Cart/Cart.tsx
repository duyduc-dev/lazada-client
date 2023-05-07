import { useInput } from 'hooks-react-custom';
import { ChangeEventHandler } from 'react';
import { BsHeart, BsTrash } from 'react-icons/bs';
import { ProductCartModel } from '~/src/interfaces/cart';
import utils from '~/utils/AppUtils';

interface CartProductProps {
  product: ProductCartModel;
}
function CartProduct(props: CartProductProps) {
  const { product } = props;
  const { eventBind, setValue, value } = useInput(1);

  const handleClickDecrementQuantity = () => {
    +value > 1 && setValue((a) => `${Number(a) - 1}`);
  };
  const handleClickIncrementQuantity = () => {
    setValue((a) => `${Number(a) + 1}`);
  };

  return (
    <div className="flex bg-white flex-nowrap py-[16px]  px-[16px]">
      <div className="pl-[10px]">
        <div className="flex mb-3">
          <input className="mt-2 mr-[16px] scale-125 border-[12px] leading relative right-[13px]" type="checkbox" />
          <div className="relative right-3">
            <img className="max-w-[80px] mr-[10px]" src={product.image} alt="" />
          </div>

          <div className="ml-[20px] ">
            <span className="block text-2-line w-full text-[14px] leading-4 text-raisin_black">{product.title}</span>
            <span className="block mt-[6px] text-[12px] text-sonic_silver_2 ">{product.type.type}</span>
          </div>
        </div>
      </div>
      <div className="w-[156px] pl-4">
        <p className="text-[18px] text-vivid_tangelo font-medium">{utils.formatMoney(product.price)}</p>
        <div className="mt-[10px] text-[spanish_gray] flex cursor-pointer">
          <div>
            <BsHeart />
          </div>
          <div className="ml-3">
            <BsTrash />
          </div>
        </div>
      </div>
      <div className="w-[139px]">
        <div className="relative flex flex-row w-full h-10 mt-1 bg-transparent">
          <button
            onClick={handleClickDecrementQuantity}
            className="bg-anti_flash_white w-[32px] h-[32px] hover:bg-gainsboro disabled:bg-lotion"
            disabled={+value <= 1}
          >
            -
          </button>
          <input
            className="w-[44px] h-[30px] text-center border-transparent focus:border-blue_green border"
            autoComplete="off"
            {...eventBind}
          />
          <button
            className="bg-anti_flash_white w-[32px] h-[32px] hover:bg-gainsboro "
            onClick={handleClickIncrementQuantity}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartProduct;
