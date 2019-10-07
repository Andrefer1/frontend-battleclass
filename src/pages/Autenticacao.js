import React, { useState } from 'react';
import RcIf from 'rc-if';
import SweetAlert from 'sweetalert2-react';
//import mainBanner from '../assets/icons/1920x650.png'
//import secondaryBanner from '../assets/icons/390x280.png'
//import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../service/api'

import './Register.css';

export default function Autenticacao({ history, match }) {

    const [ autenticacaoSucess, setAutenticacaoSucess ] = useState('');
    const [ autenticacaoError, setAutenticacaoError ] = useState('');
    
    async function setarAutenticacao(){
        console.log("eaeeeeee")
        const response = await api.get('/autenticar', {
            headers: {
                token: match.params.token
            }
        })

        console.log(response)
        if(response.data.msg == "sucess"){
            setAutenticacaoSucess('true')
        } else {
           setAutenticacaoError('true')
        }
    }

    function navegarTela(){
        history.push('/')
    }
    return (
        
    <div className='main' onChange={setarAutenticacao}> 
        {/*
        <div class='logo'>
            <img src={ mainImage } alt='Íconce de usuário' id='main-image' />
        </div>

        <hr id='divisor' />
        */}

        <h3> Bem vindo, clique no botão abaixo para confirmar seu cadastro.</h3>
        <button onClick={setarAutenticacao}> Confirmar </button>

        <RcIf if={autenticacaoSucess === "true"}>
            <SweetAlert
                show={autenticacaoSucess}
                title="Parabéns!!"
                text="Cadastro autenticado com sucesso. Click para poder efetuar o login"
                type="success"
                onConfirm={() => {
                    navegarTela();
                }}
            />
        </RcIf>
        <RcIf if={autenticacaoError === "true"}>
            <SweetAlert
                show={autenticacaoError}
                title="Sinto Muito!!"
                text="Cadastro nao foi autenticado com sucesso"
                type="error"
                onConfirm={() => {
                    setAutenticacaoError(null);
                }}
            />
        </RcIf>
       
      

    </div>

    );
}
