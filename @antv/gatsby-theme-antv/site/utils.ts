type Status = 'responded' | 'error' | 'timeout';

export const ping = (callback: (status: Status) => void): NodeJS.Timeout => {
  const url =
    'https://private-a' +
    'lipay' +
    'objects.alip' +
    'ay.com/alip' +
    'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  const img = new Image();
  let done = false;
  const finish = (status: Status) => {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };
  img.onload = () => finish('responded');
  img.onerror = () => finish('error');
  img.src = url;
  return setTimeout(() => finish('timeout'), 1500);
};

export const capitalize = (s: string): string => {
  if (typeof s !== 'string') {
    return '';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getChinaMirrorHost = (host?: string): string => {
  const hostString = typeof host === 'undefined' ? window.location.host : host;
  // antv.vision => antv.gitee.io
  if (hostString === 'antv.vision') {
    return 'antv.gitee.io';
  }
  // g2plot.antv.vision => antv-g2plot.gitee.io
  const match = hostString.match(/(.*)\.antv\.vision/);
  if (match && match[1]) {
    return `antv-${match[1]}.gitee.io`;
  }
  return hostString;
};
