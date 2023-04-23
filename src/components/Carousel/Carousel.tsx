import classNames from 'classnames';
import * as React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useHover } from 'hooks-react-custom';
import { CarouselProps } from './interfaces';

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel: React.FC<CarouselProps> = (props) => {
  const {
    controls,
    classes,
    data,
    nextSlide,
    prevSlide,
    hideNavigateOnBegin,
    hideNavigateOnEnd,
    hoverShowNavigate,
    onRenderItem,
    onSlideChange,
    ...rest
  } = props;

  const [swiperRef, setSwiperRef] = React.useState<any>();
  const [hoverRef, isHover] = useHover<HTMLDivElement>();
  const [isSlideStickWall, setIsSlideStickWall] = React.useState({
    begin: true,
    end: false,
  });

  const handlePrevSlide = React.useCallback(() => {
    if (!swiperRef) return;
    swiperRef?.slidePrev();
  }, [swiperRef]);
  const handleNextSlide = React.useCallback(() => {
    if (!swiperRef) return;
    swiperRef?.slideNext();
  }, [swiperRef]);

  const handleSLideChange = React.useCallback(
    (swiper: any) => {
      onSlideChange?.(swiper);
      controls &&
        setIsSlideStickWall({
          begin: swiper?.isBeginning || false,
          end: swiper?.isEnd || false,
        });
    },
    [controls, onSlideChange]
  );

  return (
    <div ref={hoverRef} className={classNames('relative !z-[10]', classes?.container)}>
      {controls && (
        <div
          className={classNames(hoverShowNavigate ? (isHover ? '!block' : '!hidden') : 'block', classes?.wrapNavigate)}
        >
          <div
            onClick={handlePrevSlide}
            className={classNames(
              'absolute left-0 -translate-x-1/2 z-10 -translate-y-1/2 top-1/2',
              classes?.prevSlide,
              hideNavigateOnBegin && isSlideStickWall.begin && '!hidden'
            )}
          >
            {prevSlide}
          </div>
          <div
            onClick={handleNextSlide}
            className={classNames(
              'absolute right-0 z-10 translate-x-1/2 -translate-y-1/2 top-1/2',
              classes?.nextSlide,
              hideNavigateOnEnd && isSlideStickWall.end && '!hidden'
            )}
          >
            {nextSlide}
          </div>
        </div>
      )}
      <Swiper onSwiper={setSwiperRef} modules={[Autoplay, Pagination]} onSlideChange={handleSLideChange} {...rest}>
        {(data?.length || 0) > 0 &&
          data?.map((item, index) => (
            <SwiperSlide key={`${index}-120`} className="z-[-1]">
              {onRenderItem?.(item, index)}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default React.memo(Carousel);
