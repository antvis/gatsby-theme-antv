import React from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import styles from './Companies.module.less';

interface Props {
  title: string;
  companies: Array<string>;
  className: string;
  style: object;
}

const Companies = (props: Props) => {
  const getCompanies = () => {
    const children = props.companies.map(company => {
      return (
        <Col
          key={company}
          className={classNames(styles.company, 'gutter-row')}
          md={6}
          sm={8}
          xs={12}
        >
          <img className={styles.companyimg} src={company} alt="company-img" />
        </Col>
      );
    });
    return children;
  };

  return (
    <div
      className={classNames(styles.wrapper, props.className)}
      style={props.style}
    >
      <div key="content" className={styles.content}>
        <p key="title" className={styles.title}>
          {props.title}
        </p>
        <div key="slicer" className={styles.slicer} />
        <div key="companies-container" className={styles.companiesContainer}>
          <Row
            key="companies"
            gutter={[{ xs: 77, sm: 77, md: 30, lg: 50 }, 10]}
            className={styles.companies}
          >
            {getCompanies()}
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Companies;
