// Kilder: https://www.chartjs.org/docs/latest/getting-started/ 
// For padding: https://www.chartjs.org/docs/latest/general/padding.html 

const ctx = document.getElementById('mychart').getContext('2d');

// Replace this data with your actual dataset
const data = {
  labels: ['Norge', 'Svergie', 'Danmark', 'Finland' ,'Island'],
  datasets: [
    {
      label: '% prosentvis hvem snuser mest?',
      data: [22, 21, 16, 13, 4],
      borderWidth: 1,
      backgroundColor: [
        'rgb(200, 205, 86)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
    },
  ],
};

new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {
      callbacks: {
        label: (context) => {
          return context.dataset.label + ': ' + context.parsed.y;
        },
      },
    },
    layout: {
      padding: 25, 
      hoverOffset: 4,
  }
  },
  plugins: {
    beforeInit: (chart) => {
      chart.data.datasets[0].backgroundColor = data.labels.map((label) => flagImages[label]);
    },
  },
});
