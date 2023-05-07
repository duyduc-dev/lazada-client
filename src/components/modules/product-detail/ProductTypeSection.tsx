import classNames from 'classnames';
import * as React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { ProductTypeModel } from '~/src/interfaces/product';

interface ProductTypeSectionProps {
  types: ProductTypeModel[];
  currentTypeActive?: ProductTypeModel;
  setCurrentPick: () => void;
  setTypeHover: React.Dispatch<React.SetStateAction<ProductTypeModel | undefined>>;
}

const ProductTypeSection: React.FC<ProductTypeSectionProps> = (props) => {
  const { types, currentTypeActive, setCurrentPick, setTypeHover } = props;

  const [currentType, setCurrentType] = React.useState<ProductTypeModel>(types[0]);

  const handleMouseOver = (type: ProductTypeModel) => {
    return () => {
      setCurrentType(type);
      setTypeHover(type);
    };
  };

  return (
    <div className="flex flex-1 my-2">
      <div className="w-[92px] text-[14px] text-sonic_silver">Type:</div>
      <div>
        <p>{currentType?.type || 'Select your type'}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {types.map((type, i) => (
            <div
              key={`${i}-${type.type}`}
              className={classNames(
                'relative h-[40px] w-[40px] border cursor-pointer hover:border-blood_orange',
                currentTypeActive?.id === type.id && 'border-blood_orange text-blood_orange'
              )}
              onMouseOver={handleMouseOver(type)}
              onClick={setCurrentPick}
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
