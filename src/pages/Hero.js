import React, { useState, useEffect } from 'react';
import './Hero.css';
import api from '../service/api';
import RcIf, { RcElse } from 'rc-if';
import SweetAlert from 'sweetalert2-react';


export default function Hero({ history, match }) {
    
    const [ confirmation, setConfirmation ] = useState('');
    const [ heros, setHeros ] = useState([]);
    var hero = [];

    async function setarIcon(icon, e){
        e.preventDefault();

        for (let i in heros){
            if(heros[i].id == icon.id){
                heros[i].chosed = true;
            }
        }
        const response = await api.post('/cadastro/usuario/icon', {
            idIcon: icon._id,
            idUser: match.params.id
        })

        if (response.data){
            setConfirmation('true')
        }
    }

    function navegarTela(){
        history.push('/login')
    }

    useEffect(() => {
        async function buscarHeros() {
            const response = await api.get('/icon/all');
            //heros = response.data;
           
            setHeros(response.data)
        }
        
        buscarHeros();
    }, [])


    return(
        <div className='main-container'>
            <RcIf if={confirmation === "true"}>
                <SweetAlert
                    show={confirmation}
                    title="Opaa!!"
                    text="Um email de confirmação foi encaminhado para o seu email."
                    type="warning"
                    onConfirm={() => setConfirmation(null)}
                />
            </RcIf>

            <h2> Escolha seu ícone: </h2>
            { heros.length > 0 ? (
                <ul>
                    {heros.map(icon => (
                        <RcIf if={icon.selecionado === "false"}> 
                            <li key={icon._id} className='imagem3'>
                                <img className='img' src={icon.url} alt={icon.nomePersonagem} onClick={(e) => setarIcon(icon, e)} />
                                <footer>
                                    <strong>{icon.nomePersonagem}</strong>
                                </footer>
                            </li> 
                            <RcElse>
                                <RcIf if={icon.selecionado === "true"}>
                                    <li key={icon._id}>
                                        <img className='img2' src={icon.url} alt={icon.nomePersonagem} />
                                        <footer>
                                            <strong>{icon.nomePersonagem}</strong>
                                        </footer>
                                   </li>
                                </RcIf>
                            </RcElse>
                        </RcIf>
                    ))}
                </ul>
            ) : (
                <div className="empty">Acabou :( </div>
            )}
        </div>
    );
}