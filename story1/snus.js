// Kilder: https://www.chartjs.org/docs/latest/getting-started/ 
// For padding: https://www.chartjs.org/docs/latest/general/padding.html 

const ctx = document.getElementById('mychart').getContext('2d');

const data = {
  labels: ['Norge', 'Svergie', 'Danmark', 'Finland' ,'Island'],
  datasets: [
    {
      /* Husk å oppdatere data verdiene. */
      label: '% prosentvis hvem snuser mest?',
      data: [15, 12, 6, 5, 4],
      borderWidth: 1,
      backgroundColor: [
        '#EF3340',
        '#0051A8',
        '#C60C30',
        '#003580',
        '#02529C',
        // Dette er alle primærfargene til hvert skandinaviske land, ser nå i ettertid at dette er veldig dårlig UU- da det kun er rødt og blått :/ 
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

