import React, { useState } from 'react';


const ArrowTool = ({ onSelect }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const { x, y } = e.target.getStage().getPointerPosition();
    setStartX(x);
    setStartY(y);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) {
      return;
    }
    const { x, y } = e.target.getStage().getPointerPosition();
    setEndX(x);
    setEndY(y);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    onSelect({ startX, startY, endX, endY });
  };

  return (
    <>
      <Line
        points={[startX, startY, endX, endY]}
        stroke="#000"
        strokeWidth={2}
        draggable
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
    </>
  );
};

export default ArrowTool;
