import React, { useState } from 'react'
import RcIf, { RcElse } from 'rc-if';
import SweetAlert from 'sweetalert2-react';
import api from '../service/api';
//import mainBanner from '../assets/icons/1920x650.png'
//import secondaryBanner from '../assets/icons/390x280.png'
//import 'bootstrap/dist/css/bootstrap.min.css';

import mainImage from '../assets/user.svg' 
import userIcon from '../assets/user.svg'
import padlockIcon from '../assets/padlock.png'

import './Login.css';

export default function Login({ history }) {
    const [ username, setUsername ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ variavel, setVariavel ] = useState('');

    async function efetuarLogin(e){
        e.preventDefault();

        const response = await api.post('/login',{
            email: username,
            senha: senha
        });

        if(response.data.login == true){
            history.push('/main')
        }
        else {
            setVariavel("login incorreto")
        }
        console.log(response.data);
        
    }
    return (
    <div className='main'>
        {/*
        <div class='logo'>
            <img src={ mainImage } alt='Íconce de usuário' id='main-image' />
        </div>

        <hr id='divisor' />
        */}
        <RcIf if={variavel === "login incorreto"}>
            <SweetAlert
                show={variavel}
                title="Falha no Login"
                text="Login ou Senha incorretos"
                onConfirm={() => setVariavel(null)}
            />
        </RcIf>
    
        <div className='form'>
            <img src={ mainImage } alt='Íconce de usuário' id='main-image' />

            <hr id='hr-top-left' />
            <hr id='hr-top-right' />

            <form onSubmit={efetuarLogin}>  {/*#formLogin="ngForm" (ngSubmit)="login(formLogin)"*/}
                <div className='inputs'>
                    {/*PASSWORD INPUT*/}
                    <div className='username'>
                        <div className='div-user-icon'>
                            <img id='user-icon' src={ userIcon } alt='imagem usuário' />
                        </div>
                        <div>
                            <input  className="form-control" id="email-input" aria-describedby="emailHelp"
                                placeholder="usuario@rede.ulbra.br" name='email' type="text" value={username} onChange={e => setUsername(e.target.value)}  required />
                        </div>
                    </div>

                    {/*PASSWORD INPUT*/}
                    <div className='password'>
                        <div className='div-padlock-icon'>
                            <img id='padlock-icon' src={ padlockIcon } alt='padlock' />
                        </div>
                        <input type="password" className="form-control" name="senha" id="password-input" 
                        placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required/>
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
