import React, { useState, useEffect } from 'react';
import RcIf from 'rc-if';
import SweetAlert from 'sweetalert2-react';
//import mainBanner from '../assets/icons/1920x650.png'
//import secondaryBanner from '../assets/icons/390x280.png'
//import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../service/api'

import mainImage from '../assets/user.svg' 
import userIcon from '../assets/user.svg'
import padlockIcon from '../assets/padlock.png'

import './Register.css';

export default function Register({ history }) {
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ professor, setProfessor ] = useState();
    const [ cadastro, setCadastro ] = useState('');

    const [ senha1, setSenha1 ] = useState('');
    const [ senha2, setSenha2 ] = useState('');


    async function efetuarCadastro(e){
        e.preventDefault();
        
        const response = await api.post('/cadastro/usuario',{
            nome: nome,
            email: email,
            senha: senha,
            professor: professor
        });

        if(response.data.user){
            console.log(response.data)
            setCadastro('true')
        }
        else {
            history.push('/main')
        }
        
    }

    useEffect(() => {
        if (senha1 !== senha2){
            console.log("Senha não coincidem")
        } else {
            setSenha(senha2);
            console.log(senha)
        }
        
        if (email.includes('rede.ulbra.br')){
            setProfessor(false);
        } else if(email.includes('ulbra.br')){
            setProfessor(true);
        }
        
        console.log(professor);
        
    })
    return (
        
    <div className='main'>
        {/*
        <div class='logo'>
            <img src={ mainImage } alt='Íconce de usuário' id='main-image' />
        </div>

        <hr id='divisor' />
        */}

        <RcIf if={cadastro === "true"}>
            <SweetAlert
                show={cadastro}
                title="Falha no Cadastro"
                text="E-mail já cadastrado!"
                onConfirm={() => setCadastro(null)}
            />
        </RcIf>
        <div className='form'>
            
            <img src={ mainImage } alt='Íconce de usuário' id='main-image' />

            <hr id='hr-top-left' />
            <hr id='hr-top-right' />

            <h2 id='h2-cadastro'>CADASTRO</h2>

            <form onSubmit={efetuarCadastro}>  {/*#formLogin="ngForm" (ngSubmit)="login(formLogin)"*/}
                <div className='inputs'>
                    {/*PASSWORD INPUT*/}
                    
                    <label className='label-name-input' for='name-input'> Digite seu nome: </label>

                    <div className='name'>
                        <div className='div-user-icon'>
                            <img id='user-icon' src={ userIcon } alt='imagem usuário' />
                        </div>
                        <div>
                            <input  className="form-control" id="name-input" aria-describedby="nameHelp"
                                placeholder="Digite seu nome" name='name' type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                        </div>
                    </div>

                    <label className='label-username-input' for='username-input'> Digite seu e-mail: </label>
                    
                    <div className='username'>
                        <div className='div-user-icon'>
                            <img id='user-icon' src={ userIcon } alt='imagem usuário' />
                        </div>
                        <div>
                            <input  className="form-control" id="username-input" aria-describedby="usernameHelp"
                                placeholder="usuario@rede.ulbra.br" name='username' type="text" value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                    </div>

                    {/*PASSWORD INPUT*/}
                    <label className='label-password-input' for='password-input'> Digite sua senha: </label>
                    <div className='password'>
                        <div className='div-padlock-icon'>
                            <img id='padlock-icon' src={ padlockIcon } alt='padlock' />
                        </div>
                        <input type="password" className="form-control" name="senha" id="password-input" 
                        placeholder="Senha" value={senha1} onChange={e => setSenha1(e.target.value)} required/>
                    </div>
                

                    {/*PASSWORD INPUT CONFIRMATION*/}
                    <label className='label-password-input-confirmation' for='password-input-confirmation'> Confirme senha: </label>
                    <div className='password-confirmation'>
                        <div className='div-padlock-icon-confirmation'>
                            <img id='padlock-icon-confirmation' src={ padlockIcon } alt='padlock' />
                        </div>
                        <input type="password" name="password-confirmation" id="password-input-confirmation" 
                        placeholder="Confirme sua senha" value={senha2} onChange={e => setSenha2(e.target.value)} required/>
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
