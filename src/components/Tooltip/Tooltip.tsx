import classNames from 'classnames';
import * as React from 'react';
import { useBoolean, useOnClickOutside } from 'hooks-react-custom';
import Tippy, { TippyProps, useSingleton } from '@tippyjs/react/headless';

interface ClassesTooltip {
  container?: string;
}

interface TooltipProps extends TippyProps {
  classes?: ClassesTooltip;
  attributesContainer?: any;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { attributesContainer, classes, children, interactive = true, ...rest } = props;

  return (
    <div {...attributesContainer} className={classes?.container}>
      <Tippy interactive={interactive} hideOnClick popperOptions={{ strategy: 'fixed' }} {...rest}>
        {children}
      </Tippy>
    </div>
  );
};

export default Tooltip;
