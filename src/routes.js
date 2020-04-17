import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Posts from './Components/Posts'
import BigPost from './Components/BigPost'

export default(
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/posts' component={Posts} />
    <Route path='/post/:id' component={BigPost} />
  </Switch>
)