import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../assets/user-profile.svg'

import './Main.css';
import api from '../service/api';

export default function MainStudent({ history, match }) {

    const [user, setUser] = useState('');

    function selecionarEquipe(){
        history.push('/main/team')
    }

    useEffect(() => {
        async function buscarUser(){
            const response = await api.post('/userId', {
                id: match.params.id
            })
    
            if (response.data != null){
                setUser(response.data);
            }
        }
        buscarUser();

        console.log(user)
    }, [])
    

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

        <div className='tasks'>
            <div className='task'>
                <div className='task-content'>
                    <div className='task-title'>
                        <b>[Título da Atividade]</b>
                    </div>
                    <div className='task-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
                        error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam 
                        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                </div>
                <div className='task-points'>
                    <div className='task-points-notes'>
                        <b>Nota</b>
                    </div>
                    <div className='task-pontuation'>
                        65
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
