import React, { lazy, Suspense } from 'react';

const LazyFlexHGrox = lazy(() => import('./FlexHGrox'));

const FlexHGrox = props => (
  <Suspense fallback={null}>
    <LazyFlexHGrox {...props} />
  </Suspense>
);

export default FlexHGrox;
