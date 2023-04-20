import Link from 'next/link';
import * as React from 'react';
import utils from '~/src/utils/AppUtils';
import { routes } from '~/src/utils/constants';
import Product from '~/components/Product';
import { useQuery } from 'react-query';
import { onHandleGetAllProduct } from './functions';
import { ProductModel } from '~/src/interfaces/product';

interface ProductSectionProps {}

const ProductSection: React.FC<ProductSectionProps> = (props) => {
  const {} = props;

  const { data } = useQuery<ProductModel[]>('product', async () => {
    const [err, data] = await onHandleGetAllProduct();
    if (!err && data) return data || [];
  });
  console.log(`file: ProductSection.tsx:19 ~ const{data}=useQuery<ProductModel[]> ~ data:`, data);

  return (
    <div className="pb-10 mt-10 rounded-md">
      <h2 className="text-title_arsenic truncate text-[22px] px-4 py-4 border-b border-platinum">Just For You</h2>
      <div className="mt-10">
        <div className="grid grid-cols-5 gap-5">
          {data?.map((a, i) => (
            <Product key={`${i}`} data={a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
