import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';

import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './router';
import store from './store';

import { BackTop, Skeleton } from 'antd';
import FAppHeader from 'components/app-header';
import FAppFooter from 'components/app-footer';
import FAppPlayerBar from './pages/player/app-player-bar';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <FAppHeader />
        <Suspense fallback={<Skeleton active />}>
          {renderRoutes(routes)}
        </Suspense>
        <FAppFooter />
        <FAppPlayerBar />
        <BackTop />
      </HashRouter>
    </Provider>
  )
});
