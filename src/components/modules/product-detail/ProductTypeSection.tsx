import classNames from 'classnames';
import * as React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { AiFillCheckCircle, AiOutlineCheck } from 'react-icons/ai';
import { ProductTypeModel } from '~/src/interfaces/product';
import { productTypeStore } from '~/src/store/ProductStore';

interface ProductTypeSectionProps {
  types: ProductTypeModel[];
  currentTypeActive?: ProductTypeModel;
  setCurrentPick: React.Dispatch<React.SetStateAction<ProductTypeModel | undefined>>;
}

const ProductTypeSection: React.FC<ProductTypeSectionProps> = (props) => {
  const { types, currentTypeActive, setCurrentPick } = props;

  const [currentType, setCurrentType] = React.useState<ProductTypeModel>(types[0]);
  const [typeHover, setProductHover] = useRecoilState(productTypeStore);

  const handleMouseOver = (type: ProductTypeModel) => {
    return () => {
      setCurrentType(type);
      setProductHover(type);
    };
  };

  const handleClickType = () => {
    setCurrentPick(typeHover);
  };

  return (
    <div className="flex my-2 flex-1">
      <div className="w-[92px] text-[14px] text-sonic_silver">Type:</div>
      <div>
        <p>{currentType?.type}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {types.map((type, i) => (
            <div
              key={`${i}-${type.type}`}
              className={classNames(
                'relative h-[40px] w-[40px] border cursor-pointer hover:border-blood_orange',
                currentTypeActive?.id === type.id && 'border-blood_orange text-blood_orange'
              )}
              onMouseOver={handleMouseOver(type)}
              onClick={handleClickType}
            >
              <img src={type.image} alt="" className="w-full h-full cursor-pointer" />
              {currentTypeActive?.id === type.id && (
                <div className="absolute bottom-0 right-0">
                  <AiFillCheckCircle />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTypeSection;
