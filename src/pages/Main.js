import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../assets/user-profile.svg'

import './Main.css';

export default function MainStudent({ history }) {

    function selecionarEquipe(){
        history.push('/main/team')
    }

    return (
    <div className='main-student'>
    
        <nav>
            <div className='navbar'>
                <div className='sitename'>
                    <a href='/main'> 
                        BATTLECLASS
                    </a>
                </div>
                <div className='student-data'>
                    <div className='student-name'>
                        ANDRÉ FERNANDES BISPO
                    </div>
                    <div className='trace'>
                        -
                    </div>
                    <div className='student-points'>
                        75 PONTOS
                    </div>
                </div>
            </div>
           
            <hr id='hr' />
        </nav>

        <div className='menu'>
                <a href='/main'> Página Inicial </a>
                <a href='/team'> Minha Equipe </a>
                <a href='/activitys-student'> Atividades </a>
                <div className='menu-bottom'>
                    <a href='/settings'> Configurações </a>
                    <a href='/contacts'> Contatos </a>
                    <a href='/about'> Sobre </a>
                </div>
            </div>

        <div className='rankings'>
            <div className='ranking-do-dia' >
                <div className='ranking-name'>
                    <b> Ranking do Dia </b>
                </div>
                <ul>
                    <li>
                        <div className='team-ranking'>
                            <div className='team-profile'>
                                <img src={userProfile} alt='Imagem do time' />
                            </div>          
                            <div className='team-name'>
                                Bonde do Tigrãaaaaao
                            </div>       
                            <div className='team-points'>
                                75
                            </div>
                        </div>
                    </li>
                    <hr id='hr-ranking'/>
                    <li>
                        <div className='team-ranking'>
                            <div className='team-profile'>
                                <img src={userProfile} alt='Imagem do time' />
                            </div>   
                            <div className='team-name'>
                                Equipe 2
                            </div>       
                            <div className='team-points'>
                                60
                            </div>
                        </div>
                    </li>
                    <hr id='hr-ranking'/>
                    <li>
                        <div className='team-ranking'>
                            <div className='team-profile'>
                                <img src={userProfile} alt='Imagem do time' /> 
                            </div>          
                            <div className='team-name'>
                                Equipe 3
                            </div>       
                            <div className='team-points'>
                                57
                            </div>
                        </div>
                    </li>
                    <hr id='hr-ranking'/>
                </ul>
            </div>
        </div>

        <div className='tasks'>
            <div className='task'>
                <div className='task-content'>
                    <div className='task-title'>
                        <b>[Título da Atividade]</b>
                    </div>
                    <div className='task-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
                        error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam 
                        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                </div>
                <div className='task-points'>
                    <div className='task-points-notes'>
                        <b>Nota</b>
                    </div>
                    <div className='task-pontuation'>
                        65
                    </div>
                </div>
            </div>
        </div>

    </div>

    );
}
