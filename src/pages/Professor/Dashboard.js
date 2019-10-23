import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import './Dashboard.css';

export default function Team() {
    const [showMembers, setShowMembers] = useState('')

    function dropdown() {
        setShowMembers('true')
    }

    return (
        <div className='dashboard'>

            <nav>
                <div className='navbar'>
                    <div className='sitename'>
                        <a href='/main'>
                            BATTLECLASS
                        </a>
                    </div>
                    <div className='student-data'>
                        <div className='team-name-principal'>
                            Bonde do Tigrãaaaaao
                        </div>
                        <div className='trace'>
                            -
                        </div>
                        <div className='team-points-principal'>
                            75 PONTOS
                    </div>
                    </div>
                </div>

                <hr id='hr' />
            </nav>

            <div className='menu'>
                <a href='/dashboard'> Página Inicial </a>
                <a href='/students'> Alunos </a>
                <a href='/teams'> Equipes </a>
                <a href='/activitys'> Atividades </a>
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
                            <div className='team-ranking' onClick={dropdown}>
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
                            <RcIf if={showMembers === "true"}>
                                teste
                            </RcIf>
                        </li>
                        <hr id='hr-ranking' />
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
                        <hr id='hr-ranking' />
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
                        <hr id='hr-ranking' />
                    </ul>
                </div>
            </div>

            <div className='cards-students'>
                <ul>
                    <li>
                        <div className='card-individual'>
                            <div className='dataname'>
                                Atividades
                            </div>
                            <div className='number'>
                                10
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card-individual'>
                            <div className='dataname'>

                            </div>
                            <div className='number'>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card-individual'>
                            <div className='dataname'>
                                Alunos
                            </div>
                            <div className='number'>
                                17
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card-individual'>
                            <div className='dataname'>
                                Equipes
                            </div>
                            <div className='number'>
                                5
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card-individual'>
                            <div className='dataname'>
                                Batalhas
                            </div>
                            <div className='number'>
                                7
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        
            <canvas id="myChart" width="400" height="400"></canvas>
            
        </div>
    );
}

