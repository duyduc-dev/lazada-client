import Image from 'next/legacy/image';
import * as React from 'react';
import { AuthUserModel } from '~/src/interfaces/auth';
import { ProductSellerModel } from '~/src/interfaces/product';

import avtPlaceholder from '~/assets/images/Avatar-Placeholder-400x400-1.jpg';

interface ProductInfoSellerSectionProps {
  sellerData: ProductSellerModel;
}

const ProductInfoSellerSection: React.FC<ProductInfoSellerSectionProps> = (props) => {
  const { sellerData } = props;

  return (
    <div className="mt-5 max-w-screen-custom_lg mx-auto py-4 px-4 bg-white rounded-md">
      <div className="flex gap-5">
        <div className="relative w-[78px] h-[78px] rounded-full overflow-hidden">
          <Image alt="" src={sellerData.avatar || avtPlaceholder.src} layout="fill" priority />
        </div>
        <div>
          <h2 className="text-title_arsenic font-medium">{sellerData.fullName}</h2>
          <p className="text-silver_pink">{sellerData.username}</p>
        </div>
        <div className="mt-3">
          <button className="hover:bg-[rgba(0,0,0,.03)] py-2 border px-3">Go to Shop</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSellerSection;
