/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import {Route, Router, IndexRoute} from 'react-router'
import Index from './Index'
import Navigation from './navigation/container/Navigation'
import Theme from './Theme';
import History from './History';
import App from './page/App';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
var routes= (
  <Route component={Index}>
    <Route path="/" component={Navigation}>
      <IndexRoute component={App}/>
    </Route>
  </Route>
);
render(<Theme><Router history={History} routes={routes} /></Theme>, document.getElementById('root'));
