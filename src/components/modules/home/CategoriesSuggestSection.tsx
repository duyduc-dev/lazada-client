import * as React from 'react';
import { useQuery } from 'react-query';
import { onHandleGetCategories } from './functions';
import { CategoryModel } from '~/src/interfaces/category';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { routes } from '~/src/utils/constants';

interface CategoriesSuggestSectionProps {}

const CategoriesSuggestSection: React.FC<CategoriesSuggestSectionProps> = (props) => {
  const {} = props;

  const { data } = useQuery<CategoryModel[]>('categories', async () => {
    const [err, data] = await onHandleGetCategories();
    if (!err && data) return data?.length > 0 ? data?.filter((item: CategoryModel) => item?.image) : [];
  });

  return (
    <div className="pb-10 mt-10 bg-white rounded-md">
      <h2 className="text-title_arsenic truncate text-[22px] px-4 py-4 border-b border-platinum">Categories</h2>
      <div>
        <div className="grid grid-cols-8 grid-rows-2">
          {data?.map((a, i) => (
            <Link
              href={`${routes.CATEGORY}/${a?.slug}`}
              key={`${i}-${a.id}-${a.name}`}
              className="border-r border-b border-platinum transition-all duration-200 hover:rounded-md hover:shadow-[0_2px_4px_0_rgba(0,0,0,.25)] relative flex flex-col items-center text-[14px] text-raisin_black pt-4"
            >
              <div
                style={{
                  backgroundImage: `url(${a?.image})`,
                  backgroundRepeat: 'no-repeat',
                  width: 80,
                  height: 80,
                  backgroundSize: 'contain',
                }}
              ></div>
              <div className="px-3 pt-2 pb-1 text-center">{a?.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSuggestSection;
