// Kilder: https://www.chartjs.org/docs/latest/getting-started/ 
// For padding: https://www.chartjs.org/docs/latest/general/padding.html 

const ctx = document.getElementById('mychart').getContext('2d');

const data = {
  labels: ['Norge', 'Svergie', 'Danmark', 'Finland' ,'Island'],
  datasets: [
    {
      /* Husk å oppdatere data verdiene. */
      label: '% prosentvis hvem snuser mest?',
      data: [7, 6, 23, 12, 9],
      borderWidth: 1,
      backgroundColor: [
        // Endre og finne primærfargene til hvert land. 
        // norge farge rød
        // Danmark
        // Island
        // svergie - gul-
      ]
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
      padding: 40,
      hoverOffset: 4,
    },
  },
});