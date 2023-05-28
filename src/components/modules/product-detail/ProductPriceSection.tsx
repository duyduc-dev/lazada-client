import * as React from 'react';
import { ProductTypeModel } from '~/src/interfaces/product';
import utils from '~/src/utils/AppUtils';

interface ProductPriceSectionProps {
  price: number;
  discount?: number;
}

const ProductPriceSection: React.FC<ProductPriceSectionProps> = (props) => {
  const { price, discount } = props;

  return (
    <div>
      <p className="flex items-start gap-1 mt-2 font-bold text-[30px] text-blood_orange">
        {utils.formatMoney(discount ? price - +discount * +(price || 0) : price)}
        <span className="underline text-[12px]">đ</span>
      </p>
      <div>
        {discount != 0 && discount && (
          <div className="flex items-center gap-3">
            <div>
              {discount && (
                <p className="flex items-start gap-1 mt-2 font-bold line-through text-nickel text-[14px]">
                  {utils.formatMoney(price)}
                  <span className="underline text-[12px]">đ</span>
                </p>
              )}
            </div>
            <p>-{+discount * 100}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPriceSection;
