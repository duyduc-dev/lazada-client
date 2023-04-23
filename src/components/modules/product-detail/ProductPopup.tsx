import { useBoolean, useLocalStorage } from 'hooks-react-custom';
import * as React from 'react';
import Popup from '~/components/Popup';
import Button from '~/components/Button';
import { useAuth } from '~/src/context/AuthContext';
import { useRouter } from 'next/router';
import { LOCAL_REDIRECT_PATH, routes } from '~/src/utils/constants';

interface ProductPopupProps {
  visible?: boolean;
  onClose?: () => void;
}

const ProductPopup: React.FC<ProductPopupProps> = (props) => {
  const { visible, onClose } = props;
  const router = useRouter();
  const [, setRedirect] = useLocalStorage(LOCAL_REDIRECT_PATH, routes.HOME);

  const handleRedirectLogin = () => {
    setRedirect(router.asPath);
    router.push(routes.LOGIN);
  };

  return (
    <Popup center onClose={onClose} visible={visible}>
      <div className="bg-white p-4 px-5 rounded-md min-w-[300px]">
        <h2 className="font-medium text-[20px]">Notice</h2>
        <hr />
        <p className="text-[14px] text-nickel my-3">You need to be logged in to continue shopping </p>
        <div className="mt-5 flex gap-4 justify-end">
          <Button primary onClick={handleRedirectLogin}>
            Login
          </Button>
          <Button outline onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default ProductPopup;
