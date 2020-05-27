import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { collectInitial } from 'node-style-loader/collect';

import './src/app.css';
import App from './src/App';

const LOCAL_URL_JS = 'http://localhost:1234/src.ed96d4b9.js';
const AWS_URL_JS = 'https://static-serverless-demo.s3.amazonaws.com/src.ed96d4b9.js';
const bundleUrl = process.env.NODE_ENV === 'production' ? AWS_URL_JS : LOCAL_URL_JS;
const host =
    process.env.NODE_ENV === 'production'
        ? 'https://s3.eu-central-1.amazonaws.com/serverless-demo'
        : 'http://localhost:3000';

const generateHTML = (markup, styleTag) =>
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="shortcut icon" href="${host}/favicon.ico">
        ${styleTag}
        <title>Serverless demo</title>
      </head>
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">${markup}</div>
        <script type="text/javascript" src="${bundleUrl}"></script>
      </body>
    </html>
  `;

const render = async () => {
    const styleTag = collectInitial();

    const markup = ReactDOMServer.renderToString(<App />);

    return generateHTML(markup, styleTag);
};

export default render;
