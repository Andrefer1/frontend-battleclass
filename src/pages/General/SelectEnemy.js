import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf, { RcElse } from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import './SelectEnemy.css';
import api from '../../service/api';

export default function Team({ history, match }) {
    const [ showMembers, setShowMembers ] = useState('')
    const [ grupos, setGrupos ] = useState(Object);
    const [ team, setTeam ] = useState(Object);
    const [ integrantes, setIntegrantes ] = useState([]);
    const [ icons, setIcons ] = useState([]);
    const lista = [];
    var listaIcon = [];
    var [ cont, setCont ] = useState(0)

    function dropdown() {
        setShowMembers('true')
    }

    useEffect(() => {
        async function buscarTeams(){
            const response = await api.get('/buscar/grupo/all')
            setGrupos(response.data.filter(t => t._id !== match.params.idGrupo));
        }

        async function buscarGrupo() {
            const response = await api.get('/buscar/grupo', {headers: {
                id: match.params.idGrupo
            }})
            
            setTeam(response.data)
        }
        buscarTeams();
        buscarGrupo();

    }, [])

    return (
        <div className='team'>

            <nav>
                <div className='navbar'>
                    <div className='sitename'>
                        <a href='/main'>
                            BATTLECLASS
                        </a>
                    </div>
                    <div className='student-data'>
                        <div className='team-name-principal'>
                            {team.nome}
                        </div>
                        <div className='trace'>
                            -
                        </div>
                        <div className='team-points-principal'>
                            {team.pontuacao}
                    </div>
                    </div>
                </div>

                <hr id='hr' />
            </nav>

        
            <div className='menu'>
                <a onClick={() => (history.push(`/${match.params.idUser}/main`))}> Página Inicial </a>
                <a onClick={() => (history.push(`/${match.params.idUser}/team/${match.params.idGrupo}`))}> Minha Equipe </a>
                <a onClick={() => (history.push(`/${match.params.idUser}/activitys-student`))}> Atividades </a>
                <div className='menu-bottom'>
                    <a onClick={() => (history.push(`/${match.params.idUser}/settings`))}> Configurações </a>
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
                { grupos.length > 0 ? (
                    <ul>
                        { grupos.map( grupo => (
                            
                                <li key={grupo._id}>
                                    <a onClick={() => {history.push(`/${match.params.idUser}/team/${match.params.idGrupo}/battle/${grupo._id}`)}}>
                                        <div className='card-individual' >
                                            <div className='profile-data'>
                                                <div className='img-profile'>
                                                    <img src={userProfile} alt='Imagem do grupo' className='img-individual' />
                                                </div>
                                                <div className='username-profile'>
                                                    {grupo.nome}
                                                </div>
                                            </div>
                                            <div className='points'>
                                                {grupo.pontuacao}
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            
                        ))}
                        
                    </ul>
                ) : (
                    <div> Sem Equipes </div>
                )}
                
            </div>
        </div>
    );
}
