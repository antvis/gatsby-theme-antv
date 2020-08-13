<tag color="gold" text="Insert"></tag>

#### data 📌

<description>**Required** _array object_</description>

Function description: Set chart data source

Default configuration: None

The data source is a collection of objects, for example: `[{ type:'a', value: 20 }, {type:'b', value: 20 }]`.

#### meta

<description>**Optional** _object_</description>

Function description: Configure chart data meta information globally, with field as a unit for configuration. The configuration on meta will affect the text information of all components at the same time.

Default configuration: None

| Subdivision configuration item name | Type       | Function description                                      |
| ----------------------------------- | ---------- | --------------------------------------------------------- |
| alias                               | _string_   | The alias of the field                                    |
| formatter                           | _function_ | callback method, format all values ​​of this field        |
| values ​​                           | _string[]_ | Enumerate all the values ​​in this field                  |
| range                               | _number[]_ | The data mapping range of the field, the default is [0,1] |

```js
const data = [
  {country:'Asia', year: '1750', value: 502,},
  {country:'Asia', year: '1800', value: 635,},
  {country:'Europe', year: '1750', value: 163,},
  {country:'Europe', year: '1800', value: 203,},
];

const areaPlot = new PercentageStackArea(document.getElementById('container'), {
  title: {
    visible: true,
    text:'Percentage stacked area chart',
  },
  data,
  // highlight-start
  meta: {
    year: {
      alias:'year'
      range: [0, 1],
    },
    value: {
      alias:'quantity',
      formatter:(v)=>{return `${v}个`}
    }
  },
  // highlight-end
  xField:'year',
  yField:'value',
  stackField:'country',
});
areaPlot.render();

```
