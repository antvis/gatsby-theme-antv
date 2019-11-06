import React from 'react';
// var ScrollAnim = require('rc-scroll-anim');
// var ScrollOverPack = ScrollAnim.OverPack;
import { Row, Col } from 'antd';
import classNames from 'classnames';
import FeatureCard from './FeatureCard';
import { useTranslation } from 'react-i18next';
import styles from './Features.module.less';

interface Card {
  icon: string;
  title: string;
  description: string;
}
interface Props {
  title?: string;
  features: Array<Card>;
  className: string;
  style: object;
}

const Features = (props: Props) => {
  const { t } = useTranslation();

  const getCards = () => {
    const children = props.features.map(card => {
      return (
        <Col className={styles.cardWrapper} key={card.title} md={8} xs={24}>
          <FeatureCard cardContent={card} />
        </Col>
      );
    });
    return children;
  };

  const getSlicers = () => {
    const slicers = [];
    const slicerNum = props.features.length - 1;
    for (let i = 0; i < slicerNum; i++) {
      const left = `${(0.878 * 0.3333 * (i + 1) + 0.04) * 100}%`;
      slicers.push(
        <div key={i} className={styles.divider} style={{ marginLeft: left }} />,
      );
    }
    return slicers;
  };

  // for small screen
  const getDots = () => {
    let dots: Array<Object> = [];
    const length = props.features.length;
    const startTop = 45;
    const cardHeight = 350;
    const startLeftPercent = 0.028;
    const rows = length + 1;
    for (let i = 0; i < rows; i++) {
      let yOffset = 1;
      let top = `${startTop + cardHeight * i - yOffset}px`;
      let leftColLeft = `${startLeftPercent * 100}%`;
      let rigthColLeft = `${(startLeftPercent + 0.892) * 100}%`;
      dots.push(
        <div
          key={`${i}-0`}
          className={styles.dot}
          style={{ marginLeft: leftColLeft, marginTop: top }}
        />,
      );
      dots.push(
        <div
          key={`${i}-1`}
          className={styles.dot}
          style={{ marginLeft: rigthColLeft, marginTop: top }}
        />,
      );
    }

    return dots;
  };

  let lefttop1Display = 'block';
  let lefttop2Display = 'none';
  if (!props.title) {
    lefttop1Display = 'none';
    lefttop2Display = 'block';
  }
  return (
    <div
      className={classNames(styles.wrapper, props.className)}
      style={props.style}
    >
      <div
        className={classNames(styles.lefttopWithTitle, styles.lefttop)}
        style={{ display: lefttop1Display }}
      />
      <div
        className={classNames(styles.lefttopWithoutTitle, styles.lefttop)}
        style={{ display: lefttop2Display }}
      />
      <div className={styles.content}>
        <div key="content">
          <p key="title" className={styles.title}>
            {props.title && t(props.title)}
          </p>
          <div key="block" className={styles.rightbottom}>
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarv,
                styles.slicerbarv1,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarv,
                styles.slicerbarv2,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarh,
                styles.slicerbarh1,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarh,
                styles.slicerbarh2,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarh,
                styles.slicerbarh3,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarh,
                styles.slicerbarh4,
              )}
            />
            {getSlicers()}
            {getDots()}
            <Row key="cards" className={styles.cards}>
              {getCards()}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
