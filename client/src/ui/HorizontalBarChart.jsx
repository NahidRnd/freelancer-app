import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function HorizontalBarChart({data}) {
    const options = {
        indexAxis: 'y', // This makes the bars horizontal
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            display: true,
            labels: {
              usePointStyle: true,
              boxWidth: 10,
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            border: { display: false },
            grid: {
              display: false,
            },
          },
        },
      };
  return (
    <div>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default HorizontalBarChart
