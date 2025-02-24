import React from 'react'

function DoughnutChart({data}) {
    const chartData = {
        labels: data.labels,
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            data: data.values,
          },
        ],
      };
    
      return <Doughnut data={chartData} />;
    };

export default DoughnutChart
