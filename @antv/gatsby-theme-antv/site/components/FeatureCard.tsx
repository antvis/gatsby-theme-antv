import React from 'react';
import styles from './FeatureCard.module.less';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  divider: boolean;
}

const FeatureCard: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  divider = false,
}) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.content}
        style={{
          borderRight: divider ? '1px solid rgba(0, 0, 0, 0.1)' : '0px',
          borderLeft: divider ? '1px solid rgba(0, 0, 0, 0.1)' : '0px',
        }}
      >
        <img className={styles.icon} src={icon} alt="advantage" />
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
