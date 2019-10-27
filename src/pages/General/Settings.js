import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../../assets/user-profile.svg'

import './Settings.css';
import api from '../../service/api';

export default function MainStudent({ history, match }) {

    const [user, setUser] = useState('');

    function selecionarEquipe(){
        history.push(`${user.id_user}/main/team`)
    }

    useEffect(() => {
        async function buscarUser(){
            const response = await api.post('/userId', {
                id: match.params.idUser
            })
    
            if (response.data != null){
                setUser(response.data);
            }
        }
        buscarUser();

        console.log(user)
    }, [])
    

    return (
    <div className='settings'>
    
        <nav>
            <div className='navbar'>
                <div className='sitename'>
                    <a href='/main'> 
                        BATTLECLASS
                    </a>
                </div>
                <div className='student-data'>
                    <div className='student-name'>
                        {user.nome}
                    </div>
                    <div className='trace'>
                        -
                    </div>
                    <div className='student-points'>
                        {user.pontuacao} PONTOS
                    </div>
                </div>
            </div>
           
            <hr id='hr' />
        </nav>

        {/*
        <div className='menu'>
            <a href='/main'> Página Inicial </a>
            <a href='/team'> Minha Equipe </a>
            <a onClick={() => (history.push(`/${user._id}/activitys-student`))}> Atividades </a>
            <div className='menu-bottom'>
                <a href='/settings'> Configurações </a>
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
                <ul>
                    <li>
                        <div className='team-ranking'>
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
                    </li>
                    <hr id='hr-ranking'/>
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
                    <hr id='hr-ranking'/>
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
                    <hr id='hr-ranking'/>
                </ul>
            </div>
        </div>

        <div className='inputs'>
            <div className='data-name'>
                <div className='label-name'>
                    <label>Name</label>
                </div>
                <div className='div-input-name'>
                    <input className='form-control input-name' readonly='true'/>
                </div>
            </div>

            <div className='data-email'>
                <div className='label-email'>
                    <label>E-mail</label>
                </div>
                <div className='div-input-email'>
                    <input className='form-control input-email' readonly='true'/>
                </div>
            </div>   
            <div className='data-password'>
                <div>
                    <div className='label-password'>
                        <label>Senha</label>
                    </div>
                    <div className='div-input-password'>
                        <input className='form-control input-password' />
                    </div>
                </div>
                <div className='div-button'>
                    <button className='btn btn-outline-primary change-button'>Alterar</button>
                </div>
            </div>

        </div>

    </div>

    );
}
