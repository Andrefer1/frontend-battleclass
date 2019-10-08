import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import mainImage from '../assets/user.svg' 
import userProfile from '../assets/user-profile.svg'

import './Main.css';

export default function MainStudent({ history }) {

    function selecionarEquipe(){
        history.push('/main/team')
    }

    return (
    <div className='main-student'>
    
        <nav>
            <div className='navbar'>
                <div className='sitename'>
                    <a href='/main'> 
                        BATTLECLASS
                    </a>
                </div>
                <div className='student-data'>
                    <div className='student-name'>
                        ANDRÉ FERNANDES BISPO
                    </div>
                    <div className='trace'>
                        -
                    </div>
                    <div className='student-points'>
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

       

        <div className='btns-profiles'>
            <a onClick={selecionarEquipe}> 
                <button className='btn btn-primary btn-team'>
                    <div className='img-profiles'>
                        <div>
                            <img src={userProfile} alt='Imagem do usuário' className='user-profile' />
                        </div>
                        <div>
                            <img src={userProfile} alt='Imagem do usuário' className='user-profile' />
                        </div>
                        <div>
                            <img src={userProfile} alt='Imagem do usuário' className='user-profile' />
                        </div>
                        <div className='str-equipe'>
                            Equipe
                        </div>
                    </div>
                </button>
            </a>
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
