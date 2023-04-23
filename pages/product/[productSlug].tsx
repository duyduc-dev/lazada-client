import { useBoolean, useInput, useIsClient } from 'hooks-react-custom';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as React from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import Rating from '~/src/components/Product/Rating';
import MainLayout from '~/src/components/layouts/MainLayout';
import { ProductModel, ProductTypeModel } from '~/src/interfaces/product';
import { onHandleGetProductBySlug } from '~/src/services/product';
import { productTypeStore } from '~/src/store/ProductStore';
import {
  GroupButtonSection,
  PreviewImageSection,
  ProductInfoSellerSection,
  ProductPopup,
  ProductPriceSection,
  ProductQuantity,
  ProductTypeSection,
} from '~/src/components/modules/product-detail';
import { useAuth } from '~/src/context/AuthContext';

const ProductDetail = () => {
  const router = useRouter();
  const { data } = useQuery<ProductModel>(`product-${router.query?.productSlug}`, async () => {
    const [err, data] = await onHandleGetProductBySlug(`${router.query?.productSlug}`);
    return (!err && data) || {};
  });
  const { currentUser } = useAuth();
  const { value: quantityProduct, setValue } = useInput(1);
  const productTypeValue = useRecoilValue(productTypeStore);
  const [productTypePick, setProductTypePick] = React.useState<ProductTypeModel>();
  const [showPopup, setShowPopup] = useBoolean(false);

  const imagesAllProduct: string[] =
    React.useMemo(() => data?.productTypes?.map((i) => i.image || '').filter((x) => x), [data?.productTypes]) || [];

  const handleClickBuyNow: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!currentUser) {
      setShowPopup.setTrue();
      return;
    }
    console.log({
      quantity: +quantityProduct,
      sellerId: data?.vendor?.id,
      productId: data?.id,
      typeId: productTypePick?.id,
    });
  };

  return (
    <>
      <Head>
        <title>{data?.title || 'lazada'}</title>
      </Head>
      <div>
        <div className="py-10 bg-anti_flash_white">
          <div className="flex gap-5 px-5 py-10 mx-auto bg-white rounded-md max-w-screen-custom_lg">
            <div>
              <PreviewImageSection images={imagesAllProduct || []} />
            </div>
            <div>
              <h1 className="font-normal text-[22px] text-raisin_black mb-5">{data?.title}</h1>
              <p className="text-nickel text-[14px]">{data?.description}</p>
              <Rating rate={data?.rating} />
              <div className="flex items-center justify-between">
                <ProductPriceSection
                  price={productTypeValue.price || data?.productTypes?.[0].price || 0}
                  discount={+(data?.discount || 1)}
                />
                <div className="mr-10">{/* <ShareSection /> */}</div>
              </div>
              <hr className="my-5" />
              <div className="flex">
                <div className="flex-1">
                  <div className="flex items-center my-2 flex-1">
                    <div className="w-[92px] text-[14px] text-sonic_silver">Quantity:</div>
                    <div>
                      <ProductQuantity value={quantityProduct} setValue={setValue} />
                    </div>
                  </div>
                  <div>
                    <ProductTypeSection
                      setCurrentPick={setProductTypePick}
                      currentTypeActive={productTypePick}
                      types={data?.productTypes || []}
                    />
                  </div>
                </div>
                <GroupButtonSection onClickBuyNow={handleClickBuyNow} />
              </div>
            </div>
          </div>
          <div>
            <ProductInfoSellerSection sellerData={data?.vendor || {}} />
          </div>
        </div>
      </div>
      <ProductPopup visible={showPopup} onClose={setShowPopup.setFalse} />
    </>
  );
};

ProductDetail.Layout = MainLayout;

export default ProductDetail;
