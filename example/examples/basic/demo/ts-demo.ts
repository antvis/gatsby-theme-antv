import { Chart } from '@antv/g2';

fetch('data/fireworks-sales.json')
  .then(response => response.json())
  .then(data => {
    const chart = new Chart({
      container: document.getElementById('container') as HTMLDivElement,
      width: 500,
      height: 500,
    });

    chart.source(data);
    chart
      .interval()
      .position('scales*Date')
      .color('scales');
    chart.render();
  });
