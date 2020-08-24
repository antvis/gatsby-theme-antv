import { Chart } from '@antv/g2';
import insertCss from 'insert-css';

insertCss(`
  .custom { background: blue; }
`);

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 1150 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const chart = new Chart({
  container: document.getElementById('container'),
  forceFit: true,
  width: 500,
  height: 500,
});

chart.source(data);
chart
  .interval()
  .position('genre*sold')
  .color('genre');
chart.render();
