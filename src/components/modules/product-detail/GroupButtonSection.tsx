import Image from "next/legacy/image";
import * as React from "react";

import addToCart from "~/assets/add-to-cart.webp";

interface GroupButtonSectionProps {
  onClickBuyNow?: React.MouseEventHandler<HTMLButtonElement>;
  onClickAddToCart?: React.MouseEventHandler<HTMLButtonElement>;
}

const GroupButtonSection: React.FC<GroupButtonSectionProps> = (props) => {
  const { onClickAddToCart, onClickBuyNow } = props;

  return (
    <div className="flex items-center flex-1 gap-3 my-5">
      <button
        onClick={onClickBuyNow}
        className="bg-[linear-gradient(#f52f32,#e11b1e)] hover:opacity-80 transition-all duration-200 w-[calc(100%_-_80px)] text-white px-3 font-medium rounded-md py-4"
      >
        BUY NOW
      </button>
      <button
        onClick={onClickAddToCart}
        className="border-2 hover:opacity-80 border-blood_orange text-blood_orange w-[60px] rounded-md h-[60px]"
      >
        <div className="relative translate-y-1 w-[30px] h-[30px] mx-auto">
          <Image
            src={addToCart.src}
            className="w-full h-full"
            alt=""
            layout="fill"
            priority
          />
        </div>
        <span className="text-[10px]">Add to cart</span>
      </button>
    </div>
  );
};

export default GroupButtonSection;
