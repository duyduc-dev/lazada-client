import { useBoolean, useCopyToClipboard } from 'hooks-react-custom';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BsFillShareFill } from 'react-icons/bs';
import Tooltip from '~/components/Tooltip';

interface ShareSectionProps {}

const ShareSection: React.FC<ShareSectionProps> = (props) => {
  const {} = props;
  const router = useRouter();
  const fullUrl = `${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`;
  const [show, setShow] = useBoolean();
  console.log(`file: ShareSection.tsx:14 ~ fullUrl:`, fullUrl);
  const [copyedValue, copyFn] = useCopyToClipboard();
  const render = (attr: any) => (
    <div {...attr} className="bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-md p-3 min-w-[200px]">
      <div className="text-[14px] py-2 px-2 text-title_arsenic hover:bg-[rgba(0,0,0,0.03)] rounded-md cursor-pointer">
        Copy link
      </div>
    </div>
  );

  return (
    <div>
      <Tooltip hideOnClick visible={show} placement="bottom-end" render={render}>
        <div onClick={setShow.toggle} className="cursor-pointer text-sonic_silver text-[20px] ">
          <BsFillShareFill />
        </div>
      </Tooltip>
    </div>
  );
};

export default ShareSection;
