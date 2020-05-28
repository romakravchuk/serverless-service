import render from './renderer';

const createResponse = (html) => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        body: html,
    };
};

export const renderPage = (event, context, cb) => {
    render()
        .then((html) => {
            return cb(null, createResponse(JSON.stringify(html)));
        })
        .catch((e) => cb(e));
};
