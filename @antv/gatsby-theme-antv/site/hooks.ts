import { useEffect, useState } from 'react';
import { NavigatorBannerProps } from './components/NavigatorBanner';

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

export const usePrevAndNext = () => {
  const [prevAndNext, setPrevAndNext] = useState<
    NavigatorBannerProps['post'][]
  >([]);
  useEffect(() => {
    const menuNodes = document.querySelectorAll('aside .ant-menu-item a');
    const currentMenuNode = document.querySelector(
      'aside .ant-menu-item-selected a',
    );
    const currentIndex = Array.from(menuNodes).findIndex(
      node => node === currentMenuNode,
    );
    const prevNode =
      currentIndex - 1 >= 0 ? menuNodes[currentIndex - 1] : undefined;
    const nextNode =
      currentIndex + 1 < menuNodes.length
        ? menuNodes[currentIndex + 1]
        : undefined;
    const prev = prevNode
      ? {
          slug: prevNode.getAttribute('href') || undefined,
          title: prevNode.textContent || undefined,
        }
      : undefined;
    const next = nextNode
      ? {
          slug: nextNode.getAttribute('href') || undefined,
          title: nextNode.textContent || undefined,
        }
      : undefined;
    setPrevAndNext([prev, next]);
  }, []);
  return prevAndNext;
};
