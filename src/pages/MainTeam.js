import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import mainImage from '../assets/user.svg' 
import userProfile from '../assets/user-profile.svg'

import './MainTeam.css';

export default function MainStudent() {
    return (
    <div className='main'>

{/*
<div id="demo">
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Lorem ipsum dolor</li></a>
                <a href="#"><li>Consectetur adipisicing</li></a>
                <a href="#"><li>Reprehenderit</li></a>
                <a href="#"><li>Commodo consequat</li></a>
            </ul>
        </div>
        <div class="parent">
            <img src={mainImage} alt='Imagem do usuário' width='30' height='30'/>
        </div>
    </div>
</div>
*/}
    

        <nav>
            <div className='navbar'>
                <div className='sitename'>
                    <a href='/main/team'> 
                        BATTLECLASS
                    </a>
                </div>
                {/*
                <div className='username'>
                    André
                </div>
                */}
                <div class="dropdown">
                    <img src={mainImage} alt='Imagem do usuário' class="dropimg" />
                    <div class="dropdown-content">
                        <a href='/main'>Início</a>
                        <a href="google.com"> Meu Perfil</a>
                        <a href="google.com">Equipe</a>
                    </div>
                </div>
            </div>
           
            <hr />
        </nav>

        <div className='cards-students'>
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
        </div>

        <div className='rankings'>
            <div className='ranking-do-dia' >
                <b> Ranking do Dia</b>
                <ul>
                    <li>
                        <div className='user-ranking'>
                            <div className='user-profile'>
                                <img src={userProfile} alt='Imagem do usuário' />
                            </div>          
                            <div className='team-name'>
                                Equipe 1
                            </div>       
                            <div className='team-points'>
                                75
                            </div>
                        </div>
                    </li>
                    <hr id='hr-ranking'/>
                    <li>
                        <div className='user-ranking'>
                            <div className='user-profile'>
                                <img src={userProfile} alt='Imagem do usuário' />
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
                        <div className='user-ranking'>
                            <div className='user-profile'>
                                <img src={userProfile} alt='Imagem do usuário' /> 
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




        <div className='btns-activitys'>
            {/*colocar um for para adicionar os botões das atividades*/}
            <button className='btn btn-primary btn-activity'>
               Atividade 1
            </button>
            <button className='btn btn-primary btn-activity'>
                Atividade 2
            </button>
            <button className='btn btn-primary btn-activity'>
                Atividade 3
            </button>
        </div>

        {/*
        <div class='logo'>
            <img src={ mainImage } alt='Íconce de usuário' id='main-image' />
        </div>

        <hr id='divisor' />
        */}

        {/*------------
        <div className='form'>
            <img src={ mainImage } alt='Íconce de usuário' id='main-image' />

            <hr id='hr-top-left' />
            <hr id='hr-top-right' />

            <form>  {/*#formLogin="ngForm" (ngSubmit)="login(formLogin)"*/}
        {/*------------
                <div className="login-form">
                    <div className='inputs'>
                        {/*PASSWORD INPUT*/}
        {/*------------
                        <div className='username'>
                            <div className='div-user-icon'>
                                <img id='user-icon' src={ userIcon } alt='imagem usuário' />
                            </div>
                            <div>
                                <input  className="form-control" id="email-input" aria-describedby="emailHelp"
                                    placeholder="usuario@rede.ulbra.br" name='nickname' type="text" required />
                            </div>
                        </div>

                        {/*PASSWORD INPUT*/}
        {/*------------
                        <div className='password'>
                            <div className='div-padlock-icon'>
                                <img id='padlock-icon' src={ padlockIcon } alt='padlock' />
                            </div>
                            <input type="password" className="form-control" name="senha" id="password-input" 
                            placeholder="Senha" required/>
                        </div>
                    </div>

                    <div className="div-check">
                        <input type="checkbox" id='check-input' />
                        <label className="check-label" for="check-input"> Vender a alma</label>
                    </div>
                    
                    <button className="btn btn-primary enter-button" >Entrar</button> {/*[disabled]="formLogin.invalid"*/}
        {/*------------
                    <div className='links'>
                        <div>
                            <a href='#' id='link-forgot-password'>Esqueci minha senha</a>
                        </div>
                        <hr id='divider-bottom' />
                        <div>
                            <a href='./register' id='link-register'>Ainda não possui cadastro?</a>
                        </div>
                    </div>
                    
                    <hr id='hr-bottom' />
                </div>
            </form>
        </div>
        ----------*/}
    </div>

    );
}
