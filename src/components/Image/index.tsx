import classNames from 'classnames';
import * as React from 'react';

interface AppImageProps {
  source: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const AppImage: React.FC<AppImageProps> = (props) => {
  const { source, className, width, height } = props;

  const handleError = () => {
    console.log('app image error');
  };

  return (
    <div className="w-full h-full">
      <div
        className={classNames('pt-[100%] object-cover bg-no-repeat bg-cover', className)}
        style={{
          backgroundImage: `url(${source})`,
          width: width,
          height: height,
        }}
        onError={handleError}
      ></div>
    </div>
  );
};

export default AppImage;
