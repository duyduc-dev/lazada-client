import Image from 'next/image';
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
              src={
                'https://lzd-img-global.slatic.net/g/icms/images/ims-web/5c6c7ea9-a030-450d-942c-df80393fdc52.jpg_2200x2200q90.jpg_.webp'
              }
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
