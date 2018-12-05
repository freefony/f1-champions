import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Races from './races/RacesContainer'
import YearList from './YearList'

export default () => <Switch>
  <Route path='/races/:year' component={Races} />
  <Route exact path='/' component={YearList} />
</Switch>
