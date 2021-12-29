import React from 'react';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom'
import Root from '@src/container/root'
import Resume from '@src/container/resume'
import ROUTER from '@src/common/constants/router'

function Router(){
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root></Root>
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume></Resume>
        </Route>
      </Switch>
      <Redirect to={ROUTER.root}></Redirect>
    </HashRouter>
  )
}
export default Router