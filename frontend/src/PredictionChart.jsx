import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function PredictionChart({ predictions }) {
  const data = {
    labels: Array.from({ length: 10 }, (_, i) => i.toString()),
    datasets: [
      {
        label: 'Confidence',
        data: predictions,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    indexAxis: 'x',
    scales: {
      y: { min: 0, max: 1 },
    },
  };

  return (
    <div style={{ maxWidth: '500px', marginTop: '20px' }}>
      <Bar data={data} options={options} />
    </div>
  );
}
