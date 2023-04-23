import * as React from 'react';

interface ProductQuantityProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const ProductQuantity: React.FC<ProductQuantityProps> = (props) => {
  const { setValue, value = 1 } = props;

  const handleClickDecrementQuantity = () => {
    +value > 1 && setValue((a) => `${Number(a) - 1}`);
  };
  const handleClickIncrementQuantity = () => {
    setValue((a) => `${Number(a) + 1}`);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const valueInput = e.target.value;
    if (/^[0-9]+$/.test(valueInput)) setValue(valueInput);
    else setValue('1');
  };
  return (
    <div>
      <div className="relative flex flex-row w-full h-10 mt-1 bg-transparent">
        <button
          onClick={handleClickDecrementQuantity}
          className="bg-anti_flash_white w-[32px] h-[32px] hover:bg-gainsboro disabled:bg-lotion"
          disabled={+value <= 1}
        >
          -
        </button>
        <input
          className="w-[44px] h-[30px] text-center border-transparent focus:border-blue_green border"
          autoComplete="off"
          value={value || 1}
          onChange={handleInputChange}
        />
        <button
          className="bg-anti_flash_white w-[32px] h-[32px] hover:bg-gainsboro "
          onClick={handleClickIncrementQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
