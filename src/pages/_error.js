import React from 'react';
import Error from '../error/component';

export default function ErrorPage({ statusCode }) {
  return <Error statusCode={statusCode} />;
}

ErrorPage.getInitialProps = function ({ res, err }) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
