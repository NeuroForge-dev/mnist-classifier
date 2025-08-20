import React, { useState } from 'react';
import DigitCanvas from './DigitCanvas';
import PredictionChart from './PredictionChart';

function App() {
  const [predictions, setPredictions] = useState([]);

  const handleImageData = async (grayscalePixels) => {
    try {
      const response = await fetch('http://localhost:5000/classify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: grayscalePixels }),
      });
      const result = await response.json();
      setPredictions(result.predictions);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>MNIST Digit Classifier</h1>
      <DigitCanvas onImageData={handleImageData} />
      {predictions.length > 0 && <PredictionChart predictions={predictions} />}
    </div>
  );
}

export default App;
