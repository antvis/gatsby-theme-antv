import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import classNames from 'classnames';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Cases.module.less';

const previousButtonImg =
  'https://gw.alipayobjects.com/zos/basement_prod/39d0ba49-5ae4-4fb7-86e1-ff90e79e30a0.svg';
const nextButtonImg =
  'https://gw.alipayobjects.com/zos/basement_prod/27ce6e21-bbb6-4490-8326-43483ac39e0b.svg';

interface Case {
  logo?: string;
  title: string;
  description: string;
  link?: string;
  image: string;
}
interface CasesProps {
  cases: Case[];
  style?: React.CSSProperties;
  className?: string;
}
const Cases: React.FC<CasesProps> = ({ cases = [], style = {}, className }) => {
  const { t } = useTranslation();
  let slider: any;

  const clickPrevious = () => {
    slider.slickPrev();
  };
  const clickNext = () => {
    slider.slickNext();
  };

  const getCases = () => {
    let buttons: any;
    if (cases.length > 1) {
      buttons = (
        <div className={styles.buttons}>
          <img
            className={styles.previousButton}
            onClick={clickPrevious}
            src={previousButtonImg}
            alt="previous"
          />
          <img
            className={styles.nextButton}
            onClick={clickNext}
            src={nextButtonImg}
            alt="next"
          />
        </div>
      );
    }
    const children = cases.map(app => {
      const linkDiv = (
        <div
          className={styles.detailWrapper}
          style={{ opacity: app.link ? 1 : 0 }}
        >
          <a className={styles.detail} href={app.link}>
            {t('查看详情')}
          </a>
        </div>
      );

      return (
        <div className={styles.appWrapper} key={app.title}>
          <img className={styles.appTeaser} src={app.image} alt={app.title} />
          <div className={styles.appLeft}>
            <div className={styles.appContent}>
              <img className={styles.appLogo} src={app.logo} alt="logo" />
              <p className={styles.appTitle}>{app.title}</p>
              <p className={styles.appDescription}>{app.description}</p>
              {linkDiv}
            </div>
            {buttons}
          </div>
        </div>
      );
    });
    return children;
  };

  const sliderSettings = {
    dots: cases.length > 1,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };
  return (
    <div className={classNames(styles.wrapper, className)} style={style}>
      <Slider
        {...sliderSettings}
        className={styles.slider}
        ref={c => {
          slider = c;
        }}
      >
        {getCases()}
      </Slider>
    </div>
  );
};
export default Cases;
