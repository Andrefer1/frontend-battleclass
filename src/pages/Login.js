import React from 'react'
//import mainBanner from '../assets/icons/1920x650.png'
//import secondaryBanner from '../assets/icons/390x280.png'
//import 'bootstrap/dist/css/bootstrap.min.css';

import mainImage from '../assets/user.svg' 
import userIcon from '../assets/user.svg'
import padlockIcon from '../assets/padlock.png'

import './Login.css';

export default function Login() {
    return (
    <div className='main'>
        {/*
        <div class='logo'>
            <img src={ mainImage } alt='Íconce de usuário' id='main-image' />
        </div>

        <hr id='divisor' />
        */}
    
        <div className='form'>
            <img src={ mainImage } alt='Íconce de usuário' id='main-image' />

            <hr id='hr-top-left' />
            <hr id='hr-top-right' />

            <form>  {/*#formLogin="ngForm" (ngSubmit)="login(formLogin)"*/}
                <div className='inputs'>
                    {/*PASSWORD INPUT*/}
                    <div className='username'>
                        <div className='div-user-icon'>
                            <img id='user-icon' src={ userIcon } alt='imagem usuário' />
                        </div>
                        <div>
                            <input  className="form-control" id="email-input" aria-describedby="emailHelp"
                                placeholder="usuario@rede.ulbra.br" name='email' type="text" required />
                        </div>
                    </div>

                    {/*PASSWORD INPUT*/}
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
                
                <button className="btn btn-primary enter-button" href='./main-student' >Entrar</button> {/*[disabled]="formLogin.invalid"*/}

                <div className='links'>
                    <div>
                        <a href='#' id='link-forgot-password'>Esqueci minha senha</a>
                    </div>
                    <hr id='divider-bottom' />
                    <div>
                        <a href='./register' id='link-register'>Ainda não possui cadastro?</a>
                    </div>
                </div>
                
               
            </form>
        </div>

    </div>

    );
}
