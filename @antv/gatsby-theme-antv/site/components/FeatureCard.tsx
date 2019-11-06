import React from 'react';
import styles from './FeatureCard.module.less';

interface Props {
  cardContent: {
    icon: string;
    title: string;
    description: string;
  };
}

const FeatureCard = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img
          className={styles.icon}
          src={props.cardContent.icon}
          alt="advantage"
        />
        <p className={styles.title}>{props.cardContent.title}</p>
        <p className={styles.description}>{props.cardContent.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
