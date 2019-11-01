import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../../assets/user-profile.svg'

import './About.css';
import api from '../../service/api';

export default function About({ history, match }) {
    const [user, setUser] = useState('');
    const [grupos, setGrupos] = useState([])
    const [setAtividades] = useState([])
    const [icon, setIcon] = useState(Object)

    var listaAux = []

    useEffect(() => {
        async function buscarUser() {
            const response = await api.get('/buscar/userId', {
                headers: {
                    id: match.params.idUser
                }
            })

            if (response.data != null) {
                setUser(response.data);
            }

            busarIcon(response.data.icon);
        }

        async function buscarTeams() {
            const response = await api.get('/buscar/grupo/all')

            listaAux = response.data
            listaAux.sort(function (a, b) {
                return b.pontuacao - a.pontuacao
            })

            setGrupos(listaAux);
        }

        async function buscarAtividades() {
            const response = await api.get('/buscar/atividade/all')
            setAtividades(response.data)
        }

        async function busarIcon(id) {
            const response = await api.get('/buscar/icon', {
                headers: {
                    id: id
                }
            })
            setIcon(response.data)

        }

        buscarUser();
        buscarTeams();
        buscarAtividades();

        console.log(user)
    }, [])


    return (
        <div className='about'>

            <div className='screen-data'>
                <div className='str'>
                    Dashboard
                </div>
            </div>
            <div className='div-img-user'>
                <img src={icon.url} className='img-user' alt='Ícone do usuário'/>
            </div>

            <div className='menu'>
                <a className='sitename' href='/dashboard'>BattleClass</a>
                <a className='menu-item' href='/dashboard'> Página Inicial </a>
                <a className='menu-item' href='/students'> Alunos </a>
                <a className='menu-item' href='/teams'> Equipes </a>
                <a className='menu-item' href='/activitys'> Atividades </a>
                <div className='menu-bottom'>
                    <a className='menu-item' href='/settings'> Configurações </a>
                    <a className='menu-item' href='/contacts'> Contatos </a>
                    <a className='menu-item selected' href='/about'> Sobre </a>
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
                <div className='version'>
                    Versão: <a href='https://github.com/Andrefer1/frontend-battleclass'>2.1.2</a>
                </div>
                <div className='text'>
                    Este sistema foi desenvolvido pela equipe formada por André F. Bispo,
                    João Vitor S. Egidio, Emmanuel Peralta e Igor Valadares da matéria
                    Tópicos II (2019/2) do CEULP/ULBRA, ministrada pela professora Heloíse.
            </div>
            </div>

        </div>

    );
}
