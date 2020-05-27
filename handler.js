import render from './renderer';

const createResponse = (html) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    },
    body: html
  };
};

export const renderPage = (event, context, cb) => {
  render()
      .then((html) => {
        return cb(null, createResponse(html));
      })
      .catch(e => cb(e));
}
