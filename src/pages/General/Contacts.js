import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../../assets/user-profile.svg'

import './Contacts.css';
import api from '../../service/api';

export default function Contacts({ history, match }) {
    const [user, setUser] = useState('');
    const [grupos, setGrupos] = useState([])
    const [atividades, setAtividades] = useState([])
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
        <div className='contacts'>

            <div className='screen-data'>
                <div className='str'>
                    Dashboard
                </div>
            </div>
            <div className='div-img-user'>
                <img src={icon.url} className='img-user' />
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
                    <a className='menu-item' href='/about'> Sobre </a>
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
                <div className='support'>
                    <div className='str-support'>
                        Suporte
                </div>
                    <div className='email-support'>
                        contato.devs@gmail.com
                </div>
                </div>

                <div className='email-devs'>
                    <div className='str-developers'>
                        Desenvolvedores
                </div>

                    <div className='dev'>
                        <div className='name'>
                            <strong>Nome</strong><br />André Fernandes Bispo
                    </div>
                        <br />
                        <div className='Profission'>
                            <strong>Profissão</strong><br />Engenheiro de Software
                    </div>
                        <br />
                        <div className='email'>
                            <strong>E-mail</strong><br />andre1@rede.ulbra.com
                    </div>
                    </div>
                    <hr />

                    <div className='dev'>
                        <div className='name'>
                            <strong>Nome</strong><br />João Vitor S. Egidio
                    </div>
                        <br />
                        <div className='Profission'>
                            <strong>Profissão</strong><br />Engenheiro de Software
                    </div>
                        <br />
                        <div className='email'>
                            <strong>E-mail</strong><br />joaovitorsoares12@rede.ulbra.com
                    </div>
                    </div>
                    <hr />

                    <div className='dev'>
                        <div className='name'>
                            <strong>Nome</strong><br />Emmanuel Peralta
                    </div>
                        <br />
                        <div className='Profission'>
                            <strong>Profissão</strong><br />Engenheiro de Software
                    </div>
                        <br />
                        <div className='email'>
                            <strong>E-mail</strong><br />emmanuelperalta8@rede.ulbra.com
                    </div>
                    </div>
                    <hr />

                    <div className='dev'>
                        <div className='name'>
                            <strong>Nome</strong><br />Igor Oliveira Valadares
                    </div>
                        <br />
                        <div className='Profission'>
                            <strong>Profissão</strong><br />Engenheiro de Software
                    </div>
                        <br />
                        <div className='email'>
                            <strong>E-mail</strong><br />@rede.ulbra.com
                    </div>
                    </div>
                    <hr />
                </div>
            </div>

        </div>

    );
}
