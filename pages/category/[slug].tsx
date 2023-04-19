import { useRouter } from 'next/router';
import * as React from 'react';
import MainLayout from '~/src/components/layouts/MainLayout';

interface SlugCategoryProps {}

const SlugCategory = (props: SlugCategoryProps) => {
  const {} = props;
  const router = useRouter();
  console.log(`file: [slug].tsx:9 ~ router:`, router.query?.slug);

  return <div>[{router.query?.slug}]</div>;
};

SlugCategory.Layout = MainLayout;
export default SlugCategory;
