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

const flagImages = {
  'Norge': 'norway-flag-icon.png',
  'Svergie': 'sweden-flag-icon.png',
  'Danmark': 'denmark-flag-icon.png',
  'Finland': 'finland-flag-icon.png',
  'Island': 'iceland-flag-icon.png',
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
    },
  },

  // Prøvd å endre barchartens bakgrunn til flagg. Må høre med Marius om hjelp? 
  plugins: {
    beforeDraw: (chart) => {
      const { ctx } = chart;

      data.labels.forEach((label, index) => {
        const bar = chart.getDatasetMeta(0).data[index];
        const flagImage = new Image();
        flagImage.src = flagImages[label];

        const x = bar.x;
        const y = bar.y;

        ctx.drawImage(flagImage, x, y);
      });
    },
  },
});