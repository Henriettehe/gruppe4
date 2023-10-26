// Kilder: https://www.chartjs.org/docs/latest/getting-started/ 

const ctx = document.getElementById('mychart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Norge', 'Svergie', 'Danmark', 'Finland',],
      datasets: [{
        label: '# hvem snuser mest?',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });