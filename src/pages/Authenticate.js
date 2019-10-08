import React, { useState } from 'react';
import RcIf from 'rc-if';
import SweetAlert from 'sweetalert2-react';
//import mainBanner from '../assets/icons/1920x650.png'
//import secondaryBanner from '../assets/icons/390x280.png'
//import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../service/api'

export default function Authenticate({ history, match }) {

    const [ authenticateSucess, setAuthenticateSucess ] = useState('');
    const [ authenticateError, setAuthenticateError ] = useState('');
    
    async function setarAuthenticate(){
        console.log("eaeeeeee")
        const response = await api.get('/autenticar', {
            headers: {
                token: match.params.token
            }
        })

        console.log(response)
        if(response.data.msg == "sucess"){
            setAuthenticateSucess('true')
        } else {
           setAuthenticateError('true')
        }
    }

    function navegarTela(){
        history.push('/')
    }
    return (
        
    <div className='main' onChange={setarAuthenticate}> 

        <h3> Seja bem-vindo, clique no botão abaixo para confirmar seu cadastro:</h3>
        <button onClick={setarAuthenticate}> Confirmar </button>

        <RcIf if={authenticateSucess === "true"}>
            <SweetAlert
                show={authenticateSucess}
                title="Parabéns!"
                text="Cadastro autenticado com sucesso! Clique para poder efetuar o login"
                type="success"
                onConfirm={() => {
                    navegarTela();
                }}
            />
        </RcIf>
        <RcIf if={authenticateError === "true"}>
            <SweetAlert
                show={authenticateError}
                title="Sinto Muito!"
                text="Cadastro não foi efeituado com sucesso"
                type="error"
                onConfirm={() => {
                    setAuthenticateError(null);
                }}
            />
        </RcIf>

    </div>

    );
}
