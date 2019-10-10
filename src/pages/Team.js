import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import mainImage from '../assets/user.svg';
import userProfile from '../assets/user-profile.svg';

import './Team.css';

export default function Main() {

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
            <a href='/main/team'> Minha Equipe </a>
            <a href='google.com'> Atividades </a>
            <div className='menu-bottom'>
                <a href='google.com'> Configurações </a>
                <a href='google.com'> Contatos </a>
                <a href='google.com'> Sobre </a>
            </div>
        </div>

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

        <div className='cards-students'>
            <ul>
                <li>
                    <div className='card-individual'>
                        <div className='profile-data'>
                            <div className='img-profile'>
                                <img src={userProfile} alt='Imagem do usuário' className='img-individual' />
                            </div>
                            <div className='username-profile'>
                                André Fernandes Bispo
                            </div>
                            <div className='points'>
                                75
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='card-individual'>
                        <div className='profile-data'>
                            <div className='img-profile'>
                                <img src={userProfile} alt='Imagem do usuário' className='img-individual' />
                            </div>
                            <div className='username-profile'>
                                João Vitor S. Egidio
                            </div>
                            <div className='points'>
                                75
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='card-individual'>
                        <div className='profile-data'>
                            <div className='img-profile'>
                                <img src={userProfile} alt='Imagem do usuário' className='img-individual' />
                            </div>
                            <div className='username-profile'>
                                Emmanuel Peralta
                            </div>
                            <div className='points'>
                                75
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    );
}
