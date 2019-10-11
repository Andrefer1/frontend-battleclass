import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Authenticate from './pages/Authenticate'

import Main from './pages/Main'
import Team from './pages/Team'
import ActivitysStudent from './pages/Student/ActivitysStudent'
import IndividualActivity from './pages/Student/IndividualActivity'


export default function Routes() {
    return (
        <BrowserRouter basename="/frontend-battleclass">
            {/*GENERAL*/}
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/authenticate/:token' component={Authenticate} />

            <Route path='/contacts' component={Main} />
            <Route path='/about' component={Main} />

            {/*STUDENT*/}
            <Route path='/main' component={Main} />
            <Route path='/team' component={Team} />
            <Route path='/activitys-student' exact component={ActivitysStudent} />
            <Route path='/activitys-student/individual-activity' component={IndividualActivity} />
            <Route path='/settings' component={Main} />

            {/*PROFESSOR*/}
            <Route path='/dashboard' component={Main} />
            <Route path='/student' component={Main} />
            <Route path='/teams' component={Main} />
            <Route path='/activitys' component={Main} />
            <Route path='/activitys/activity' component={Main} />
            <Route path='/activity/add-activity' component={Main} />
            <Route path='/settings' component={Main} />
            

            
        </BrowserRouter>
    );
}