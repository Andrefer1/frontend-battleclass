import React from 'react'
//import mainBanner from '../assets/icons/1920x650.png'
//import secondaryBanner from '../assets/icons/390x280.png'
//import 'bootstrap/dist/css/bootstrap.min.css';

import mainImage from '../assets/user.svg' 
import userIcon from '../assets/user.svg'
import padlockIcon from '../assets/padlock.png'

import './Register.css';

export default function Register() {
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

            <h2 id='h2-cadastro'>CADASTRO</h2>

            <form>  {/*#formLogin="ngForm" (ngSubmit)="login(formLogin)"*/}
                <div className='inputs'>
                    {/*PASSWORD INPUT*/}
                    <label className='label-username-input' for='username-input'> Digite seu e-mail: </label>
                    <div className='username'>
                        <div className='div-user-icon'>
                            <img id='user-icon' src={ userIcon } alt='imagem usuário' />
                        </div>
                        <div>
                            <input  className="form-control" id="username-input" aria-describedby="usernameHelp"
                                placeholder="usuario@rede.ulbra.br" name='username' type="text" required />
                        </div>
                    </div>

                    {/*PASSWORD INPUT*/}
                    <label className='label-password-input' for='password-input'> Digite sua senha: </label>
                    <div className='password'>
                        <div className='div-padlock-icon'>
                            <img id='padlock-icon' src={ padlockIcon } alt='padlock' />
                        </div>
                        <input type="password" className="form-control" name="senha" id="password-input" 
                        placeholder="Senha" required/>
                    </div>
                

                    {/*PASSWORD INPUT CONFIRMATION*/}
                    <label className='label-password-input-confirmation' for='password-input-confirmation'> Confirme senha: </label>
                    <div className='password-confirmation'>
                        <div className='div-padlock-icon-confirmation'>
                            <img id='padlock-icon-confirmation' src={ padlockIcon } alt='padlock' />
                        </div>
                        <input type="password" name="password-confirmation" id="password-input-confirmation" 
                        placeholder="Confirme sua senha" required/>
                    </div>
                </div>
                    
                <div className="div-accept-terms">
                    <input type="checkbox" id='check-input' />
                    <label className="check-label" for="check-input"> Li e concordo com os termos </label>
                </div>
                
                <button className="btn btn-primary enter-button"> Criar </button> {/*[disabled]="formLogin.invalid"*/}

                <div className='link'>
                    <a href='/' id='link-login'> Já possui cadastro? </a>
                </div>
                
            </form>
        </div>

    </div>

    );
}
