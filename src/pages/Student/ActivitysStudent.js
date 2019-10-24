import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';
import api from '../../service/api';

import './ActivitysStudent.css';

export default function Activity({ history, match }) {
    const [showMembers, setShowMembers] = useState('')
    const [ atividades, setAtividade ] = useState([]);

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
        
        buscarAtividades();
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
                <a href='/main'> Página Inicial </a>
                <a href='/team'> Minha Equipe </a>
                <a href='/activitys-student'> Atividades </a>
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

            <div className='cards-activitys'>
                { atividades.length > 0 ? (
                    <ul>
                        { atividades.map(atividade =>(
                            <li>
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
