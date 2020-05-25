import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { collectInitial } from 'node-style-loader/collect'

import './src/app.css';
import App from './src/App';


const LOCAL_URL_JS = 'http://localhost:3000/static/js/bundle.js'
const AWS_URL_JS = 'https://s3.eu-central-1.amazonaws.com/lambda-react-demo-fronttalks/static/js/main.js';
const bundleUrl = process.env.NODE_ENV === 'AWS' ? AWS_URL_JS : LOCAL_URL_JS;
const host = process.env.NODE_ENV === 'AWS' ? 'https://s3.eu-central-1.amazonaws.com/lambda-react-demo-fronttalks' : 'http://localhost:3000' ;


const generateHTML = (markup, styleTag) => (
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="shortcut icon" href="${host}/favicon.ico">
    ${styleTag}
    <title>FrontTlaks Videos111</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">${markup}</div>
    <script type="text/javascript" src="${bundleUrl}"></script>
  </body>
</html>`
);

const render = () => {
  const styleTag = collectInitial();

  return () => {

    const markup = ReactDOMServer.renderToString(<App />);

    return generateHTML(markup, styleTag);
  };
}

export default render;
