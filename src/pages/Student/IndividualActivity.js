import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';

import './IndividualActivity.css';

export default function Activity() {
    const [showMembers, setShowMembers] = useState('')

    function dropdown() {
        setShowMembers('true')
    }

    return (
        <div className='individual-activity'>

            <nav>
                <div className='navbar'>
                    <div className='sitename'>
                        <a href='/main'>
                            BATTLECLASS
                        </a>
                    </div>
                    <div className='student-data'>
                        <div className='activity-title'>
                            [Título da atividade]
                        </div>
                        
                        <div className='trace'>
                            -
                        </div>
                        <div className='team-points-principal'>
                            [Nota]
                        </div>
                    </div>
                    <div className='dates'>
                        <div className='trace'>
                            Postado em: dd/MM/aaaa
                        </div>
                        <div className='team-points-principal'>
                            Entrega: dd/MM/aaaa
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

            <div className='cards-questions'>
                <ul>
                    <li>
                        <div className='card-individual'>
                            <div className='question'>
                                <strong>Questão 1</strong>
                            </div>
                            <div className='activity-content'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            <div className='alternatives'>
                                <div className='alternative'>
                                    <div>
                                        <input type='radio' name='radio-question' className='radio-input' />
                                    </div>
                                    <div>
                                        <label for='radio-input' className='radio-input-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </label>
                                    </div>
                                </div>
                                <div className='alternative'>
                                    <div>
                                        <input type='radio' name='radio-question' className='radio-input' />
                                    </div>
                                    <div>
                                        <label for='radio-input' className='radio-input-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </label>
                                    </div>
                                </div>
                                <div className='alternative'>
                                    <div>
                                        <input type='radio' name='radio-question' className='radio-input' />
                                    </div>
                                    <div>
                                        <label for='radio-input' className='radio-input-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </label>
                                    </div>
                                </div>
                                <div className='alternative'>
                                    <div>
                                        <input type='radio' name='radio-question' className='radio-input' />
                                    </div>
                                    <div>
                                        <label for='radio-input' className='radio-input-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </label>
                                    </div>
                                </div>
                                <div className='alternative'>
                                    <div>
                                        <input type='radio' name='radio-question' className='radio-input' />
                                    </div>
                                    <div>
                                        <label for='radio-input' className='radio-input-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
