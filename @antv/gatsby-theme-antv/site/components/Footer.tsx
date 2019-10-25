import React from 'react';
import Footer from 'rc-footer';

export const defaultColumns = [
  {
    title: 'G2',
    items: [
      {
        title: '关于 G2',
        url: '',
      },
      {
        title: '图表示例',
        url: '',
      },
      {
        title: 'API 文档',
        url: '',
      },
      {
        title: '使用教程',
        url: '',
      },
    ],
  },
  {
    title: 'G6',
    items: [
      {
        title: '关于 G2',
        url: '',
      },
      {
        title: '图表示例',
        url: '',
      },
      {
        title: 'API 文档',
        url: '',
      },
      {
        title: '使用教程',
        url: '',
      },
    ],
  },
  {
    title: 'F2',
    items: [
      {
        title: '关于 G2',
        url: '',
      },
      {
        title: '图表示例',
        url: '',
      },
      {
        title: 'API 文档',
        url: '',
      },
      {
        title: '使用教程',
        url: '',
      },
    ],
  },
  {
    title: 'L7',
    items: [
      {
        title: '关于 G2',
        url: '',
      },
      {
        title: '图表示例',
        url: '',
      },
      {
        title: 'API 文档',
        url: '',
      },
      {
        title: '使用教程',
        url: '',
      },
    ],
  },
  {
    title: '墨者学院',
    items: [
      {
        title: '关于 G2',
        url: '',
      },
      {
        title: '图表示例',
        url: '',
      },
      {
        title: 'API 文档',
        url: '',
      },
      {
        title: '使用教程',
        url: '',
      },
    ],
  },
  {
    icon: (
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
        alt="more products"
      />
    ),
    title: '更多产品',
    items: [
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
            alt="yuque"
          />
        ),
        title: '语雀',
        url: 'https://yuque.com',
        description: '知识创作与分享工具',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
            alt="yuque"
          />
        ),
        title: '云凤蝶',
        url: 'https://yunfengdie.com',
        description: '中台建站平台',
        openExternal: true,
      },
    ],
  },
];

export default ({
  columns = defaultColumns,
  bottom = (
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://xtech.antfin.com/">AFX</a>
    </div>
  ),
}) => <Footer columns={columns} bottom={bottom} />;
