// Kilder: https://www.chartjs.org/docs/latest/getting-started/ 
// For padding: https://www.chartjs.org/docs/latest/general/padding.html 

// your-chart-data.js
const ctx = document.getElementById('mychart').getContext('2d');

// Replace this data with your actual dataset
const data = {
  labels: ['Norge', 'Svergie', 'Danmark', 'Finland'],
  datasets: [
    {
      label: '# hvem snuser mest?',
      data: [12, 19, 3, 5],
      borderWidth: 1,
      backgroundColor: [
        '/flags/norge.svg',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
    },
  ],
};

// Function to create image pattern objects from SVG or PNG images
const createImagePattern = (imagePath) => {
  const img = new Image();
  img.src = imagePath;
  return ctx.createPattern(img, 'repeat');
};

// Map country names to their respective flag images
const flagImages = {
  Norge: createImagePattern('norge.svg'),
  //Svergie: createImagePattern('sweden.svg'),
  //Danmark: createImagePattern('denmark.svg'),
  //Finland: createImagePattern('finland.svg'),
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
