import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import './Teams.css';
import api from '../../service/api';

export default function Team() {
    const [showMembers, setShowMembers] = useState('')
    const [ grupos, setGrupos ] = useState([]);
    const [ usuarios, setUsuarios ] = useState([])
    var [ cont, setCont ] = useState(0)

    const listaU = []

    function dropdown() {
        setShowMembers('true')
    }

    function adicionar_estudante(){
        if (document.querySelector('select').value == '') {
            alert('Selecione um estudante')
        }
        else {
            var valueSelect = document.querySelector('select').value
            var studentTag = document.querySelector('.student-selected')
            var createDiv = document.createElement('div')
            let studentName = document.createTextNode(valueSelect)
            createDiv.appendChild(studentName)
            studentTag.appendChild(createDiv)
        }
    }
 
    useEffect(() => {
        async function buscarGrupos(){
            const response = await api.get('/buscar/grupo/all');
            setGrupos(response.data)

            for(let u in response.data) {
                for (let i in response.data[u].integrantes){
                    buscaUser(response.data[u].integrantes[i])
                }
            }
            
            
        }

        async function buscaUser(id) {
            const response = await api.get('/buscar/userId', {headers: {
                id:id
            }})

            listaU.push(response.data)
            setUsuarios(listaU)
            setCont(cont += 1)
            
            
        }
        buscarGrupos()
        
    }, [])

    return (
        <div className='teams'>
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

            <div className='cards-teams'>
                { grupos.length > 0 ? (
                    <ul>
                        {grupos.map(grupo => (
                            <li key={grupo._id}>
                                <div className='card-individual'>
                                    <div className='team-data'>
                                        <div className='team-name'>
                                            <strong>{grupo.nome}</strong>
                                        </div>
                                        <div className='team-points'>
                                            {grupo.pontuacao}
                                        </div>
                                    </div>

                                    <hr className='hr-card-team' />
    
                                    { cont > 0 ? (
                                        <ul>
                                            { usuarios.map(user => (
                                               
                                                <li classname='student-data' key={user._id}>
                                                    <RcIf if={grupo.integrantes.includes(user._id)}>
                                                        <div className='student-data'>
                                                            <div className='student-name'>
                                                                {user.nome}
                                                            </div>
                                                            <div className='student-point'>
                                                                {user.pontuacao}
                                                            </div>
                                                        </div>
                                                    </RcIf>
                                                    
                                                </li>
                                                
                                            ))}
                                        </ul>
                                        
                                    ): (
                                        <div> Sem integrantes </div>
                                    )}

                                    <hr className='hr-card-team' />

                                    <div className='challenge-data'>
                                        <div className='str-challenge'>
                                            <strong>Desafios:</strong>
                                        </div>
                                        <div className='challenge-wins'>
                                            Ganhados: {grupo.vitorias}
                                        </div>
                                        <div className='challenge-loses'>
                                            Perdidos: {grupo.derrotas}
                                        </div>
                                    </div>

                                </div>
                            </li>
                        ))}
                        
                    </ul>

                ): (
                    <div> Sem Grupo </div>
                )}
            </div>
                    
        </div>
    );
}
