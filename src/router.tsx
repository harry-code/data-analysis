import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '~/components/common/ErrorBoundary';

const Index = React.lazy(() => import('~/views/index/index'))

export default () => (
  <div className="page-theme">
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Index /></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </div>
)