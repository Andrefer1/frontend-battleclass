import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import Team from './pages/Team'
import Authenticate from './pages/Authenticate'

export default function Routes() {
    return (
        <BrowserRouter basename="/frontend-battleclass">
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/main' exact component={Main} />
            <Route path='/main/team' component={Team} />
            <Route path='/authenticate/:token' component={Authenticate} />
        </BrowserRouter>
    );
}