import G2 from '@antv/g2';
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

const chart = new G2.Chart({
  container: document.getElementById('container'),
  forceFit: true,
  height: 500,
});

chart.source(data);
chart
  .interval()
  .position('genre*sold')
  .color('genre');
chart.render();
