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
import PrepararBatalha from './pages/General/PrepararBatalha'
import SelectEnemy from './pages/General/SelectEnemy'

/*PROFESSOR*/
import Dashboard from './pages/Professor/Dashboard'
import Students from './pages/Professor/Students'
import Teams from './pages/Professor/Teams'
import Activitys from './pages/Professor/Activitys'
import Activity from './pages/Professor/IndividualActivity'
import AddActivity from './pages/Professor/AddActivity'
import Batalha from './pages/General/Batalha'


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
            <Route path='/:idUser/team/:idGrupo/select-enemy' component={SelectEnemy} />
            <Route path='/:idUser/team/:idGrupo/battle/:idEnemy' component={PrepararBatalha} />
            <Route path='/battle' component={Batalha} />
            
            
                <Route path='/test' component={Test}/>
             

            {/*STUDENT*/}
            <Route path='/:idUser/main' component={Main} />
            <Route path='/:idUser/team/:idGrupo' exact component={Team} />
            <Route path='/:idUser/activitys-student' component={ActivitysStudent} />
            <Route path='/:idUser/activitys-student/individual-activity/:idAtividade' component={IndividualActivity} />
            <Route path='/settings' component={Main} />
            

            {/*PROFESSOR*/}
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/students' component={Students} />
            <Route path='/teams' component={Teams} />
            <Route path='/activitys' exact component={Activitys} />
            <Route path='/activitys/activity' component={Activity} />
            <Route path='/activitys/add-activity' component={AddActivity} />
            <Route path='/settings' component={Main} />
        </BrowserRouter>
    );
}