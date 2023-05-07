import Link from 'next/link';
import * as React from 'react';
import utils from '~/src/utils/AppUtils';
import { routes } from '~/src/utils/constants';
import flag from '~/assets/flag.svg';
import Image from 'next/image';
import Rating from './Rating';
import { ProductModel, ProductTypeModel } from '~/src/interfaces/product';

interface ProductProps {
  data?: ProductModel;
}

const Product: React.FC<ProductProps> = (props) => {
  const { data } = props;
  const [firstProdType, setFirstProdType] = React.useState<ProductTypeModel>(data?.productTypes?.[0] || {});

  return (
    <div>
      <Link
        href={`${routes.PRODUCT}/${data?.slug}`}
        className="h-full transition-all relative duration-300 flex flex-col border-none hover:shadow-[0_2px_5px_0_rgba(0,0,0,.25)] justify-center px-5 pt-5 bg-white rounded-md pb-7"
      >
        {!!data?.productTypes?.[0].discount && (
          <div className="absolute top-2 left-[-4px]">
            <Image src={flag} alt="" width={80} />
            <span className="absolute top-1 block text-white right-3 text-[12px] font-bold">
              Giảm {+data?.productTypes?.[0].discount * 100}%
            </span>
          </div>
        )}
        <div
          className="mx-auto"
          style={{
            backgroundImage: `url(${data?.productTypes?.[0].image})`,
            backgroundRepeat: 'no-repeat',
            width: 160,
            height: 160,
            backgroundSize: 'contain',
            backgroundPositionX: 'center',
          }}
        ></div>
        <div className="mt-2">
          <h3 className="text-2-line text-[14px] leading-5 font-medium">{data?.title}</h3>
          <div className="flex items-end gap-2">
            <p className="flex items-start gap-1 mt-2 font-bold text-blood_orange">
              {utils.formatMoney(
                data?.productTypes?.[0].discount
                  ? +(data?.productTypes?.[0].discount || 0) * +(firstProdType.price || 0)
                  : firstProdType.price
              )}
              <span className="underline text-[12px]">đ</span>
            </p>
            {!!data?.productTypes?.[0].discount && (
              <p className="flex items-start gap-1 mt-2 font-bold line-through text-nickel text-[14px]">
                {utils.formatMoney(firstProdType.price)}
                <span className="underline text-[12px]">đ</span>
              </p>
            )}
          </div>
          {data?.description && (
            <div className="p-2 border rounded-md bg-anti_flash_white  text-[12px] mt-2">
              <p className="max-h-[36px] text-2-line">{data.description}</p>
            </div>
          )}
          {data && (data?.rating || 0) > 0 && <Rating rate={data.rating} />}
        </div>
      </Link>
    </div>
  );
};

export default Product;
