import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';
import api from '../../service/api';

import './ActivitysStudent.css';

export default function Activity({ history, match }) {
    const [showMembers, setShowMembers] = useState('')
    const [ atividades, setAtividade ] = useState([]);
    const [ grupo, setGrupo ] = useState(Object);
    const [ grupos, setGrupos ] = useState([]);

    function dropdown() {
        setShowMembers('true')
    }

    function navegarAtividade(atividade){
        history.push(`/${match.params.idUser}/activitys-student/individual-activity/${atividade._id}`)
        
    }

    useEffect(() => {
        async function buscarAtividades() {
            const response = await api.get('/buscar/atividade/all');
            //heros = response.data;
           
            setAtividade(response.data.reverse()) // reverse() é para colocar a lista de tras pra frente.
        }

        async function buscarUsuario() {
            const response = await api.get('/buscar/userId', {headers: {
                id: match.params.idUser
            }})

            buscarGrupo(response.data.grupo)
        }

        async function buscarGrupo(id) {
            const response = await api.get('/buscar/grupo', {headers: {
                id:id
            }})

            setGrupo(response.data)
        }

        async function buscarGrupos() {
            const response = await api.get('/buscar/grupo/all')

            setGrupos(response.data)
        }
        
        buscarAtividades();
        buscarGrupos();
        buscarUsuario();
    }, [])


    return (
        <div className='activitys-student'>

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
                <a onClick={() => (history.push(`/${match.params.idUser}/main`))}> Página Inicial </a>
                <a onClick={() => (history.push(`/${match.params.idUser}/team/${grupo._id}`))}> Minha Equipe </a>
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
                    { grupos.length > 0 ? (
                        <ul>
                            { grupos.map(grupo => (
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
                                    <hr className='hr-ranking' />
                                </div>
                                
                            ))}
                            
                        </ul>
                    ): (
                        <div> Sem grupos </div>
                    )}
                    
                </div>
            </div>

            <div className='cards-activitys'>
                { atividades.length > 0 ? (
                    <ul>
                        { atividades.map(atividade =>(
                            <li key={atividade._id}>
                            <a onClick={()=> navegarAtividade(atividade)}>
                                <div className='card-individual'>
                                    <div className='activity-data'>
                                        <div className='activity-title'>
                                            <strong>{atividade.titulo}</strong>
                                        </div>
                                        <div className='activity-date'>
                                            Entrega: {atividade.dataEntrega}
                                        </div>
                                    </div>
                                    <div className='activity-content'>
                                        {atividade.conteudo}
                                    </div>
                            </div>
                            </a>
                        </li>
                        ))}
                        
                    </ul>
                ) : (
                    <div className="empty">Não tem nenhuma atividade :( </div>
                )}

            </div>
        </div>
    );
}
