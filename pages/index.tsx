import Head from 'next/head';
import MainLayout from '~/src/components/layouts/MainLayout';
import CarouselSection from '~/src/components/modules/home/CarouselSection';
import CategoriesTreeSection from '~/src/components/modules/home/CategoriesTreeSection';

export default function Home() {
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
        </div>
      </div>
    </>
  );
}

Home.Layout = MainLayout;
