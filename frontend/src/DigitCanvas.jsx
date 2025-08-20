import React, { useRef, useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const CANVAS_SIZE = 280; // 10x scale of 28x28
const SCALE = 10;

export default function DigitCanvas({ onImageData }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }, []);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = getPos(e);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, 2 * Math.PI);
    ctx.fill();
  };

  const handleClassify = () => {
    const ctx = canvasRef.current.getContext('2d');
    const imgData = ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const resized = resizeImage(imgData, 28, 28);
    const grayscale = resized.data.filter((_, i) => i % 4 === 0); // R channel as grayscale
    onImageData(grayscale);
  };

  const resizeImage = (imgData, width, height) => {
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = width;
    tmpCanvas.height = height;
    const tmpCtx = tmpCanvas.getContext('2d');
    tmpCtx.drawImage(canvasRef.current, 0, 0, width, height);
    return tmpCtx.getImageData(0, 0, width, height);
  };

  const handleReset = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        style={{ border: '1px solid #ccc', cursor: 'crosshair' }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
      />
      <div style={{ marginTop: '10px' }}>
       <Button variant="contained" color="success" onClick={handleClassify}>
            Classify
        </Button>
        <Button variant="contained" color="error" onClick={handleReset}>
            Reset
        </Button>
      </div>
    </div>
  );
}
