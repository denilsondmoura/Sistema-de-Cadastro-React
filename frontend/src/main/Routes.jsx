import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCRUD from '../components/user/User'

export default (props) => 
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/users' component={UserCRUD}></Route>
        <Redirect from='*' to='/'/>
    </Switch>