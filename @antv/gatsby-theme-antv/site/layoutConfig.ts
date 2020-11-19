export const splitPaneMap: { [key: string]: any } = {
  viewDefault: {
    outside: {
      split: 'vertical',
      size: '60%',
    },
    inside: {
      split: 'horizontal',
      size: '60%',
    },
  },
  viewTwoRows: {
    outside: {
      split: 'horizontal',
      size: '100%',
    },
    inside: {
      split: 'horizontal',
      size: '50%',
    },
  },
  viewTwoCols: {
    outside: {
      split: 'vertical',
      size: '100%',
    },
    inside: {
      split: 'vertical',
      size: '50%',
    },
  },
  viewThreeCols: {
    outside: {
      split: 'vertical',
      size: '66.6%',
    },
    inside: {
      split: 'vertical',
      size: '50%',
    },
  },
};
