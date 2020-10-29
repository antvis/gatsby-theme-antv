import React from 'react';
import Icon from '@ant-design/icons';
import CollaspeSvg from '../images/collapse-icon.svg';

interface IconProps {
  rotate: number;
  type: string;
}

const CollapseIcon = (props: IconProps): any => (
  <Icon component={CollaspeSvg} {...props} />
);

export default CollapseIcon;
