import * as React from 'react';
import Draggable, { DraggableCore, DraggableData, DraggableEvent, DraggableEventHandler } from 'react-draggable';
import { RxDoubleArrowRight } from 'react-icons/rx';

interface DraggableVerifyProps {
  breakpoints: number;
  onEnd?: (e: DraggableEvent, data: DraggableData) => void;
}

const DraggableVerify: React.FC<DraggableVerifyProps> = (props) => {
  const { onEnd, breakpoints } = props;

  const [position, setPosition] = React.useState({
    x: 0,
    y: 0,
  });

  const handleDrag: DraggableEventHandler = React.useCallback(
    (e, data) => {
      if (data.x >= breakpoints) {
        setPosition({
          x: 340,
          y: 0,
        });
      } else {
        setPosition({
          x: 0,
          y: 0,
        });
      }
    },
    [breakpoints]
  );

  const handleStop: DraggableEventHandler = React.useCallback(
    (e, data) => {
      if (data.x >= breakpoints) {
        onEnd?.(e, data);
      }
    },
    [onEnd, breakpoints]
  );

  const handleClickBackground: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <div>
      <div
        onClick={handleClickBackground}
        className="cursor-pointer rounded-md h-[40px] mb-2 w-full relative bg-water text-caribbean_green"
      >
        <Draggable onDrag={handleDrag} onStop={handleStop} position={position} bounds="parent" axis="x" allowAnyClick>
          <div className="cursor-move h-full w-[40px] flex items-center z-[1000] justify-center bg-[linear-gradient(90deg,#17ca9d,#02af83)] transition-all duration-200 shadow-[0_4px_9px_0_#00eaaf]">
            <RxDoubleArrowRight className="text-white pointer-events-none" fontSize={18} />
          </div>
        </Draggable>
        <div className="absolute text-center pointer-events-none !z-[10] top-0 left-0 right-0 bottom-0 flex items-center justify-center text-[14px]">
          <span className="animation-text pointer-events-none select-none z-[10]">Slide to get SMS Code</span>
        </div>
      </div>
    </div>
  );
};

export default DraggableVerify;
