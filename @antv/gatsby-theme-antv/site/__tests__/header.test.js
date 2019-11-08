import React from 'react';
import { render } from '@testing-library/react';

import Header from '../components/Header';

describe(`Header`, () => {
  it(`renders menu`, () => {
    const siteTitle = `Hello World`;
    const { getByText } = render(
      <Header siteTitle={siteTitle} pathPrefix="/xxx" />,
    );
    expect(getByText('所有产品')).toBeInTheDocument();
  });
});
