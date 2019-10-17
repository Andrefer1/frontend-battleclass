import React, { useEffect } from 'react';

import kirito from '../assets/icons/jv.png';
import ed from '../assets/icons/manel.png';
import gohan from '../assets/icons/andre.png';
import api from '../service/api';


export default function Test() {
    const heros = [
        { nomePersonagem:'Kirito', url: kirito},
        { nomePersonagem:'Edward Elric', url:ed},
        { nomePersonagem:'Gohan', url:gohan},
    
    ]

    useEffect(() => {
        async function salvarIcons(){
            var cont = 31
            for (let h in heros){
                await api.post('/icon', {
                    id: cont,
                    nomePersonagem: heros[h].nomePersonagem,
                    url: heros[h].url,
                })
                cont += 1;
                console.log(heros[h])
            }
        }
        salvarIcons();
        console.log('finalizado!!!!')
    },[]);

    return(
        <div>Executado</div>
    );
}