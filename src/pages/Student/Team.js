import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf, { RcElse } from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import './Team.css';
import api from '../../service/api';

export default function Team({ history, match }) {
    const [ showMembers, setShowMembers ] = useState('')
    const [ grupo, setGrupo ] = useState(Object);
    const [ grupos, setGrupos ] = useState([])
    const [ integrantes, setIntegrantes ] = useState([]);
    const [ icons, setIcons ] = useState([]);
    const lista = [];
    var listaIcon = [];
    var [ cont, setCont ] = useState(0)

    function dropdown() {
        setShowMembers('true')
    }

    useEffect(() => {
        async function buscarTeam(){
            const response = await api.get('/buscar/grupo', {headers: {
                id: match.params.idGrupo
            }})

            for (let u in response.data.integrantes) {
                buscarIntegrantes(response.data.integrantes[u])
            }
            console.log(response.data)
            setGrupo(response.data)
        }
        
        async function buscarIntegrantes(id){
            const response = await api.get('/buscar/userId', {headers: {
                id:id
            }})

            await buscarIcon(response.data.icon)
            
            lista.push(response.data)

            setCont(cont += 1)
            setIntegrantes(lista)

        }

        async function buscarIcon(id) {
            const response = await api.get('/buscar/icon', {headers: {
                id: id
            }})
    
            
            await listaIcon.push(response.data);
            console.log(response.data)
            
            setIcons(listaIcon);
        }

        async function buscarTeams(){
            const response = await api.get('/buscar/grupo/all')
            setGrupos(response.data);
        }
        
        buscarTeam();
        buscarTeams();

    }, [])

    return (
        <div className='team'>

            <nav>
                <div className='navbar'>
                    <div className='sitename'>
                        <a className='' onClick={() => (history.push(`/${match.params.idUser}/main`))}> BATTLECLASS </a>
                    </div>
                    <div className='student-data'>
                        <div className='team-name-principal'>
                            {grupo.nome}
                        </div>
                        <div className='trace'>
                            -
                        </div>
                        <div className='team-points-principal'>
                            {grupo.pontuacao}
                    </div>
                    </div>
                </div>

                <hr id='hr' />
            </nav>

            {/*
            <div className='menu'>
                <a onClick={() => (history.push(`/${match.params.idUser}/main`))}> Página Inicial </a>
                <a onClick={() => (history.push(`/${match.params.idUser}/team/${match.params.idGrupo}`))}> Minha Equipe </a>
                <a onClick={() => (history.push(`/${match.params.idUser}/activitys-student`))}> Atividades </a>
                <a onClick={() => (history.push(`/${match.params.idUser}/team/${match.params.idGrupo}/select-enemy`))}> Batalha </a>
                <div className='menu-bottom'>
                    <a onClick={() => (history.push(`/${match.params.idUser}/settings`))}> Configurações </a>
                    <a href='/contacts'> Contatos </a>
                    <a href='/about'> Sobre </a>
                </div>
            </div>
            */}

            <div className='rankings'>
                <div className='ranking-do-dia' >
                    <div className='ranking-name'>
                        <b> Ranking do Dia </b>
                    </div>
                    { grupos.length > 0 ? (
                        <ul>
                            { grupos.map(grupoD => (
                                <div>
                                    <li key={grupoD._id}>
                                        <div className='team-ranking'>
                                            <div className='team-profile'>
                                                <img src={userProfile} alt='Imagem do time' />
                                            </div>          
                                            <div className='team-name'>
                                                {grupoD.nome}
                                            </div>       
                                            <div className='team-points'>
                                                {grupoD.pontuacao}
                                            </div>
                                        </div>
                                    </li>
                                    <hr className='hr-ranking' />
                                </div>
                                
                            ))}
                            
                        </ul>
                    ): (
                        <div> Sem grupos </div>
                    )}
                    
                </div>
            </div>

            <div className='cards-students'>
                { cont > 0 ? (
                    <ul>
                        {console.log(integrantes)}
                        { integrantes.map( (integrante, index) => (
                            
                            <li key={integrante._id}>
                                <div className='card-individual' >
                                    <div className='profile-data'>
                                        <div className='img-profile'>
                                            <img src={icons[index].url} alt='Imagem do usuário' className='img-individual' />
                                        </div>
                                        <div className='username-profile'>
                                            {integrante.nome}
                                        </div>
                                    </div>
                                    <div className='points'>
                                        {integrante.pontuacao}
                                    </div>
                                </div>
                            </li>
                        ))}
                        
                    </ul>
                ) : (
                    <div> Sem Integrantes </div>
                )}
                
            </div>
        </div>
    );
}
