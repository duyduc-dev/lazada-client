import * as React from "react";
import Tippy, { TippyProps } from "@tippyjs/react/headless";

interface ClassesTooltip {
  container?: string;
}

interface TooltipProps extends TippyProps {
  classes?: ClassesTooltip;
  attributesContainer?: any;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    attributesContainer,
    visible,
    classes,
    children,
    interactive = true,
    ...rest
  } = props;

  return (
    <div {...attributesContainer} className={classes?.container}>
      <Tippy
        interactive={interactive}
        visible={visible}
        popperOptions={{ strategy: "fixed" }}
        {...rest}
      >
        {children}
      </Tippy>
    </div>
  );
};

export default Tooltip;
