import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

/*GENERAL*/
import Login from './pages/Login'
import Password from './pages/Password'
import Register from './pages/Register'

import Recover from './pages/Recover'
import Hero from './pages/Hero'

import Main from './pages/Main'
import Team from './pages/Team'
/* import ActivitysStudent from './pages/Student/ActivitysStudent'
import IndividualActivity from './pages/Student/IndividualActivity' */



/*PROFESSOR*/


export default function Routes() {
    return (
        <BrowserRouter basename="/frontend-battleclass">

            {/*GENERAL*/}
            <Route path='/' exact component={Login} />
            <Route path='/recover' component={Password} />
            <Route path='/register' component={Register} />
            <Route path='/:id/icon' component={Hero} />
            <Route path='/recover' component={Recover} />

            <Route path='/contacts' component={Main} />
            <Route path='/about' component={Main} />

            {/*STUDENT*/}
            <Route path='/main/:id' component={Main} />
            <Route path='/team' component={Team} />
            {/*
                <Route path='/activitys-student' exact component={ActivitysStudent} />
                <Route path='/activitys-student/individual-activity' component={IndividualActivity} />
            */}
            <Route path='/settings' component={Main} />

            {/*PROFESSOR*/}
            <Route path='/dashboard' component={Main} />
            <Route path='/student' component={Main} />
            <Route path='/teams' component={Main} />
            <Route path='/activitys' component={Main} />
            <Route path='/activitys/activity' exact component={Main} />
            <Route path='/activitys/activity/add-activity' component={Main} />
            <Route path='/settings' component={Main} />

            <Route path='/test' component={Test} />
        </BrowserRouter>
    );
}