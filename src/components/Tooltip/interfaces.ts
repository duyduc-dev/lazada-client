import React from 'react';

export interface TooltipProps {
  children: React.ReactNode;
  visible?: boolean;
  placement?: PlacementTooltip;
  render?: () => React.ReactElement;
}

export type PlacementTooltip =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';
