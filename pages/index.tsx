import Head from "next/head";
import { useEffect } from "react";
import { selectCarts } from "~/src/components/Cart/store/cartSelect";
import { fetchCart } from "~/src/components/Cart/store/cartThunk";
import MainLayout from "~/src/components/layouts/MainLayout";
import CarouselSection from "~/src/components/modules/home/CarouselSection";
import CategoriesSuggestSection from "~/src/components/modules/home/CategoriesSuggestSection";
import CategoriesTreeSection from "~/src/components/modules/home/CategoriesTreeSection";
import ProductSection from "~/src/components/modules/home/ProductSection";
import { useAppDispatch, useAppSelector } from "~/src/hooks/redux";

export default function Home() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCarts);

  console.log("cart =>>>", cart);
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  return (
    <>
      <Head>
        <title>Lazada</title>
      </Head>
      <div className="pt-8 pb-8 bg-cultured">
        <div className="mx-auto max-w-screen-custom_lg">
          <div className="flex min-w-[250px] gap-3">
            <div className="w-[250px]">
              <CategoriesTreeSection />
            </div>
            <div className="w-[calc(1188px_-_250px)]">
              <CarouselSection />
            </div>
          </div>
          <div>
            <CategoriesSuggestSection />

            <ProductSection />
          </div>
        </div>
      </div>
    </>
  );
}

Home.Layout = MainLayout;
