import React from 'react';
import { map } from 'lodash-es';
import { Avatar, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './Contributors.module.less';

type Props = {
  contributors: Array<{
    author?: string;
    avatar: string;
    github: string;
  }>;
  style?: React.CSSProperties;
};

const Contributors: React.FC<Props> = (props) => {
  const { contributors, style } = props;

  const { t } = useTranslation();

  const openGithub = (githubId: string) => {
    window.open(`https://github.com/${githubId}`);
  };

  return (
    <div className={styles.docsContributors} style={style || {}}>
      {map(contributors, ({ author, avatar, github }) => {
        return (
          <Tooltip title={`${t('贡献者')}: ${author}`}>
            <span onClick={() => openGithub(github)}>
              <Avatar size={24} src={avatar} />
            </span>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Contributors;
