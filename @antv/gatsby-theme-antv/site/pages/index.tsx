import React from 'react';
import { navigate, withPrefix } from 'gatsby';
import { Spin } from 'antd';
import { getUserLangKey } from 'ptz-i18n';

class RedirectIndex extends React.PureComponent {
  constructor(args: any) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const langKey = getUserLangKey(['zh', 'en'], 'zh');
      const homeUrl = withPrefix(`/${langKey}/`);
      // https://github.com/angeloocana/gatsby-plugin-i18n/issues/52#issuecomment-451590961
      navigate(homeUrl);
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '200px auto' }}>
        <Spin size="large" />
      </div>
    );
  }
}

export default RedirectIndex;
