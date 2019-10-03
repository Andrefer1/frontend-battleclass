import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import MainStudent from './pages/MainStudent'
import MainTeam from './pages/MainTeam'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/main' exact component={MainStudent} />
            <Route path='/main/team' component={MainTeam} />
        </BrowserRouter>
    );
}