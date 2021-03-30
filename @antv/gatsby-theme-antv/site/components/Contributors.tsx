import React from 'react';
import _ from 'lodash';
import { Avatar, Tooltip } from 'antd';
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

  const openGithub = (githubId: string) => {
    window.open(`https://github.com/${githubId}`);
  };

  return (
    <div className={styles.docsContributors} style={style || {}}>
      {_.map(contributors, ({ author, avatar, github }) => {
        return (
          <Tooltip title={author}>
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
