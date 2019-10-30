import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../service/api'

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import './Dashboard.css';

export default function Team() {
    const [showMembers, setShowMembers] = useState('');
    const [ dados, setDados ] = useState(Object)
    const [ alunos, setAlunos ] = useState(0);
    const [ atividades, setAtividades ] = useState(0);
    const [ grupos, setGrupos ] = useState(0);
    const [ batalhas, setBatalhas ] = useState(0);

    function dropdown() {
        setShowMembers('true')
    }


    useEffect(() => {
        async function buscarDados(){
            const response = await api.get('/dashboard');

            console.log(response.data)
            setDados(response.data);
            setAlunos(response.data.usuarios.length);
            setGrupos(response.data.grupos.length);
            setAtividades(response.data.atividades.length);
            setBatalhas(response.data.batalhas.length)
            
            
            
        }
        buscarDados();
        
    }, []);

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

            <div className='content'>
                <div className='cards-students'>
                    <ul>
                        <li>
                            <div className='card-individual'>
                                <div className='dataname'>
                                    Atividades
                                </div>
                                <div className='number'>
                                    {atividades}
                                </div>
                            </div>
                        </li>
                        
                        <li>
                            <div className='card-individual'>
                                <div className='dataname'>
                                    Alunos
                                </div>
                                <div className='number'>
                                    { alunos }
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='card-individual'>
                                <div className='dataname'>
                                    Equipes
                                </div>
                                <div className='number'>
                                    {grupos}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='card-individual'>
                                <div className='dataname'>
                                    Batalhas
                                </div>
                                <div className='number'>
                                    {batalhas}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        </div>
    );
}

