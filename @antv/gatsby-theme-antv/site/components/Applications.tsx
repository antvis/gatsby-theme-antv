import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Applications.module.less';

const previousButtonImg =
  'https://gw.alipayobjects.com/zos/basement_prod/39d0ba49-5ae4-4fb7-86e1-ff90e79e30a0.svg';
const nextButtonImg =
  'https://gw.alipayobjects.com/zos/basement_prod/27ce6e21-bbb6-4490-8326-43483ac39e0b.svg';

interface Application {
  logo?: string;
  title: string;
  description: string;
  link?: string;
  image: string;
}
interface ApplicationsProps {
  applications: Application[];
}
const Applications: React.FC<ApplicationsProps> = ({ applications = [] }) => {
  const { t } = useTranslation();
  const [appIndex, setStates] = useState(0);
  let slider: Slider;

  const clickPrevious = () => {
    slider.slickPrev();
  };
  const clickNext = () => {
    slider.slickNext();
  };

  const getApplications = () => {
    const children = applications.map(app => {
      let linkDiv;
      if (app.link) {
        linkDiv = (
          <div className={styles.detailWrapper}>
            <a className={styles.detail} href={app.link}>
              {t('查看详情')}
            </a>
          </div>
        );
      }

      return (
        <div className={styles.appWrapper} key={app.title}>
          <img className={styles.appTeaser} src={app.image} alt="image" />
          <div className={styles.appLeft}>
            <div className={styles.appContent}>
              <img className={styles.appLogo} src={app.logo} alt="logo" />
              <p className={styles.appTitle}>{app.title}</p>
              <p className={styles.appDescription}>{app.description}</p>
              {linkDiv}
            </div>
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
          </div>
        </div>
      );
    });
    return children;
  };

  const sliderSettings = {
    dots: applications.length > 1 ? true : false,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };
  return (
    <div className={styles.wrapper}>
      <Slider
        {...sliderSettings}
        className={styles.slider}
        ref={c => (slider = c)}
      >
        {getApplications()}
      </Slider>
    </div>
  );
};
export default Applications;
