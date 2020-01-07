import { useEffect, useState } from 'react';

export const useChinaMirrorHost = () => {
  const [isChinaMirrorHost, setIsChinaMirrorHost] = useState(false);
  useEffect(() => {
    if (
      window.location.host.includes('gitee.io') &&
      window.location.host.includes('antv')
    ) {
      setIsChinaMirrorHost(true);
    }
  }, []);
  return [isChinaMirrorHost];
};
