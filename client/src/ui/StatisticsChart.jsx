import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


function StatisticsChart({data}) {
    const chartData = {
        labels: data.labels,
        datasets: [
          {
            label: 'درآمد',
            backgroundColor: '#fe667f',
            data: data.values,
            borderRadius: 10,
          },
          {
            label: 'هزینه‌ها',
            backgroundColor: '#fca6b1',
            data: [445, 448, 360, 270, 340, 532], 
            borderRadius: 10,
          },
        ],
    };
    const options = {
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
            border: { display: false },
            grid: { display: false },
          },
          y: {
            border: { display: false },
            grid: { 
                display: true, 
                color: '#e0e0e0', 
                borderDash: [5, 5],
                lineWidth: 1,
             },
             min: 0,
             max: 600,
          },
        },
      };
  return (
    <div className='h-96'>
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default StatisticsChart
