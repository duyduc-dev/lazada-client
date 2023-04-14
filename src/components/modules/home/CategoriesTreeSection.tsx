import {useBoolean} from 'hooks-react-custom';
import * as React from 'react';
import Tooltip from '~/components/Tooltip';

interface CategoriesTreeSectionProps {}

const CategoriesTreeSection: React.FC<CategoriesTreeSectionProps> = props => {
  const {} = props;

  const [visible, setVisible] = useBoolean();
  const [text, setText] = React.useState('');

  return (
    <Tooltip
      placement="right-start"
      render={() => (
        <Tooltip placement="right-start" render={() => <h1>123</h1>}>
          <div className="h-[344px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] overflow-hidden py-4 px-2 text-[13px] overflow-y-auto text-sonic_silver min-w-[250px] ml-1 bg-white rounded-md">
            {text}
          </div>
        </Tooltip>
      )}
    >
      <div className="shadow-[rgba(149,157,165,0.2)_0px_8px_24px] overflow-hidden overflow-y-auto rounded-md text-[13px] py-4 px-2 text-sonic_silver select-none bg-white flex flex-col h-[344px]">
        {Array(12)
          .fill(0)
          .map((e, i) => (
            <div
              key={`${i}`}
              className="py-1.5 cursor-pointer hover:bg-[rgba(0,0,0,0.03)] rounded-md px-4"
              onClick={setVisible.toggle}
              onMouseOver={() => setText(i + 'hello')}
            >
              Electric device
            </div>
          ))}
      </div>
    </Tooltip>
  );
};

export default CategoriesTreeSection;
