import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import MainStudent from './pages/MainStudent'
import MainTeam from './pages/MainTeam'
import Autenticacao from './pages/Autenticacao'

export default function Routes() {
    return (
        <BrowserRouter basename="/frontend-battleclass">
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/main' exact component={MainStudent} />
            <Route path='/main/team' component={MainTeam} />
            <Route path='/autenticar/:token' component={Autenticacao} />
        </BrowserRouter>
    );
}