import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../../assets/user-profile.svg';

import './Students.css';
import api from '../../service/api';

export default function Students({ history, match }) {
    const [grupos, setGrupos] = useState([])
    const [alunos, setAlunos] = useState([])
    const [icon] = useState(Object)

    var listaAux = []

    useEffect(() => {
        async function buscarTeams() {
            const response = await api.get('/buscar/grupo/all')

            listaAux = response.data
            listaAux.sort(function (a, b) {
                return b.pontuacao - a.pontuacao
            })

            setGrupos(listaAux);
        }

        async function buscarAlunos() {
            const response = await api.get('/buscar/alunos')

            console.log(response.data)
            setAlunos(response.data)
        }
        /*
        async function busarIcon(id) {
            const response = await api.get('/buscar/icon', {
                headers: {
                    id: id
                }
            })
            setIcon(response.data)
        }
        */

        buscarTeams();
        buscarAlunos();

    }, []);

    return (
        <div className='students'>

            <div className='screen-data'>
                <div className='str-dashboard'>
                    Alunos
                </div>
            </div>
            <div className='div-img-user'>
                <img src={icon.url} className='img-user' alt='Ícone do usuário' />
            </div>

            <div className='menu'>
                <a className='sitename' href='/dashboard'> BattleClass </a>
                <a className='menu-item' href='/dashboard'> Dashboard </a>
                <a className='menu-item selected' href='/students'> Alunos </a>
                <a className='menu-item' href='/teams'> Equipes </a>
                <a className='menu-item' href='/activitys'> Atividades </a>
                <div className='menu-bottom'>
                    <a className='menu-item disabled' > Configurações </a> {/*onClick={() => (history.push(`/${match.params.idUser}/settings`))}*/}
                    <a className='menu-item disabled' > Contatos </a> {/*href='/contacts'*/}
                    <a className='menu-item disabled' > Sobre </a> {/*href='/about'*/}
                </div>
            </div>

            <div className='ranking'>
                <div className='str-ranking'>
                    <b> Ranking </b>
                </div>
                {grupos.length > 0 ? (
                    <ul>
                        {grupos.map(grupo => (
                            <div key={grupo._id}>
                                <li key={grupo._id}>
                                    <div className='team-ranking'>
                                        <div className='team-profile'>
                                            <img src={userProfile} alt='Imagem do time' />
                                        </div>
                                        <div className='team-name'>
                                            {grupo.nome}
                                        </div>
                                        <div className='team-points'>
                                            {grupo.pontuacao}
                                        </div>
                                    </div>
                                </li>
                            </div>

                        ))}

                    </ul>
                ) : (
                        <div> Sem grupos </div>
                    )}

            </div>

            <div className='content'>
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
                        <ul>
                            <li className='li'>
                                <div className='line-title'>
                                    <div className='str-student-name'>
                                        NOME DO ALUNO
                                    </div>

                                    <div className='str-student-points'>
                                        NOTA
                                    </div>
                                    {/*
                                    <div className='team-name'>
                                        NOME DA EQUIPE
                                    </div>
                                    <div className='team-points'>
                                        NOTA
                                    </div>
                                    */}
                                </div>
                            </li>
                            {alunos.length > 0 ? (
                                <div>
                                    {alunos.map(aluno => (
                                        <li className='li2'>
                                            <div className='div-student-name'>
                                                <div className='student-name'>
                                                    {aluno.nome}
                                                </div>
                                            </div>

                                            <div className='student-points'>
                                                {aluno.pontuacao}
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            ) : (
                                    <div> Não há alunos </div>
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

                        </ul>


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
            </div>
        </div>
    );
}
