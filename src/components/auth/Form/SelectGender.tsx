import classNames from 'classnames';
import * as React from 'react';

interface SelectGenderProps {
  id?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectGender: React.FC<SelectGenderProps> = (props) => {
  const { label, placeholder, id, name, value, onChange, error } = props;

  return (
    <div className="relative mb-6">
      <label htmlFor={label} className="top-0 mb-4 text-xs h-3.5 leading-4 font-[400]">
        {label}
      </label>
      <select
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames(
          'text-[14px] pl-2 w-full h-10 border border-silver_pink pr-[35px]',
          error && '!border-coral_red'
        )}
      >
        <option className="hidden" defaultChecked>
          Select
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <div>
        <span className="leading-[16px] text-[12px] text-coral_red mb-2.5 font-[400]">{error}</span>
      </div>
    </div>
  );
};

export default SelectGender;
