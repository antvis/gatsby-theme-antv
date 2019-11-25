import React from 'react';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';

const ReadingTime: React.FC<any> = ({ readingTime }) => {
  const { i18n } = useTranslation();
  return (
    <Tag>
      {i18n.language === 'zh'
        ? readingTime.text.replace(
            /(\d)\smin\sread/,
            (_: string, min: string) => {
              if (min) {
                return `阅读时间约 ${min} 分钟`;
              }
              return `阅读时间约 ${Math.ceil(readingTime.time / 60000)} 分钟`;
            },
          )
        : readingTime.text}
    </Tag>
  );
};

export default ReadingTime;
