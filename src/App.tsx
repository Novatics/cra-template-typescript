import 'common/i18n';
import AppError from 'containers/App/AppError';
import AppLayout from 'containers/App/AppLayout';
import AppLoading from 'containers/App/AppLoading';
import AppTheme from 'containers/App/AppTheme';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from 'routes';

const App: React.FC = () => {
  return (
    <AppTheme>
      <AppError>
        <Suspense fallback={<AppLoading />}>
          <BrowserRouter>
            <AppLayout>
              <Switch>
                {routes.map(route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </Switch>
            </AppLayout>
          </BrowserRouter>
        </Suspense>
      </AppError>
    </AppTheme>
  );
};

export default App;
