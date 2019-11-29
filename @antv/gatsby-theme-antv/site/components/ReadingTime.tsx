import React from 'react';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';

const ReadingTime: React.FC<any> = ({ readingTime }) => {
  const { i18n } = useTranslation();
  const { text = '', time = 0 } = readingTime;
  return (
    <Tag>
      {i18n.language === 'zh'
        ? text.replace(/(\d+)\smin\sread/, (_: string, min: string) => {
            if (min) {
              return `阅读时间约 ${min} 分钟`;
            }
            return `阅读时间约 ${Math.ceil(time / 60000)} 分钟`;
          })
        : text}
    </Tag>
  );
};

export default ReadingTime;
