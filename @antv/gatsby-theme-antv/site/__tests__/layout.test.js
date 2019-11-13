import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby'; // mocked

import Layout from '../layouts/layout';

describe(`Layout`, () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: `GatsbyJS`,
          description: `Ant Visualization solution home page`,
          githubUrl: 'https://github.com/antvis/gatsby-theme-antv',
        },
      },
    }));
  });

  it(`renders a header`, () => {
    const { container } = render(
      <Layout location={{ pathname: '/pathname' }}>
        <main>
          <h1>hello</h1>
        </main>
      </Layout>,
    );

    expect(container.querySelector(`header`)).toBeInTheDocument();
  });

  it(`renders children`, () => {
    const text = `__Hello world__`;
    const { getByText } = render(
      <Layout location={{ pathname: '/pathname' }}>
        <main>
          <h1>{text}</h1>
        </main>
      </Layout>,
    );

    const child = getByText(text);

    expect(child).toBeInTheDocument();
  });
});
