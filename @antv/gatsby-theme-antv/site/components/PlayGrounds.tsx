import _ from 'lodash';
import classNames from 'classnames';
import { Tooltip, Menu, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, ReactNode, useRef } from 'react';
import Icon, { createFromIconfontCN, SearchOutlined } from '@ant-design/icons';
import type { TreeItem } from './PlayGround';
import CollaspeAllSvg from '../images/collapse-all.svg';

import styles from './PlayGrounds.module.less';

// menu icon
const MenuIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_470089_9m0keqj54r.js', // generated by iconfont.cn
});

const { SubMenu } = Menu;

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
    devDependencies?: {
      [key: string]: string;
    };
    htmlCodeTemplate?: string;
  };
}

interface PlayGroundsProps {
  getPath: (currentExample: PlayGroundItemProps) => string; // 获得当前选中的示例 key 值
  currentExample: PlayGroundItemProps;
  updateCurrentExample: (val: PlayGroundItemProps) => void;
  treeData: TreeItem[];
}

const PlayGrounds: React.FC<PlayGroundsProps> = ({
  getPath,
  currentExample,
  updateCurrentExample,
  treeData,
}) => {
  const { t } = useTranslation();

  // 菜单栏展开keys
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const menuRef = useRef<Menu | null>(null);
  // 初始化点击进来的示例按钮a的dom
  const [aRef, setARef] = useState<HTMLAnchorElement>();

  // input 搜索框的value
  const [searchValue, setSearchValue] = useState<string>('');

  // 查找符合条件的数据 从title和 searchValue 可以匹配 就返回 否自返回[]
  const findSearchTreeData = (data: TreeItem[]): TreeItem[] =>
    _.reduce(
      data,
      (value: TreeItem[], item: TreeItem) => {
        if (item.title?.match(searchValue)) {
          return [...value, item];
        }
        if (item.children) {
          const searchData = findSearchTreeData(item.children);
          return _.size(searchData)
            ? [...value, { ...item, children: searchData }]
            : value;
        }
        return value;
      },
      [],
    );

  // 获取最新的 TreeData 数据
  const getTreeData = () =>
    searchValue ? findSearchTreeData(treeData) : treeData;

  // 控制 菜单栏展开key 保证二级菜单唯一
  const onOpenChange = (keys: any[]) => {
    let newKeys = keys;
    const diffKey = _.difference(keys, openKeys)[0];
    if (diffKey && /^secondaryKey-/.test(diffKey)) {
      newKeys = [
        ...newKeys.filter((key) => !/^secondaryKey-/.test(key)),
        diffKey,
      ];
    }
    setOpenKeys(newKeys);
  };

  // 获取默认展开的keys数组 传入treeData 和 底层的 key  返回符合条件的 keys
  const getDefaultOpenKeys = (data: TreeItem[], key: string): string[] =>
    _.reduce(
      data,
      (value: any[], item: TreeItem) => {
        if (item.children) {
          const keys = getDefaultOpenKeys(item.children, key);
          return keys.length ? [...value, item.value, ...keys] : value;
        }
        return key === item.value ? [item.value] : value;
      },
      [],
    );

  // 初始化菜单栏展开keys
  useEffect(() => {
    const exampleKey = getPath(currentExample);
    setOpenKeys(getDefaultOpenKeys(getTreeData(), exampleKey));
  }, [currentExample]);

  // 初始化滚动到中间
  useEffect(() => {
    if (aRef) {
      aRef.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  }, [aRef]);

  // 获取搜索后的文本结构 左文本 + 搜索文本 + 右文本
  const getSearchValueTitle = (title: string): ReactNode =>
    searchValue && title.match(searchValue) ? (
      <>
        <span>{title.replace(new RegExp(`${searchValue}.*`), '')}</span>
        <span className={styles.searchValue}>{searchValue}</span>
        <span>{title.replace(new RegExp(`.*?${searchValue}`), '')}</span>
      </>
    ) : (
      title
    );

  // 图例按钮 + img + tooltip文本
  const example = (item: TreeItem) => (
    <Tooltip
      placement="right"
      title={getSearchValueTitle(item.title || '')}
      key={item.relativePath}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        ref={(dom) => {
          if (dom && !aRef && item.value === getPath(currentExample)) {
            setARef(dom);
          }
        }}
        className={classNames(styles.card, {
          [styles.current]:
            currentExample && item.relativePath === currentExample.relativePath,
        })}
      >
        <div
          className={classNames(styles.screenshot)}
          style={{
            backgroundImage: `url(${
              item.screenshot ||
              'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png'
            })`,
          }}
          title={item.title || item.relativePath}
        />
      </a>
    </Tooltip>
  );

  // 导航栏
  const getMenuSub = (data: TreeItem[]) =>
    _.map(data, (item) =>
      item.children ? (
        <SubMenu
          key={item.value}
          title={
            <div>
              {item.icon && (
                <MenuIcon
                  className={styles.menuIcon}
                  type={`icon-${item.icon}`}
                />
              )}
              <span
                className={classNames(
                  styles.menuTitleContent,
                  styles.subMenuTitleContent,
                )}
              >
                {item.title && getSearchValueTitle(item.title)}
              </span>
            </div>
          }
        >
          {getMenuSub(item.children)}
        </SubMenu>
      ) : (
        <Menu.Item
          key={item.value}
          style={{
            height: 70,
            padding: 0,
            cursor: 'pointer',
          }}
          onClick={() => {
            if (item.value?.match(window.location.pathname)) {
              window.history.replaceState({}, '', `${item.value}`);
              updateCurrentExample(item as any);
            } else {
              window.history.pushState({}, '', `${item.value}`);
              menuRef?.current?.forceUpdate(() => {
                updateCurrentExample(item as any);
              });
            }
          }}
        >
          <span className={styles.menuTitleContent}>{example(item)}</span>
        </Menu.Item>
      ),
    );

  // 搜索栏
  const searchSider = () => (
    <div className={styles.searchSider}>
      <Input
        size="small"
        placeholder={t('搜索')}
        prefix={<SearchOutlined />}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Tooltip placement="right" title={t('收起所有')}>
        <Icon
          component={CollaspeAllSvg}
          className={styles.searchSiderIcon}
          onClick={() => setOpenKeys([])}
        />
      </Tooltip>
    </div>
  );

  return (
    <div className={classNames(styles.shadowWrapper)}>
      {searchSider()}
      {openKeys && (
        <Menu
          ref={menuRef}
          mode="inline"
          style={{ width: '100%' }}
          className={styles.siderbarMenu}
          openKeys={openKeys}
          selectedKeys={[getPath(currentExample)]}
          onOpenChange={onOpenChange}
        >
          {getMenuSub(getTreeData())}
        </Menu>
      )}
    </div>
  );
};

export default PlayGrounds;
