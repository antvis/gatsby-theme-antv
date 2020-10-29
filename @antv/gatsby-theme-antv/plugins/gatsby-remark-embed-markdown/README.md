## Overview

Fork from gatsby-remark-embed-markdown[https://github.com/jtstodola/gatsby-remark-embed-markdown], Embeds the content of a specified markdown file within another markdown file.Add two new feature:

- Support for deep embed
- Base on markdownAst

## How to use

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-markdown',
            options: {
              // Example code links are relative to this dir.
              // eg examples/path/to/file.js
              directory: `${__dirname}/examples/`,
            },
          },
        ],
      },
    },
  ],
};
```

```md
# Sample Markdown

Below is the embedded content

<!-- `markdown:sample-markdown-file.md` -->
```
