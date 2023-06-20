import Image from 'next/legacy/image';
import * as React from 'react';
import Carousel from '~/components/Carousel';

interface CarouselSectionProps {}

const CarouselSection: React.FC<CarouselSectionProps> = (props) => {
  const {} = props;

  return (
    <div className="h-[344px] w-full rounded-md overflow-hidden">
      <Carousel
        className="h-full"
        pagination={{ clickable: true }}
        autoplay
        loop
        classes={{
          container: 'h-full',
        }}
        data={Array(10).fill(0)}
        onRenderItem={(item) => (
          <div className="relative w-full h-full">
            <Image
              src={'https://icms-image.slatic.net/images/ims-web/268f91b8-6488-46ec-9780-9a7a58cfdd94.jpg'}
              priority
              alt=""
              layout="fill"
              className="w-full h-full"
            />
          </div>
        )}
      />
    </div>
  );
};

export default CarouselSection;
