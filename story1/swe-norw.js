const ctx = document.getElementById('mestSnus').getContext('2d');

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'Svergie VS Norge',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
    type: 'line',
    data: data,
  };

  new Chart(ctx, config);
