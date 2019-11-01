import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../../assets/user-profile.svg';

import './SelectEnemy.css';
import api from '../../service/api';

export default function SelectEnemy({ history, match }) {
    const [ grupos, setGrupos ] = useState(Object);
    const [ team, setTeam ] = useState(Object);
    /*
    const [ integrantes, setIntegrantes ] = useState([]);
    const [ icons, setIcons ] = useState([]);
    const lista = [];
    var listaIcon = [];
    var [ cont, setCont ] = useState(0)
    */

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
        <div className='select-enemy'>

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
