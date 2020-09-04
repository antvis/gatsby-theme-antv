import React, { useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './PlayGrounds.module.less';

export interface PlayGroundItemProps {
  source: string;
  examples: PlayGroundItemProps[];
  babeledSource: string;
  absolutePath?: string;
  relativePath?: string;
  screenshot?: string;
  recommended?: boolean;
  filename: string;
  title?: string;
  location?: Location;
  playground?: {
    container?: string;
    playgroundDidMount?: string;
    playgroundWillUnmount?: string;
    dependencies?: {
      [key: string]: string;
    };
    htmlCodeTemplate?: string;
  };
}

interface PlayGroundsProps {
  examples: PlayGroundItemProps[];
  currentExample: PlayGroundItemProps;
  updateCurrentExample: Function;
}

const PlayGrounds: React.FC<PlayGroundsProps> = ({
  examples = [],
  currentExample,
  updateCurrentExample,
}) => {
  const { i18n } = useTranslation();

  // 滚动到当前节点
  useEffect(() => {
    if (!currentExample || !currentExample?.filename) {
      return;
    }
    const id = `example-${currentExample?.filename?.split('.')[0]}`;
    const cardNode = document.getElementById(id);
    if (cardNode) {
      cardNode.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [currentExample]);

  const [hasVerticalScrollbar, updateVerticalScrollbar] = useState(false);
  const [scrollPostion, updateScrollPostion] = useState('');
  const playgroundScrollDiv = useRef<HTMLDivElement>(null);

  const calcScrollPostion = (node: HTMLElement) => {
    if (node.scrollTop < 2) {
      updateScrollPostion('top');
    } else if (node.scrollLeft + node.clientHeight >= node.scrollHeight - 2) {
      updateScrollPostion('down');
    } else {
      updateScrollPostion('middle');
    }
  };

  const onScroll = (e: any) => {
    if (!e || !e.target) {
      return;
    }
    calcScrollPostion(e.target);
  };

  const onResize = useCallback(() => {
    if (playgroundScrollDiv && playgroundScrollDiv.current) {
      const div = playgroundScrollDiv!.current!;
      updateVerticalScrollbar(div.scrollHeight > div.clientHeight);
      calcScrollPostion(div);
    }
  }, [playgroundScrollDiv]);

  useEffect(() => {
    onResize();
  }, [examples]);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      className={classNames(styles.shadowWrapper, {
        [styles.topInnerShadow]:
          (scrollPostion === 'top' || scrollPostion === 'middle') &&
          hasVerticalScrollbar,
        [styles.bottomInnerShadow]:
          (scrollPostion === 'bottom' || scrollPostion === 'middle') &&
          hasVerticalScrollbar,
      })}
    >
      <div
        className={styles.cards}
        ref={playgroundScrollDiv}
        onScroll={onScroll}
      >
        {examples.map((example) => {
          const title =
            typeof example.title === 'object'
              ? example.title[i18n.language]
              : example.title;
          return (
            <Tooltip title={title || ''} key={example.relativePath}>
              <a
                href={`#${example.filename.split('.')[0]}`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  window.history.pushState(
                    {},
                    '',
                    `#${example.filename.split('.')[0]}`,
                  );
                  updateCurrentExample(example);
                }}
                id={`example-${example.filename.split('.')[0]}`}
                className={classNames(styles.card, {
                  [styles.current]:
                    currentExample &&
                    example.relativePath === currentExample.relativePath,
                })}
              >
                <img
                  src={
                    example.screenshot ||
                    'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png'
                  }
                  alt={title || example.relativePath}
                />
              </a>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default PlayGrounds;
