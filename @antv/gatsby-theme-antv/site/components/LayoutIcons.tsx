import React from 'react';
import Icon from '@ant-design/icons';

interface IconProps {
  style?: React.CSSProperties;
}

const DefaultSvg: React.FC<IconProps> = ({ style = {} }) => (
  <svg
    style={{ width: 14, height: 14, ...style }}
    viewBox="0 0 16 16"
    version="1.1"
  >
    <g id="v1.1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="icon_jingdian" fill="#000000" fillRule="nonzero">
        <g id="编组">
          <path
            d="M14.6666667,0 C15.4030463,0 16,0.596953667 16,1.33333333 L16,14.6666667 C16,15.4030463 15.4030463,16 14.6666667,16 L1.33333333,16 C0.596953667,16 0,15.4030463 0,14.6666667 L0,1.33333333 C0,0.596953667 0.596953667,0 1.33333333,0 L14.6666667,0 Z M14.6666667,1.33333333 L1.33333333,1.33333333 L1.33333333,14.6666667 L14.6666667,14.6666667 L14.6666667,1.33333333 Z"
            id="矩形"
            fill="currentColor"
          />
          <polygon
            id="路径"
            points="8.66666667 1.21403219 8.66666667 15.36968 7.33333333 15.36968 7.33333333 1.21403219"
            fill="currentColor"
          />
          <polygon
            id="路径-2"
            points="8 7.62518943 8 8.95852276 0.804248302 8.95852276 0.804248302 7.62518943"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);

const ThreeRowsSvg: React.FC<IconProps> = ({ style = {} }) => (
  <svg
    style={{ width: 14, height: 14, ...style }}
    viewBox="0 0 16 16"
    version="1.1"
  >
    <g id="v1.1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="icon_sanlan" fill="#000000" fillRule="nonzero">
        <g id="编组备份">
          <path
            d="M14.6666667,0 C15.4030463,0 16,0.596953667 16,1.33333333 L16,14.6666667 C16,15.4030463 15.4030463,16 14.6666667,16 L1.33333333,16 C0.596953667,16 0,15.4030463 0,14.6666667 L0,1.33333333 C0,0.596953667 0.596953667,0 1.33333333,0 L14.6666667,0 Z M14.6666667,1.33333333 L1.33333333,1.33333333 L1.33333333,14.6666667 L14.6666667,14.6666667 L14.6666667,1.33333333 Z"
            id="矩形"
            fill="currentColor"
          />
          <polygon
            id="路径"
            points="6 1.21403219 6 15.36968 4.66666667 15.36968 4.66666667 1.21403219"
            fill="currentColor"
          />
          <polygon
            id="路径备份"
            points="11.3333333 1.21403219 11.3333333 15.36968 10 15.36968 10 1.21403219"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);

const TowRowsSvg: React.FC<IconProps> = ({ style = {} }) => (
  <svg
    style={{ width: 14, height: 14, ...style }}
    viewBox="0 0 16 16"
    version="1.1"
  >
    <title>编组备份 2</title>
    <g id="v1.1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="icon_lianglan-" fill="#000000" fillRule="nonzero">
        <g id="编组备份-2">
          <path
            d="M14.6666667,0 C15.4030463,0 16,0.596953667 16,1.33333333 L16,14.6666667 C16,15.4030463 15.4030463,16 14.6666667,16 L1.33333333,16 C0.596953667,16 0,15.4030463 0,14.6666667 L0,1.33333333 C0,0.596953667 0.596953667,0 1.33333333,0 L14.6666667,0 Z M14.6666667,1.33333333 L1.33333333,1.33333333 L1.33333333,14.6666667 L14.6666667,14.6666667 L14.6666667,1.33333333 Z"
            id="矩形"
            fill="currentColor"
          />
          <polygon
            id="路径"
            points="8.66666667 1.21403219 8.66666667 15.36968 7.33333333 15.36968 7.33333333 1.21403219"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const DefaultIcon = (): any => <Icon component={DefaultSvg} />;

export const ThreeRowsIcon = (): any => <Icon component={ThreeRowsSvg} />;

export const TowRowsIcon = (): any => <Icon component={TowRowsSvg} />;
