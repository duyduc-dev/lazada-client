import { SwiperOptions } from "swiper";
import { SwiperProps } from "swiper/react";

export interface BreakpointsModel {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
}

export interface CarouselClasses {
  container?: string;
  wrapNavigate?: string;
  nextSlide?: string;
  prevSlide?: string;
}

export interface CarouselProps extends SwiperProps {
  data: ReadonlyArray<any> | null | undefined;
  controls?: boolean;
  nextSlide?: React.ReactNode;
  prevSlide?: React.ReactNode;
  hideNavigateOnBegin?: boolean;
  hideNavigateOnEnd?: boolean;
  classes?: CarouselClasses;
  hoverShowNavigate?: boolean;
  onRenderItem?: (item?: any, index?: number) => React.ReactElement | null;
}
