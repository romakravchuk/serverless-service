import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import { collectInitial } from 'node-style-loader/collect';

import './src/app.css';
import AppChart from './src/AppChart';

const LOCAL_URL_JS = 'http://localhost:1234/src.a2b27638.js';
const AWS_URL_JS = 'https://static-serverless-demo.s3.amazonaws.com/src.dc7b7fcf.js';
const bundleUrl = process.env.NODE_ENV === 'production' ? AWS_URL_JS : LOCAL_URL_JS;

const generateHTML = (markup) => ({
    html: `<div id="root">${markup}</div>`,
    script: bundleUrl,
});

const render = async () => {
    // uncomment this if we need css
    // const styleTag = collectInitial();

    const markup = ReactDOMServer.renderToString(<AppChart />);

    return generateHTML(markup);
};

export default render;
