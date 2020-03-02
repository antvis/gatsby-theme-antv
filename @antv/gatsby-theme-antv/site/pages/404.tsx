import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Result, Button } from 'antd';
import { Link } from 'gatsby';
import SEO from '../components/Seo';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Result
      status={404}
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <Button type="primary">
            <HomeOutlined />
            Back Home
          </Button>
        </Link>
      }
    />
  </>
);

export default NotFoundPage;
