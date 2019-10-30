import G2 from '@antv/g2';

const data = [
  { genre: 'Sports', sold: 100 },
  { genre: 'Strategy', sold: 100 },
  { genre: 'Action', sold: 100 },
  { genre: 'Shooter', sold: 100 },
  { genre: 'Other', sold: 100 },
];

const chart = new G2.Chart({
  container: document.getElementById('container') as HTMLDivElement,
  width: 500,
  height: 500,
});

chart.source(data);
chart
  .interval()
  .position('genre*sold')
  .color('genre');
chart.render();
