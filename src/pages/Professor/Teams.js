import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import './Teams.css';

export default function Team() {
    const [showMembers, setShowMembers] = useState('')


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
                <ul>
                    <li>
                        <div className='card-individual'>
                            <div className='team-data'>
                                <div className='team-name'>
                                    <strong>Bonde do Tigrãaaaaao</strong>
                                </div>
                                <div className='team-points'>
                                    75
                                </div>
                            </div>

                            <hr className='hr-card-team' />

                            <div className='student-data'>
                                <div className='student-name'>
                                    André Fernandes Bispo
                                </div>
                                <div className='student-point'>
                                    75
                                </div>
                            </div>
                            <div className='student-data'>
                                <div className='student-name'>
                                    Joao Vitor Soares Egidio
                                </div>
                                <div className='student-point'>
                                    85
                                </div>
                            </div>
                            <div className='student-data'>
                                <div className='student-name'>
                                    Emmanuel Peralta
                                </div>
                                <div className='student-point'>
                                    65
                                </div>
                            </div>

                            <hr className='hr-card-team' />

                            <div className='challenge-data'>
                                <div className='str-challenge'>
                                    <strong>Desafios:</strong>
                                </div>
                                <div className='challenge-wins'>
                                    Ganhados: 3
                                </div>
                                <div className='challenge-loses'>
                                    Perdidos: 2
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className='card-individual'>
                            <div className='team-data'>
                                <div className='team-name'>
                                    <strong>Os Hawaianos</strong>
                                </div>
                                <div className='team-points'>
                                    75
                                </div>
                            </div>

                            <hr className='hr-card-team' />
                            
                            <div className='student-data'>
                                <div className='student-name'>
                                    André Fernandes Bispo
                                </div>
                                <div className='student-point'>
                                    75
                                </div>
                            </div>
                            <div className='student-data'>
                                <div className='student-name'>
                                    Joao Vitor Soares Egidio
                                </div>
                                <div className='student-point'>
                                    85
                                </div>
                            </div>
                            <div className='student-data'>
                                <div className='student-name'>
                                    Emmanuel Peralta
                                </div>
                                <div className='student-point'>
                                    65
                                </div>
                            </div>

                            <hr className='hr-card-team' />

                            <div className='challenge-data'>
                                <div className='str-challenge'>
                                    <strong>Desafios:</strong>
                                </div>
                                <div className='challenge-wins'>
                                    Ganhados: 3
                                </div>
                                <div className='challenge-loses'>
                                    Perdidos: 2
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className='card-individual'>
                            <div className='div-team-name'>
                                <div>
                                    <label>Nome da equipe</label>
                                </div>
                                <div>
                                    <input className='input-team-name' placeholder='Insira o nome da equipe'/>
                                </div>
                            </div>

                            <div className='select-students'>
                                <div>
                                    <label>Integrates</label>
                                </div>
                                <div>
                                    <select>
                                        <option value=''></option>
                                        <option value='André Fernandes Bispo'>André Fernandes Bispo</option>
                                        <option value='João Vitor Soares Egidio'>João Vitor Soares Egidio</option>
                                        <option value='Emmanuel Peralta'>Emmanuel Peralta</option>
                                        <option value='lista'>Lista com o nome de todos os alunos</option>
                                    </select>
                                </div>
                                <div className='student-selected'>

                                </div>
                            </div>

                            <div className='buttons'>
                                <div>
                                    <button className='btn btn-outline-primary' onClick={adicionar_estudante}>+ Integrante</button>
                                </div>
                                <div>
                                    <button className='btn btn-primary'>Adicionar</button>
                                </div>
                            </div>
                            
                            

                        </div>
                    </li>
                    
                </ul>

            </div>
                    
        </div>
    );
}
