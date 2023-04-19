import * as React from 'react';

interface PopupProps {
  visible?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

const Popup: React.FC<PopupProps> = (props) => {
  const { visible, children, onClose } = props;

  return visible ? (
    <div className="fixed top-0 bottom-0 left-0 right-0">
      <div onClick={onClose} className="absolute top-0 bottom-0 left-0 right-0  bg-[rgba(0,0,0,.4)]" />
      <div className="!z-[99999]">{children}</div>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Popup);
