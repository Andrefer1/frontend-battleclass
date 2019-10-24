import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import './Students.css';
import api from '../../service/api';

export default function Team() {
    const [showMembers, setShowMembers] = useState('')
    const [ alunos, setAlunos ] = useState([])

    function dropdown() {
        setShowMembers('true')
    }
 
    useEffect(() => {
        async function buscarAlunos(){
            const response = await api.get('/buscar/alunos')

            console.log(response.data)
            setAlunos(response.data)
        }
        buscarAlunos();
    }, []);

    return (
        <div className='students'>

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
                {/*<ul>
                    <li>
                        <div className='student-data'>{/*'line-title'*/}
                            {/*<div className='student-name'>
                                NOME DO ALUNO
                            </div>
                            <div className='student-points'>
                                NOTA
                            </div>
                            <div className='team-name'>
                                NOME DA EQUIPE
                            </div>
                            <div className='team-points'>
                                NOTA
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='student-data'>
                            <div className='student-name'>
                                André Fernandes Bispo
                            </div>
                            <div className='student-points'>
                                75
                            </div>
                            <div className='team-name'>
                                Bonde do Tigrãaaaaao
                            </div>
                            <div className='team-points'>
                                75
                            </div>
                        </div>
                    </li>*/}
                    
                    <div className='student-data'>
                        {alunos.length > 0 ? (
                            <ul>
                                {alunos.map(aluno => (
                                    <li>
                                        <div className='student-name'>
                                            {aluno.nome}
                                        </div>
                                    </li>
                                ))}
                                {alunos.map(aluno => (
                                    <li>                                        
                                        <div className='student-points'>
                                            {aluno.pontuacao}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ): (
                            <div> Sem Alunos </div>
                        )}
                        {/**
                            <li>
                                <div className='team-name'>
                                    André Fernandes Bispo
                                </div>
                                <div className='team-name'>
                                    Joao Vitor Soares Egidio
                                </div>
                                <div className='team-name'>
                                    Emmanuel Peralta
                                </div>
                            </li>
                            <li>
                                <div className='team-points'>
                                    75
                                </div>
                                <div className='team-points'>
                                    65
                                </div>
                                <div className='team-points'>
                                    85
                                </div>
                            </li>
                        </ul>
                        
                        */}
                            
                    </div>
                    
                
                    {/*
                    <li>
                        <div className='card-individual'>
                            <div className='dataname'>
                                João Vitor Soares Egidio
                            </div>
                            <div className='number'>
                                65
                            </div>
                            <div className='number'>
                                Os Hawaianos
                            </div>
                            <div className='number'>
                                85
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card-individual'>
                            <div className='dataname'>
                                Emmanuel Peralta
                            </div>
                            <div className='number'>
                                85
                            </div>
                            <div className='number'>
                                Os Avassaladores
                            </div>
                            <div className='number'>
                                65
                            </div>
                        </div>
                    </li>
                    */}
   

            </div>
                    
        </div>
    );
}
