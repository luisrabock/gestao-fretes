import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../common/template/home'
import Notfis from '../common/template/notfis'
import Conemb from '../common/template/conemb'
import App from '../main/app'

export default (props) => (
  <Router history={hashHistory}>
        <Route path='/' component={Home} />
       <Route path='/notfis' component={Notfis} />
       <Route path='/conemb' component={Conemb} />
       <Redirect from ='*' to='/' />
  </Router>
);