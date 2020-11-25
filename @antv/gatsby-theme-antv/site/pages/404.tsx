import React, { useEffect } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Result, Button } from 'antd';
import { Link } from 'gatsby';
import SEO from '../components/Seo';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    if (window.location.pathname.startsWith('/404')) {
      return;
    }
    const { gtag } = window;
    gtag?.('event', 'report', {
      event_category: '404',
      event_label: window.location.href,
    });
  }, []);
  return (
    <>
      <SEO title="404: Not found" />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary" icon={<HomeOutlined />}>
              Back Home
            </Button>
          </Link>
        }
      />
    </>
  );
};

export default NotFoundPage;
