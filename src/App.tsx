import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyle from './styles/globalStyle';
import routes, {IRoute} from './routes';

const App: React.FC = () => {
  const routeSwitchs = routes.map(
    (route: IRoute, index: number) => 
      (
        <Route key={index} component={route.component} exact={route.exact} path={route.path} />
      )
    );

  return (
    <>
      <Router>
        <Switch>
          {routeSwitchs}
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
