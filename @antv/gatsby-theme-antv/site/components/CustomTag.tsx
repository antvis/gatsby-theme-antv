import { Tag } from 'antd';
import React, { FC } from 'react';

interface TagProps {
  color?: string;
  text: string;
}

const CustomTag: FC<TagProps> = ({ color, text }) => {
  const colorValue = color;
  return <Tag color={colorValue}> {text}</Tag>;
};

export default CustomTag;
