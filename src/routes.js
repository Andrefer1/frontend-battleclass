import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

/*GENERAL*/
import Login from './pages/General/Login'
import Password from './pages/General/Password'
import Register from './pages/General/Register'
import Test from './pages/test'

/*STUDENT*/
import Main from './pages/Student/Main'
import Team from './pages/Student/Team'
import ActivitysStudent from './pages/Student/ActivitysStudent'
import IndividualActivity from './pages/Student/IndividualActivity'
/*import Battle from './pages/Battle'*/
import Hero from './pages/Student/Hero'

/*PROFESSOR*/
import AddActivity from './pages/Professor/AddActivity'

export default function Routes() {
    return (
        <BrowserRouter basename="/frontend-battleclass">

            {/*GENERAL*/}
            <Route path='/' exact component={Login} />
            <Route path='/recover' component={Password} />
            <Route path='/register' component={Register} />
            <Route path='/:id/icon' component={Hero} />
            <Route path='/contacts' component={Main} />
            <Route path='/about' component={Main} />
            {/**
            ## Rota para adicionar novos icones ##
                <Route path='/test' component={Test}/>
            */} 

            {/*STUDENT*/}
            <Route path='/main/:id' component={Main} />
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
            <Route path='/activitys/add-activity' component={AddActivity} />
            <Route path='/settings' component={Main} />
        </BrowserRouter>
    );
}