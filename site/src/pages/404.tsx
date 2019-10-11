import React from 'react';
import { Result, Button, Icon } from 'antd';
import { Link } from 'gatsby';
import Layout from 'gatsby-theme-antv/src/components/layout';
import SEO from 'gatsby-theme-antv/src/components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <Button type="primary">
            <Icon type="home" />
            Back Home
          </Button>
        </Link>
      }
    />
  </Layout>
);

export default NotFoundPage;
