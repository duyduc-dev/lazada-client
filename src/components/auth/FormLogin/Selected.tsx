import classNames from 'classnames';
import * as React from 'react';
interface SelectedProps {
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  autoComplete?: 'on' | 'off';
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Selected: React.FC<SelectedProps> = (props) => {
  const { autoComplete = 'off', label, placeholder, value, onChange, error } = props;
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    onChange(e);
  };
  return (
    <div className="relative mb-6">
      <label htmlFor={label} className="top-0 mb-4 text-xs h-3.5 leading-4 font-[400]">
        {label}
      </label>
      <select
        id={label}
        placeholder={placeholder}
        value={selectedValue}
        autoComplete={autoComplete}
        onChange={handleSelectChange}
        className={classNames(
          'text-[14px] pl-2 w-full h-10 border border-silver_pink pr-[35px]',
          error && '!border-coral_red'
        )}
      >
        <option className="hidden" value="">
          Select
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div>
        <span className="leading-[16px] text-[12px] text-coral_red mb-2.5 font-[400]">{error}</span>
      </div>
    </div>
  );
};

export default Selected;
