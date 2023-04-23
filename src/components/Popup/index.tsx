import classNames from 'classnames';
import * as React from 'react';

interface PopupProps {
  visible?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  center?: boolean;
}

const Popup: React.FC<PopupProps> = (props) => {
  const { center = false, visible, children, onClose } = props;

  return visible ? (
    <div className="fixed z-[9999] top-0 bottom-0 left-0 right-0">
      <div onClick={onClose} className="absolute top-0 bottom-0 left-0 right-0  bg-[rgba(0,0,0,.4)]" />
      <div
        className={classNames('!z-[99999]', center && 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')}
      >
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Popup);
