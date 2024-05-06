// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Set the favicon for the browser tab */}
          <link rel="shortcut icon" href="/favicon.jpeg" type="image/jpeg" />
          {/* Add any other meta tags, stylesheets, or scripts here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
