import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ExaminationList from './routes/ExaminationList';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const SubjectComponent = dynamic({
    app,
    models: () => [
      import('./models/subjects')
    ],
    component: () => import('./routes/SubjectList'),
  });
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/subjects" component={SubjectComponent} />
        <Route path="/examinations" component={ExaminationList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
