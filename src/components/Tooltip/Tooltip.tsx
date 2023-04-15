import classNames from 'classnames';
import * as React from 'react';
import {TooltipProps} from './interfaces';
import {placementTooltip} from './functions';
import {useBoolean} from 'hooks-react-custom';

const Tooltip: React.FC<TooltipProps> = props => {
  const {children, visible = undefined, placement = 'bottom', render} = props;

  const [visibleTooltip, setVisibleTooltip] = useBoolean(false);

  return (
    <div className={classNames('relative')}>
      <div
        onMouseOver={typeof visible === 'undefined' ? setVisibleTooltip.setTrue : () => {}}
        onMouseLeave={typeof visible === 'undefined' ? setVisibleTooltip.setFalse : () => {}}
      >
        {children}
      </div>
      <div
        style={{
          ...placementTooltip(placement),
        }}
        className={classNames(
          'absolute opacity-0 transition-all duration-300 z-[-1] pointer-events-none',
          (visible || visibleTooltip) && '!opacity-100 !pointer-events-auto !z-[1000]'
        )}
      >
        {render?.()}
      </div>
    </div>
  );
};

export default Tooltip;
