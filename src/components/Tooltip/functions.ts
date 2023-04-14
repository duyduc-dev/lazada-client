import {PlacementTooltip} from './interfaces';

interface ReturnPlacementTooltip {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}

export const placementTooltip = (p: PlacementTooltip): ReturnPlacementTooltip => {
  switch (p) {
    case 'top':
      return {
        bottom: '100%',
        left: '50%',
        right: '50%',
      };
    case 'bottom':
      return {
        top: '100%',
        left: '50%',
        right: '50%',
      };
    case 'left':
      return {
        right: '100%',
        top: '50%',
        bottom: '50%',
      };
    case 'right':
      return {
        top: '50%',
        bottom: '50%',
        left: '100%',
      };
    case 'top-start':
      return {
        bottom: '100%',
        left: 0,
      };
    case 'top-end':
      return {
        bottom: '100%',
        right: 0,
      };
    case 'bottom-start':
      return {
        top: '100%',
        left: 0,
      };
    case 'bottom-end':
      return {
        top: '100%',
        right: 0,
      };
    case 'left-start':
      return {
        right: '100%',
        top: 0,
      };
    case 'left-end':
      return {
        right: '100%',
        bottom: 0,
      };
    case 'right-start':
      return {
        left: '100%',
        top: 0,
      };
    case 'right-end':
      return {
        left: '100%',
        bottom: 0,
      };
    default:
      return {};
  }
};
