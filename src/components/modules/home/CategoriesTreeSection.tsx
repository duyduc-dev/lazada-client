import * as React from 'react';
import { useQuery } from 'react-query';
import { BsFillCaretRightFill } from 'react-icons/bs';
import Tooltip from '~/components/Tooltip';
import { onHandleGetCategoriesTree } from './functions';
import { CategoriesTree } from '~/src/interfaces/category';
import Link from 'next/link';

interface CategoriesTreeSectionProps {}

const CategoriesTreeSection: React.FC<CategoriesTreeSectionProps> = (props) => {
  const {} = props;
  const query = useQuery<CategoriesTree[]>('categories-tree', onHandleGetCategoriesTree);
  const [categoryLevel2, setCategoryLevel2] = React.useState<CategoriesTree[]>([]);
  const [categoryLevel3, setCategoryLevel3] = React.useState<CategoriesTree[]>([]);

  const renderLevel3 = React.useCallback(
    () => (
      <div className="h-[344px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] overflow-hidden py-4 px-2 text-[13px] overflow-y-auto text-sonic_silver min-w-[250px] ml-1 bg-white rounded-md">
        {categoryLevel3?.map((e, i) => (
          <div key={`${i}`} className="py-1.5 cursor-pointer hover:bg-[rgba(0,0,0,0.03)] rounded-md px-4">
            <Link href={`/category/${e.slug}`} className="flex items-center justify-between">
              <span>{e.name}</span>
              {e.children && e?.children?.length > 0 && (
                <div>
                  <BsFillCaretRightFill />
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    ),
    [categoryLevel3]
  );

  const render = React.useCallback(
    (attr: any) => (
      <Tooltip
        attributesContainer={attr}
        offset={[0, 0]}
        placement="right-start"
        render={categoryLevel3.length > 0 ? renderLevel3 : () => <></>}
      >
        <div className="h-[344px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] overflow-hidden py-4 px-2 text-[13px] overflow-y-auto text-sonic_silver min-w-[250px] ml-1 bg-white rounded-md">
          {categoryLevel2?.map((e, i) => (
            <div
              key={`${i}`}
              className=" cursor-pointer hover:bg-[rgba(0,0,0,0.03)] rounded-md "
              onMouseOver={() => setCategoryLevel3(e.children || [])}
            >
              <Link href={`/category/${e.slug}`} className="py-1.5 px-4 flex items-center justify-between">
                <span>{e.name}</span>
                {e.children && e?.children?.length > 0 && (
                  <div>
                    <BsFillCaretRightFill />
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>
      </Tooltip>
    ),
    [categoryLevel2]
  );

  return (
    <Tooltip placement="right" offset={[0, 0]} render={categoryLevel2.length > 0 ? render : () => <></>}>
      <div className="shadow-[rgba(149,157,165,0.2)_0px_8px_24px] overflow-hidden overflow-y-auto rounded-md text-[13px] py-4 px-2 text-sonic_silver select-none bg-white flex flex-col h-[344px]">
        {query.data?.map((e, i) => (
          <div
            key={`${i}`}
            className=" cursor-pointer hover:bg-[rgba(0,0,0,0.03)] rounded-md "
            onMouseOver={() => setCategoryLevel2(e.children || [])}
          >
            <Link href={`/category/${e.slug}`} className="py-1.5 px-4 flex items-center justify-between">
              <span>{e.name}</span>
              {e.children && e?.children?.length > 0 && (
                <div>
                  <BsFillCaretRightFill />
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </Tooltip>
  );
};

export default CategoriesTreeSection;
