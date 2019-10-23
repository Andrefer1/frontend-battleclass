import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

/*GENERAL*/
import Login from './pages/General/Login'
import Password from './pages/General/Password'
import Register from './pages/General/Register'
import Test from './pages/test'
import Settings from './pages/General/Settings'


/*STUDENT*/
import Main from './pages/Student/Main'
import Team from './pages/Student/Team'
import ActivitysStudent from './pages/Student/ActivitysStudent'
import IndividualActivity from './pages/Student/IndividualActivity'
/*import Battle from './pages/Battle'*/
import Hero from './pages/Student/Hero'
import Batalha from './pages/General/Batalha'


/*PROFESSOR*/
import Dashboard from './pages/Professor/Dashboard'
import Students from './pages/Professor/Students'
import Teams from './pages/Professor/Teams'
import Activitys from './pages/Professor/Activitys'
import Activity from './pages/Professor/IndividualActivity'
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
            <Route path='/battle' component={Batalha} />
            {/**
            ## Rota para adicionar novos icones ##
                <Route path='/test' component={Test}/>
            */} 
            <Route path='/settings' component={Settings} />
            

            {/*STUDENT*/}
            <Route path='/:idUser/main' component={Main} />
            <Route path='/team' component={Team} />
            <Route path='/:idUser/activitys-student' exact component={ActivitysStudent} />
            <Route path='/:idUser/activitys-student/individual-activity/:idAtividade' component={IndividualActivity} />
            

            {/*PROFESSOR*/}
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/students' component={Students} />
            <Route path='/teams' component={Teams} />
            <Route path='/activitys' exact component={Activitys} />
            <Route path='/activitys/activity' component={Activity} />
            <Route path='/activitys/add-activity' component={AddActivity} />
        </BrowserRouter>
    );
}