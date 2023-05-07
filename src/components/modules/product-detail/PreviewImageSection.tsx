import * as React from 'react';
import Zoom from 'react-medium-image-zoom';
import { MdOutlineChevronRight, MdOutlineChevronLeft } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import 'react-medium-image-zoom/dist/styles.css';
import Carousel from '~/components/Carousel';

interface PreviewImageSectionProps {
  images: string[];
  currentImage: string;
}

const PreviewImageSection: React.FC<PreviewImageSectionProps> = (props) => {
  const { images, currentImage: currImgHover } = props;

  const [currentImage, setCurrentImage] = React.useState(images[0]);

  const handleHoverImage = (image: string) => {
    return () => {
      setCurrentImage(image);
    };
  };

  React.useEffect(() => {
    setCurrentImage(currImgHover || images[0]);
  }, [images, currImgHover]);

  return (
    <div className="w-[340px]">
      <div className="relative min-h-[340px] max-h-[340px] border">
        <Zoom>
          <img src={currentImage} alt="" className="w-full h-full" />
        </Zoom>
      </div>
      <hr className="my-5" />
      <div className="px-2">
        <Carousel
          nextSlide={<MdOutlineChevronRight className="text-[30px]" />}
          prevSlide={<MdOutlineChevronLeft className="text-[30px]" />}
          classes={{
            nextSlide: 'cursor-pointer right-[-10px]',
            prevSlide: 'cursor-pointer left-[-10px]',
          }}
          data={images}
          slidesPerGroup={4}
          slidesPerView={4}
          navigation
          controls
          onRenderItem={(i) => (
            <div className="h-[50px] w-[50px] border cursor-pointer" onMouseOver={handleHoverImage(i)}>
              <Zoom wrapElement="div">
                <img src={i} alt="" className="relative w-full h-full cursor-pointer" />
              </Zoom>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PreviewImageSection;
