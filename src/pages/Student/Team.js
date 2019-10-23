import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf, { RcElse } from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import './Team.css';
import api from '../../service/api';

export default function Team({ history, match }) {
    const [ showMembers, setShowMembers ] = useState('')
    const [ grupo, setGrupo ] = useState(Object);
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
        
        buscarTeam();

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

            <div className='menu'>
                <a href='/main'> Página Inicial </a>
                <a href='/team'> Minha Equipe </a>
                <a href='/activitys-student'> Atividades </a>
                <a onClick={() => {history.push(`/${match.params.idUser}/team/${grupo._id}/select-enemy`)}}>Batalha</a>
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
