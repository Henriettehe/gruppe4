// Kilder: https://www.chartjs.org/docs/latest/getting-started/ 
// For padding: https://www.chartjs.org/docs/latest/general/padding.html 

const ctx = document.getElementById('mychart').getContext('2d');

// Replace this data with your actual dataset
const data = {
  labels: ['Norge', 'Svergie', 'Danmark', 'Finland' ,'Island'],
  datasets: [
    {
      label: '% prosentvis hvem snuser mest?',
      data: [7, 6, 23, 12, 9],
      borderWidth: 1,
      backgroundColor: [
        'rgb(200, 205, 86)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 205, 86)'
      ],
    },
  ],
};

//Kilde: https://unric.org/no/stadig-faerre-royker-i-norden/  
//for data om hvilke land som snuser prosentvis mest og minst. 

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
